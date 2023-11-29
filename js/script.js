let button_mobil = document.querySelector(".service-content-mobil");
let button_motor = document.querySelector(".service-content-motor");
let title_pemesanan = document.querySelector(".title-pemesanan");
let menu = document.querySelector("#menu");
let navLink = document.querySelector(".nav-link");

button_mobil.addEventListener("click", () => {
  title_pemesanan.innerHTML = "Pemesanan Sewa Mobil";
  let form_pemesanan = document.querySelector("#form-pemesanan");
  form_pemesanan.action = "list-mobil.html";
  document
    .querySelector(".service-content-mobil button")
    .classList.add("active");
  document
    .querySelector(".service-content-motor button")
    .classList.remove("active");
});

button_motor.addEventListener("click", () => {
  title_pemesanan.innerHTML = "Pemesanan Sewa Motor";
  let form_pemesanan = document.querySelector("#form-pemesanan");
  form_pemesanan.action = "list-motor.html";
  document
    .querySelector(".service-content-motor button")
    .classList.add("active");
  document
    .querySelector(".service-content-mobil button")
    .classList.remove("active");
});



document.querySelector("#menu").onclick = () => {
  navLink.classList.toggle("active2");
};

// let tanggal = document.querySelector("#tanggal");
// let month = [
//   "Januari",
//   "Febuari",
//   "Maret",
//   "April",
//   "Mei",
//   "Juni",
//   "Juli",
//   "Agustus",
//   "September",
//   "Oktober",
//   "November",
//   "Desember",
// ];

// tanggal.innerHTML = month[new Date().getMonth()];

// tanggal.innerHTML = new Date().toDateString();

// tanggal.innerHTML = new Date().getDay();
