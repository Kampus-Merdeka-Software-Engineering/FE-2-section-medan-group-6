let menu = document.querySelector("#menu");
let navLink = document.querySelector(".nav-link");
const API_URL = "http://localhost:3000"
const containerElemenMotor = document.getElementById('container')

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

 
  