import { useEffect, useState } from "react";
function Kunjungan (){
    const Data = [
        {
            "id":1,
            "Tanggal":"21-02-2021",
            "Registrasi":"reg3240942",
            "Nama":"Hartono",
            "Alamat":"Bandung",
            "Jasa":"BPJS",
            "Dokter":"Dr. Alam"

        },
        {
            "id":2,
            "Tanggal":"22-02-2021",
            "Registrasi":"reg032342",
            "Nama":"Budi",
            "Alamat":"Kebumen",
            "Jasa":"BPJS",
            "Dokter":"Dr. Bambang"

        },
        {
            "id":3,
            "Tanggal":"23-02-2021",
            "Registrasi":"reg321232",
            "Nama":"Parijo",
            "Alamat":"Lembang",
            "Jasa":"BPJS",
            "Dokter":"Dr. Akram"

        },
        {
            "id":4,
            "Tanggal":"25-02-2021",
            "Registrasi":"regr39342",
            "Nama":"Anoman",
            "Alamat":"Jogja",
            "Jasa":"BPJS",
            "Dokter":"Dr. Brani"

        },
        {
            "id":5,
            "Tanggal":"25-02-2021",
            "Registrasi":"regwe89r42",
            "Nama":"Siti",
            "Alamat":"Ambal",
            "Jasa":"BPJS",
            "Dokter":"Dr. Kholifah"

        },
        {
            "id":6,
            "Tanggal":"25-02-2021",
            "Registrasi":"reg032342",
            "Nama":"Sule",
            "Alamat":"Kebumen",
            "Jasa":"BPJS",
            "Dokter":"Dr. Wahyu"

        },
        {
            "id":7,
            "Tanggal":"27-02-2021",
            "Registrasi":"reg032342",
            "Nama":"Bambang",
            "Alamat":"Kebumen",
            "Jasa":"BPJS",
            "Dokter":"Dr. Alam"

        },
        {
            "id":8,
            "Tanggal":"28-02-2021",
            "Registrasi":"reg032342",
            "Nama":"Felicia",
            "Alamat":"Kebumen",
            "Jasa":"BPJS",
            "Dokter":"Dr. Hilal"

        },
        {
            "id":9,
            "Tanggal":"28-02-2021",
            "Registrasi":"reg032342",
            "Nama":"Vaza",
            "Alamat":"Kebumen",
            "Jasa":"BPJS",
            "Dokter":"Dr. Hilal"

        },
        {
            "id":10,
            "Tanggal":"29-02-2021",
            "Registrasi":"reg032342",
            "Nama":"Akram",
            "Alamat":"Kebumen",
            "Jasa":"BPJS",
            "Dokter":"Dr. Alam"

        },
    ]

    const [firstIdx, setFirstIdx] = useState(1)
    const [lastIdx, setLastIdx] = useState(5)
    const [sumRow, setSumRow] = useState(5)
    const [listData, setListData] = useState([])
    const [inputText, setInputText] = useState("");

    function handleSearch() {
    }

    function handleChange(value) {
        setLastIdx(value)
        setSumRow(value)
    }

    function handlePrev(){
    }
    function handleNext(){
    }

    var filterList = []
    function filterSumList(){
        filterList = []
        for(var i=firstIdx-1;i<lastIdx;i++) {
            filterList.push(Data[i])
        }
        setListData(filterList)
    }

    useEffect(() => {
        filterSumList()
    })

    return (
        <div className=" p-8">
            {filterSumList}
            <div className='tex-center items-center mt-4 mb-10'>
                <h1 className='font-bold text-2xl text-info text-center '>Daftar Kunjungan Pasien</h1>
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
                            <option value={20}>20</option>
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
                            <th className="text-center">No. Registrasi</th>
                            <th className="text-center">Nama</th>
                            <th className="text-center">Alamat</th>
                            <th className="text-center">Jasa Jaminan Kesehatan</th>
                            <th className="text-center">Dokter Pengirim</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listData.map((item) => (
                        <tr>
                            <td className="text-center">{item.id}</td>
                            <td className="text-center">{item.Tanggal}</td>
                            <td className="text-center">{item.Registrasi}</td>
                            <td className="text-center">{item.Nama}</td>
                            <td className="text-center">{item.Alamat}</td>
                            <td className="text-center">{item.Jasa}</td>
                            <td className="text-center">{item.Dokter}</td>
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

export default Kunjungan;