let menu = document.querySelector("#menu");
let navLink = document.querySelector(".nav-link");
const API_URL = "http://localhost:3000"
const containerElemenMotor = document.getElementById('container')
const containerElementPesanan = document.getElementById('container')
let URL_PARAMS = new URLSearchParams(window.location.search)
let id = URL_PARAMS.get("id")

document.querySelector("#menu").onclick = () => {
    navLink.classList.toggle("active2");
  };

fetch(`${API_URL}/api/motor/allMotor`, { method : 'GET'})
 .then(response => response.json())
 .then(data => {
    data.forEach(tabelmotor => {
        const elemenMotor = document.createElement('div')
        elemenMotor.className = 'menu'

        elemenMotor.innerHTML = `
              <div class="card-menu" >
                  <div class="card-content-menu">
                    <div class="fotopemesanan">
                        <img src="./asset/motor-vario-160.jpeg" alt="">
                    </div>
                    <div class="detailpemesanan">
                        <p><span>${tabelmotor.namaMotor}</span></p>
                        <div class="transmisi">
                            <i class="fa-solid fa-motorcycle"></i>
                            <p>${tabelmotor.tipeMotor}</p>
                        </div>
                        <div class="harga">
                            <p> <span>Rp. ${tabelmotor.harga}</span>/hari</p>
                        </div>
                        <div class="buttonstep">
                            <a href="./detail-pemesanan-motor.html">Lanjutkan</a>
                        </div>
                    </div>
              </div>`

        containerElemenMotor.appendChild(elemenMotor)
    });
 })

 window.addEventListener("DOMContentLoaded", async () => {
    const pesanan = await fetch(`${API_URL}/api/pesanan/${id}`)
    .then(Response => Response.json())
    console.log(pesanan)

    document.querySelector(".intro").innerHTML = `
    <div class="card-intro">
                <div class="card-content-intro">
                    <div class="detailpemesananintro">
                        <p>Rental Motor</p>
                        <p><span>Rental Motor</span></p>
                        <p>tanggal mulai sewa : ${pesanan.tanggalMulaiSewa}</p>
                    </div>
                    <div class="buttonpencarian">
                        <p>Ganti Pencarian</p>
                    </div>
                </div>
            </div>
    `
})
 
  