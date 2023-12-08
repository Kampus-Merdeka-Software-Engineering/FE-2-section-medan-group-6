let menu = document.querySelector("#menu");
let navLink = document.querySelector(".nav-link");
const API_URL = "http://localhost:3000"
const containerElemenMyOrder = document.getElementById('container')


document.querySelector("#menu").onclick = () => {
    navLink.classList.toggle("active2");
  };

  fetch(`${API_URL}/api/pembayaran/allPembayaran`, { method : 'GET'})
 .then(response => response.json())
 .then(data => {
    data.forEach(tabelpembayaran=> {
        const elemenMyOrder     = document.createElement('div')
        elemenMyOrder.className = 'myorder'

        elemenMyOrder.innerHTML = `
                <div class="card-myorder">
                <div class="card-content-myorder">
                    <div class="detailpemesanan">
                        <p><span>${tabelpembayaran.virtualAccount}</span></p>
                        <div class="spesifikasikendaraan">
                            <div class="transmisi">
                                <p>Rp. ${tabelpembayaran.totalHarga}</p>
                            </div>
                        </div>
                        <div class="tanggalpemesanan">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>${tabelpembayaran.createdAt}</p>
                        </div>
                    </div>
                    <div class="statuspemesanan">
                        <p>${tabelpembayaran.lunasAtauTidak}</p>
                    </div>
                </div>
            </div>      `

            containerElemenMyOrder.appendChild(elemenMyOrder)
    });
 })
  