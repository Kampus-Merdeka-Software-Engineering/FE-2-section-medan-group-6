let menu = document.querySelector("#menu");
let navLink = document.querySelector(".nav-link");
const API_URL = "https://be-2-medan-6-production.up.railway.app"
const containerElemenMyOrder = document.getElementById('container')


document.querySelector("#menu").onclick = () => {
    navLink.classList.toggle("active2");
  };

  fetch(`${API_URL}/api/pemesan/allPemesan`, { method : 'GET'})
 .then(response => response.json())
 .then(data => {
    data.forEach(tabelpemesan,  => {
        const elemenMyOrder     = document.createElement('div')
        elemenMyOrder.className = 'myorder'

        elemenMyOrder.innerHTML = `
                <div class="card-myorder">
                <div class="card-content-myorder">
                    <div class="detailpemesanan">
                        <p><span>${tabelpemesan.nama}</span></p>
                        <div class="spesifikasikendaraan">
                            <div class="transmisi">
                                <p>Rp. ${tabelpemesan.nomorHandphone}</p>
                            </div>
                        </div>
                        <div class="tanggalpemesanan">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>${tabelpemesan.email}</p>
                        </div>
                    </div>
                    <div class="statuspemesanan">
                        <p>lunas</p>
                    </div>
                </div>
            </div>      `

            containerElemenMyOrder.appendChild(elemenMyOrder)
    });
 })
  
