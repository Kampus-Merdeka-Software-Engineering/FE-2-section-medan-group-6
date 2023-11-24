let searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.get("type"));

const form = document.querySelector(".sudah-bayar");

form.addEventListener("click", (event) => {
  let type = "";
  if (searchParams.get("type") === "mobil") {
    type = "mobil";
    window.location.href = `./pemesanan-mobil-selesai.html?type=${type}&title=${searchParams.get("title")}
    &nama-pemesan=${searchParams.get("nama-pemesan")}&nik=${searchParams.get("nik")}&email=${searchParams.get("email")}
    &no-hp=${searchParams.get("no-hp")}`;
  }
  if (searchParams.get("type") === "motor") {
    type = "motor";
    window.location.href = `./pemesanan-motor-selesai.html?type=${type}&title=${searchParams.get("title")}
    &nama-pemesan=${searchParams.get("nama-pemesan")}&nik=${searchParams.get("nik")}&email=${searchParams.get("email")}
    &no-hp=${searchParams.get("no-hp")}`;
  }
  
});
