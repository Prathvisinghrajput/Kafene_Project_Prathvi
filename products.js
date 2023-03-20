document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("loginStatus") !== "true") {
    location.assign("index.html");
  }

  const logoutButton = document.getElementById("logout-button");
  logoutButton.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem("loginStatus", false);
    location.assign("index.html");
  };

  async function fetchProductApi(url) {
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);

    for (let i = 0; i < response.length; i++) {
      let tbody = document.querySelector("#table-body");
      let tr = document.createElement("tr");
      tr.classList.add("table-row");
      tbody.appendChild(tr);

      let td = document.createElement("td");
      td.classList.add("secondary-text");
      td.innerHTML = response[i].id;
      tr.appendChild(td);

      let td1 = document.createElement("td");
      td1.classList.add("primary-text");
      td1.innerHTML = response[i].medicineName;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.classList.add("secondary-text");
      td2.innerHTML = response[i].medicineBrand;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.classList.add("primary-text");
      td3.innerHTML = response[i].expiryDate;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.classList.add("secondary-text");
      td4.innerHTML = response[i].unitPrice;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.classList.add("secondary-text");
      td5.innerHTML = response[i].stock;
      tr.appendChild(td5);
    }

    var expiredCheckBox = document.getElementById("expiredCheckBox");
    expiredCheckBox.addEventListener("change", function (e) {
      e.preventDefault();
      let tablebody = document.getElementById("table-body");
      let tr = tablebody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[3];
        if (td) {
          let textValue = myData(td.textContent || td.innerHTML);
          if (new Date(textValue).getTime() < new Date().getTime()) {
            if (this.checked === true) {
              tr[i].style.display = "";
              $("#count").html(parseInt($("#count").html()) + 1);
            } else {
              tr[i].style.display = "none";
              $("#count").html(parseInt($("#count").html()) - 1);
            }
          }
        }
      }
    });

    var lowStockCheckBox = document.getElementById("lowStockCheckBox");
    lowStockCheckBox.addEventListener("change", function (e) {
      e.preventDefault();
      let tablebody = document.getElementById("table-body");
      let tr = tablebody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[5];
        if (td) {
          let textValue = td.textContent || td.innerHTML;
          if (textValue < 100) {
            if (this.checked === true) {
              tr[i].style.display = "";
              $("#count").html(parseInt($("#count").html()) + 1);
            } else {
              tr[i].style.display = "none";
              $("#count").html(parseInt($("#count").html()) - 1);
            }
          }
        }
      }
    });

    function myData(date) {
      var arr = date.split("-");
      return arr.join(" ");
    }
  }
  fetchProductApi(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
  );
});
