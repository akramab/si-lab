import { useEffect, useState } from "react";
function IndexUji (){
    const Data = [
        {
            "id":1,
            "Tanggal":"21-02-2021",
            "IDPasien":"PSN001",
            "Registrasi":"reg3240942",
            "Nama":"Hartono",
            "BelumSelesai":1,
            "SudahSelesai":0
        },
        {
            "id":2,
            "Tanggal":"21-02-2021",
            "IDPasien":"PSN002",
            "Registrasi":"reg323421",
            "Nama":"Budi",
            "BelumSelesai":2,
            "SudahSelesai":0
        },
    ]

    const [firstIdx, setFirstIdx] = useState(1)
    const [lastIdx, setLastIdx] = useState(2)
    const [sumRow, setSumRow] = useState(5)
    const [listData, setListData] = useState([])
    const [inputText, setInputText] = useState("");

    function handleSearch() {
    }

    function handleChange(value) {
    }

    function handlePrev(){
    }
    function handleNext(){
    }

    return (
        <div className=" p-8">
            <div className='tex-center items-center mt-4 mb-10'>
                <h1 className='font-bold text-2xl text-info text-center '>Index Hasil Uji</h1>
            </div>

            <div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Periode</span>
                    </label>
                    <select class="select select-bordered">
                        <option disabled selected>Silahkan Pilih</option>
                        <option>Hari ini</option>
                        <option>Minggu ini</option>
                        <option>Bulan ini</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center mt-8">
                    <p className="mr-2">Show : </p>
                    <div class="form-control">
                        <select class="select select-bordered" defaultValue={5} onChange={(e) => handleChange(e.target.value)}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                    <p className="ml-2">entries</p>
                </div>

                <div class="form-control mt-8">
                    <div class="input-group">
                        <input type="text" placeholder="Search…" class="input input-bordered" onChange={(e) => setInputText(e.target.value)}/>
                        <button class="btn btn-square btn-info" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div>
            <div class="overflow-x-auto mt-4" style={{zIndex:"-1"}}>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center">No</th>
                            <th className="text-center">Tanggal</th>
                            <th className="text-center">ID Pasien</th>
                            <th className="text-center">No Registrasi</th>
                            <th className="text-center">Nama Pasien</th>
                            <th >Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Data.map((item) => (
                        <tr>
                            <td className="text-center">{item.id}</td>
                            <td className="text-center">{item.Tanggal}</td>
                            <td className="text-center">{item.IDPasien}</td>
                            <td className="text-center"><a href="/data-pemeriksaan"><p style={{color:"#3ABEF8"}}>{item.Registrasi}</p></a></td>
                            <td className="text-center">{item.Nama}</td>
                            <td >
                                <div>
                                    <p>Pemeriksaan Belum Selesai : {item.BelumSelesai}</p>
                                    <p>Pemeriksaan Sudah Selesai : {item.SudahSelesai}</p>
                                    <p>Total Pemeriksaan : {parseInt(item.SudahSelesai) + parseInt(item.BelumSelesai)}</p>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-2 items-center">
                <p>Showing {firstIdx} to {lastIdx} of {Data.length} entries</p>

                <div className="flex">
                    <button className="btn" style={{width:"100px"}} onClick={() => handlePrev()}>Previous</button>
                    <button className="btn ml-4" style={{width:"100px"}} onClick={() =>handleNext()}>Next</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default IndexUji;