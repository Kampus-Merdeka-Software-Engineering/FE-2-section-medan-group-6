const API_URL = "http://localhost:3000"
const containerElementMobil = document.getElementById('container')

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
                    <a href="./detail-pemesanan-mobil.html" class="buttonstep">Lanjutkan</a>
                </div>
            </div>
        </div>
        `

        containerElementMobil.appendChild(elemenMobil)
    });
 })

 