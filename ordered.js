document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("loginStatus") !== "true") {
    location.assign("index.html");
  }

  const logoutButton = document.getElementById("logout-button");
  logoutButton.onclick = function (a) {
    a.preventDefault();
    localStorage.setItem("loginStatus", false);
    location.assign("index.html");
  };

  async function fetchProductApi(URL) {
    let data = await fetch(URL);
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
      td1.innerHTML = response[i].customerName;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.classList.add("secondary-text");
      td2.innerHTML = response[i].orderDate;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.classList.add("primary-text");
      td3.innerHTML = response[i].amount;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.classList.add("secondary-text");
      td4.innerHTML = response[i].orderStatus;
      tr.appendChild(td4);
    }

    var newCheckBox = document.getElementById("newCheckBox");
    newCheckBox.addEventListener("change", function (e) {
      e.preventDefault();
      let tablebody = document.getElementById("table-body");
      let tr = tablebody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textValue = td.textContent || td.innerHTML;
          if (textValue === "New") {
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
      console.log(tablebody.getElementsByTagName("tr").length);
    });

    var DeliveredCheckBox = document.getElementById("DeliveredCheckBox");
    DeliveredCheckBox.addEventListener("change", function (e) {
      e.preventDefault();
      let tablebody = document.getElementById("table-body");
      let tr = tablebody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textValue = td.textContent || td.innerHTML;
          if (textValue === "Delivered") {
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

    var IntransitcheckBox = document.getElementById("IntransitcheckBox");
    IntransitcheckBox.addEventListener("change", function (e) {
      e.preventDefault();
      let tablebody = document.getElementById("table-body");
      let tr = tablebody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textValue = td.textContent || td.innerHTML;
          if (textValue === "InTransit") {
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

    var PackedCheckBox = document.getElementById("PackedCheckBox");
    PackedCheckBox.addEventListener("change", function (e) {
      e.preventDefault();
      let tablebody = document.getElementById("table-body");
      let tr = tablebody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          let textValue = td.textContent || td.innerHTML;
          if (textValue === "Packed") {
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
  }
  fetchProductApi("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders");
});
