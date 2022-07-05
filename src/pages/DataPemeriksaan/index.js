import { useEffect, useState } from "react";
import { AiOutlineWoman, AiOutlineMan } from 'react-icons/ai';
import { MdPrint } from 'react-icons/md';
function DataPemeriksaan (){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
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
                <h1 className='font-bold text-2xl text-info text-center '>Input Data Pemeriksaan</h1>
            </div>

            <div className="flex justify-between items-center">
                <p>Tanggal : <b>{date}</b></p>
                <p>No Registrasi Pasien : <b>reg3240942</b></p>
                <p>Nama Pasien : <b>Hartono</b></p>
                <div className="flex">
                    <button className="btn btn-info text-white"><MdPrint /><span className="ml-1">Print Hasil</span></button>
                    <button className="btn btn-warning ml-4 text-white"><MdPrint /><span className="ml-1">Print Struk</span></button>
                </div>
            </div>

            <div class="overflow-x-auto mt-4" style={{zIndex:"-1"}}>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center">No</th>
                            <th className="text-center">Parameter</th>
                            <th className="text-center">Hasil</th>
                            <th className="text-center">Gambar</th>
                            <th className="text-center">Satuan</th>
                            <th className="text-center">Metode</th>
                            <th className="text-center">Batas Normal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">Hemoglobin</td>
                            <td className="text-center">
                                <textarea class="textarea textarea-bordered w-full" placeholder="Hasil"></textarea>
                            </td>
                            <td className="text-center">
                                <input type="file" placeholder="Hasil" class="input input-xm w-full max-w-xs" />
                            </td>
                            <td className="text-center">g/dL</td>
                            <td className="text-center">-</td>
                            <td className="text-center">
                                <div className="flex items-center">
                                    <AiOutlineMan />
                                    <p>13,5 - 18.0</p>
                                </div>
                                <div className="flex items-center">
                                    <AiOutlineWoman />
                                    <p>11,5 - 16.0</p>
                                </div> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="overflow-x-auto mt-4" style={{zIndex:"-1"}}>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center">Kesimpulan Pemeriksaan</th>
                            <th className="text-center">Catatan</th>
                            <th className="text-center">Saran</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <textarea class="textarea textarea-bordered w-full" placeholder="Kesimpulan Pemeriksaan"></textarea>
                            </td>
                            <td className="text-center">
                                <textarea class="textarea textarea-bordered w-full" placeholder="Catatan"></textarea>
                            </td>
                            <td className="text-center">
                                <textarea class="textarea textarea-bordered w-full" placeholder="Saran"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex">
                <button className="btn btn-info text-white">Simpan</button>
                <button className="btn btn-error ml-2 mr-2 text-white">Reset</button>
                <a href="/index-uji">
                    <button className="btn btn-success text-white">
                        Back
                    </button>
                </a>
            </div>
        </div>
    )
}

export default DataPemeriksaan;