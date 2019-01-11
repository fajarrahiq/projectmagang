var d = new Date();
document.getElementById("tanggal").innerHTML = d.toDateString();

function myFunction() {
    var x = document.getElementById("headingOne");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }