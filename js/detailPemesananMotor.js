const API_URL = "http://localhost:3000"
let URL_PARAMS = new URLSearchParams(window.location.search)
let idMotor = URL_PARAMS.get("id_motor")
let idPesanan = URL_PARAMS.get("id_pesanan")

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
                <p>Location</p>
                <div class="tanggalpemesanan">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>tanggal mulai : ${pesanan.tanggalMulaiSewa}</p>
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