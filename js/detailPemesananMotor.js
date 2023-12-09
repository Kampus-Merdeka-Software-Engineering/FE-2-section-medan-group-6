const API_URL       = "http://localhost:3000"
let URL_PARAMS      = new URLSearchParams(window.location.search)
let idMotor         = URL_PARAMS.get("id_motor")
let idPesanan       = URL_PARAMS.get("id_pesanan")
let pemesan         = document.querySelector("#btn-next");

window.addEventListener("DOMContentLoaded", async () => {
    const motor = await fetch(`${API_URL}/api/motor/${idMotor}`)
    .then(Response => Response.json())
    console.log(motor)
    const pesanan = await fetch(`${API_URL}/api/pesanan/${idPesanan}`)
    .then(Response => Response.json())
    console.log(pesanan)

    document.querySelector(".detailpemesanan").innerHTML = `
    <div class="card-detailpemesanan">
            <div class="card-content-detailpemesanan">
                <div class="fotopemesanan">
                    <img src="./asset/motor-vario-160.jpeg" alt="">
                </div>
                <div class="pemesanan">
                    <p><span>${motor.namaMotor}</span></p>
                    <div class="spesifikasikendaraan">
                        <div class="transmisi">
                            <i class="fa-solid fa-motorcycle"></i>
                            <p>${motor.tipeMotor}</p>
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
                    <p> <span>Rp. ${motor.harga}</span></p>
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
          'tabelMobilId'    : "",
          'tabelMotorId'    : idMotor,
          'tabelpesananId'  : idPesanan
        })
    })
    .then(response => response.json())
    .then(response => {
      document.querySelector('#id').value = response.id
      document.querySelector("#form-pemesan").submit()
    })
});