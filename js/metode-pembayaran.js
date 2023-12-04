let searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.get("type"));

let type = document.querySelector("#type");
type.value = searchParams.get("type");

let form = document.querySelector(".payment-container");

form.addEventListener("click", (event) => {
  let type = "";
  if (searchParams.get("type") === "mobil") {
    type = "mobil";
  }
  if (searchParams.get("type") === "motor") {
    type = "motor";
  }
});

let title = document.querySelector("#title");
let namaPemesan = document.querySelector("#nama-pemesan");
let nik = document.querySelector("#nik");
let email = document.querySelector("#email");
let noHp = document.querySelector("#no-hp");

title.value = searchParams.get("title");
namaPemesan.value = searchParams.get("nama-pemesan");
nik.value = searchParams.get("nik");
email.value = searchParams.get("email");
noHp.value = searchParams.get("no-hp");

