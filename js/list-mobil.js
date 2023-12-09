let menu = document.querySelector("#menu");
let navLink = document.querySelector(".nav-link");
const API_URL = "http://localhost:3000"
const containerElementMobil = document.getElementById('container')
const containerElementPesanan = document.getElementById('container')
let URL_PARAMS = new URLSearchParams(window.location.search)
let id = URL_PARAMS.get("id")

fetch(`${API_URL}/api/mobil/allMobil`, { method : 'GET'})
 .then(response => response.json())
 .then(data => {
    data.forEach(tabel_mobil => {
        const elemenMobil = document.createElement('div')
        elemenMobil.className = 'menu'

        elemenMobil.innerHTML = `
        <div class="card-menu">
        <div class="card-content-menu" >
        <div class="fotopemesanan">
            <img src="./asset/toyota-calya.jpeg" alt="">
        </div>
        <div class="detailpemesanan">
            <p><span>${tabel_mobil.namaMobil}</span></p>
            <div class="spesifikasikendaraan">
                <div class="transmisi">
                    <i class="fa-solid fa-car-side"></i>
                    <p>Automatic</p>
                </div>
                <div class="bagasi">
                    <i class="fa-solid fa-suitcase">
                    </i>
                    <p>${tabel_mobil.bagasi} bagasi</p>
                </div>
                <div class="kursi">
                    <i class="fa-solid fa-couch"></i>
                    <p>${tabel_mobil.jumlahMuatan} Kursi</p>
                </div>
            </div>
        </div>
                <div class="harga">
                    <p> <span>Rp. ${tabel_mobil.harga}</span>/hari</p>
                    <a href="./detail-pemesanan-mobil.html?id_pesanan=${id}&&id_mobil=${tabel_mobil.id}" class="buttonstep">Lanjutkan</a>
                </div>
            </div>
        </div>
        `

        containerElementMobil.appendChild(elemenMobil)
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
                        <p>Rental Mobil</p>
                        <p><span>Rental Mobil</span></p>
                        <p>tanggal mulai sewa : ${pesanan.tanggalMulaiSewa}</p>
                    </div>
                    <div class="buttonpencarian">
                        <p>Ganti Pencarian</p>
                    </div>
                </div>
            </div>
    `
})

document.querySelector("#menu").onclick = () => {
    navLink.classList.toggle("active2");
};
  