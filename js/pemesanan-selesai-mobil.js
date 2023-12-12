const getElementPesananSelesai  = document.getElementById("container")
const API_URL                   = "https://be-2-medan-6-production.up.railway.app"

fetch(`${API_URL}/api/pemesan/allPemesan`, {method : 'GET'})
.then(response => response.json())
.then(data => {
    data.forEach((pemesan) => {
        const elemenPemesan     = document.createElement('div')
        elemenPemesan.className = 'selesai'

        elemenPemesan.innerHTML = `
        <div class="card-selesai">
                <div class="card-content-selesai">
                    <div class="detailpemesanan">
                        <p><span>${pemesan.nama}</span></p>
                        <div class="spesifikasikendaraan">
                            <div class="transmisi">
                                <i class="fa-solid fa-car-side"></i>
                                <p>${pemesan.nik}</p>
                            </div>
                            <div class="bagasi">
                                <i class="fa-solid fa-suitcase">
                                </i>
                                <p>${pemesan.email}</p>
                            </div>
                            <div class="kursi">
                                <i class="fa-solid fa-couch"></i>
                                <p>${pemesan.nomorHandphone}</p>
                            </div>
                        </div>
                    </div>
                    <div class="statuspemesanan">
                        <p>LUNAS</p>
                    </div>
                </div>
            </div>
        
        `
    })
})