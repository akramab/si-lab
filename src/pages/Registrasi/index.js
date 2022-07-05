import { useState, useEffect } from "react";
function Registrasi (){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [noRegistasi, setNoRegistrasi] = useState("202r23923")
    const [idPasien, setIdPasien] = useState("123422")
    const [idTabs, setTabs] = useState(1)
    const [arrayCb, setArrayCb] = useState([false,false,false,false])

    function handleClick1() {
        setTabs(1)
    }
    function handleClick2() {
        setTabs(2)
    }

    useEffect = () => {
        getTotal()
        console.log(arrayCb)
    }

    function getTotal() {
        console.log("masuk")
        var totalTrue = 0

        for (var i = 0; i<arrayCb.length; i++) {
            if(arrayCb[i] == true) {
                totalTrue += 1
            }
        }
        if (totalTrue == 0) {
            return 0
        } 
        return 35000*totalTrue
    }

    return (
        <div className="p-8">
            <div className='tex-center items-center mt-4 mb-10'>
                <h1 className='font-bold text-2xl text-info text-center '>Form Registrasi Pasien</h1>
            </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className='w-5/12'>
                        <div class="form-control w-full max-w-md mb-3">
                            <label class="label">
                                <span class="label-text">Tanggal</span>
                            </label>
                            <input type="text" class="input input-info w-full max-w-md" disabled value={date}/>
                        </div>

                        <div class="form-control w-full max-w-md mt-3 mb-3">
                            <label class="label">
                                <span class="label-text">No Registrasi</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-info w-full max-w-md" disabled value={noRegistasi}/>
                        </div>

                        <div class="form-control w-full max-w-md mt-3 mb-3">
                            <label class="label">
                                <span class="label-text">ID Pasien</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-info w-full max-w-md" disabled value={idPasien}/>
                        </div>

                        <div class="form-control w-full max-w-md mt-3 mb-3">
                            <label class="label">
                                <span class="label-text">Nama</span>
                            </label>
                            <input type="text" placeholder="Nama Pasien" class="input input-info w-full max-w-md" />
                        </div>

                        <div class="form-control w-full max-w-md mt-3 mb-3">
                            <label class="label">
                                <span class="label-text">Dokter Pengirim</span>
                            </label>
                            <input type="text" placeholder="Dokter Pengirim" class="input input-info w-full max-w-md" />
                        </div>

                        <div class="form-control w-full max-w-md mt-3 mb-3">
                            <label class="label">
                                <span class="label-text">Alamat Dokter</span>
                            </label>
                            <input type="text" placeholder="Alamat Dokter" class="input input-info w-full max-w-md" />
                        </div>

                        <div class="form-control w-full max-w-md mt-3 mb-3">
                            <label class="label">
                                <span class="label-text">Nomor Telepon Dokter</span>
                            </label>
                            <input type="text" placeholder="08xxxxxxxxx" class="input input-info w-full max-w-md" />
                        </div>  
                    </div>
                    <div className='w-6/12'>
                        <div class="tabs">
                            <button class={"tab tab-lg tab-lifted " + `${idTabs==1 ? "tab-active" : ""}`} style={{zIndex:"0"}} onClick={handleClick1}>Parameter Uji</button>
                            <button class={"tab tab-lg tab-lifted " + `${idTabs==2 ? "tab-active" : ""}`} onClick={handleClick2}>Paket</button>
                        </div>
                        {
                            idTabs == 1 ?
                            <>
                                <div class="collapse mt-4">
                                    <input type="checkbox" class="peer" /> 
                                    <div class="collapse-title bg-primary text-primary-content">
                                        Analisis Feses
                                    </div>
                                    <div class="collapse-content bg-white text-primary-content peer-checked:bg-white"> 
                                        <table class="table w-full">
                                            <tbody>
                                            <tr>
                                                <td className="flex">
                                                    <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([!arrayCb[0], arrayCb[1], arrayCb[2], arrayCb[3]])}} checked={arrayCb[0]}/>
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>ANA-001 - Feses Rutin (Rp 35.000)</p>
                                                </td>
                                                <td className="flex">
                                                    <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([arrayCb[0], !arrayCb[1], arrayCb[2], arrayCb[3]])}} checked={arrayCb[1]}/>
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>ANA-015 - Darah Samar (Rp 35.000)</p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="collapse mt-4">
                                    <input type="checkbox" class="peer" /> 
                                    <div class="collapse-title bg-primary text-primary-content">
                                        Cairan Tubuh
                                    </div>
                                    <div class="collapse-content bg-white text-primary-content peer-checked:bg-white"> 
                                        <table class="table w-full">
                                            <tbody>
                                            <tr>
                                                <td className="flex">
                                                    <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([arrayCb[0], arrayCb[1], !arrayCb[2], arrayCb[3]])}} checked={arrayCb[2]} />
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>CAI-001 - Analisa Cairan Pleura (Rp 35.000)</p>
                                                </td>
                                                <td className="flex">
                                                    <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([arrayCb[0], arrayCb[1], arrayCb[2], !arrayCb[3]])}} checked={arrayCb[3]}/>
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>ANA-015 - Analisa Cairan Ascites  (Rp 35.000)</p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </> :

                            <>
                                <div class="collapse mt-4">
                                    <input type="checkbox" class="peer" /> 
                                    <div class="collapse-title bg-primary text-primary-content">
                                        Paket Kesehatan A
                                    </div>
                                    <div class="collapse-content bg-white text-primary-content peer-checked:bg-white"> 
                                        <table class="table w-full">
                                            <tbody>
                                            <tr>
                                                <td className="flex">
                                                <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([!arrayCb[0], arrayCb[1], arrayCb[2], arrayCb[3]])}} checked={arrayCb[0]}/>
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>Paket A (Rp 35.000)</p>
                                                </td>
                                                <td className="flex">
                                                    <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([arrayCb[0], !arrayCb[1], arrayCb[2], arrayCb[3]])}} checked={arrayCb[1]}/>
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>Paket B (Rp 35.000)</p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="collapse mt-4">
                                    <input type="checkbox" class="peer" /> 
                                    <div class="collapse-title bg-primary text-primary-content">
                                        Paket Kesehatan B
                                    </div>
                                    <div class="collapse-content bg-white text-primary-content peer-checked:bg-white"> 
                                        <table class="table w-full">
                                            <tbody>
                                            <tr>
                                                <td className="flex">
                                                    <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([arrayCb[0], arrayCb[1], !arrayCb[2], arrayCb[3]])}} checked={arrayCb[2]}/>
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>Paket C (Rp 35.000)</p>
                                                </td>
                                                <td className="flex">
                                                    <input type="checkbox" class="checkbox" onChange={() => {setArrayCb([arrayCb[0], arrayCb[1], arrayCb[2], !arrayCb[3]])}} checked={arrayCb[3]}/>
                                                    <p style={{color:"black", textAlign:"left", marginLeft:"32px"}}>Paket D (Rp 35.000)</p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        }
                    
                        <hr />
                        <p className="mt-4 flex justify-end" style={{fontWeight:"bold"}}>Total : Rp {getTotal()}</p>
                        <div className="flex justify-center">
                            <button className="btn btn-info w-2/5 mt-4 text-white mr-2" onClick={() => alert("Data pasien berhasil tersimpan!")}>Simpan</button>
                            <button className="btn btn-error w-2/5 mt-4 text-white ml-2" onClick={()=> setArrayCb([false,false,false,false])}>Reset</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Registrasi;