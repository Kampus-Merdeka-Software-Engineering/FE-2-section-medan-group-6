const API_URL       = "https://be-2-medan-6-production.up.railway.app"
let URL_PARAMS      = new URLSearchParams(window.location.search)
let idMobil         = URL_PARAMS.get("id_mobil")
let idPesanan       = URL_PARAMS.get("id_pesanan")
let pemesan         = document.querySelector("#btn-next");

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
            <p>${pesanan.lokasi}</p>
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

pemesan.addEventListener("click", (event) => {
    event.preventDefault()
    fetch(`${API_URL}/api/pemesan/addPemesan`, {
        method  : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body    : JSON.stringify({
          'nama'            : document.querySelector('#nama-pemesan').value,
          'nik'             : document.querySelector('#nik').value,
          'email'           : document.querySelector('#email').value,
          'nomorHandphone'  : document.querySelector('#no-hp').value,
          'tabelMobilId'    : idMobil,
          'tabelMotorId'    : "",
          'tabelpesananId'  : idPesanan
        })
    })
    .then(response => response.json())
    .then(response => {
      document.querySelector('#id').value = response.id
      document.querySelector("#form-pemesan").submit()
    })
});