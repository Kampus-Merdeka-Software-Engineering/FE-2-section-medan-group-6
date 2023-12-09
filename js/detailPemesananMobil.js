const API_URL = "http://localhost:3000"
let URL_PARAMS = new URLSearchParams(window.location.search)
let idMobil = URL_PARAMS.get("id_mobil")
let idPesanan = URL_PARAMS.get("id_pesanan")

window.addEventListener("DOMContentLoaded", async () => {
    const mobil = await fetch(`${API_URL}/api/mobil/${idMobil}`)
    .then(Response => Response.json())
    console.log(mobil)
    const pesanan = await fetch(`${API_URL}/api/pesanan/${idPesanan}`)
    .then(Response => Response.json())
    console.log(pesanan)

    document.querySelector(".detailpemesanan").innerHTML = `
    <div class="card-detailpemesanan">
    <div class="card-content-detailpemesanan">
        <div class="fotopemesanan">
            <img src="./asset/toyota-calya.jpeg" alt="">
        </div>
        <div class="pemesanan">
            <p><span>${mobil.namaMobil}</span></p>
            <div class="spesifikasikendaraan">
                <div class="transmisi">
                    <i class="fa-solid fa-car-side"></i>
                    <p>Automatic</p>
                </div>
                <div class="bagasi">
                    <i class="fa-solid fa-suitcase">
                    </i>
                    <p>${mobil.bagasi}</p>
                </div>
                <div class="kursi">
                    <i class="fa-solid fa-couch"></i>
                    <p>${mobil.jumlahMuatan}</p>
                </div>
            </div>
            <p>Dengan Supir</p>
            <p>Location</p>
            <div class="tanggalpemesanan">
                <i class="fa-solid fa-calendar-days"></i>
                <p>${pesanan.tanggalMulaiSewa}</p>
            </div>
        </div>
        <div class="harga">
            <p>Total</p>
            <p> <span>Rp. ${mobil.harga}</span></p>
        </div>
    </div>
</div>
    `
})
