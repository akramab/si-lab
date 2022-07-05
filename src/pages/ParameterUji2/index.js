import { useEffect, useState } from "react";
import { FaPencilAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
function ParameterUji2 (){
    const Data = [
        {
            "id":1,
            "kode":"HEM-001",
            "nama":"Hemoglobin",
            "satuan":"g/dL",
            "metode":"-",
            "batas":"13,5 -18",
            "biaya":"Rp 55.000"
        },
        {
            "id":2,
            "kode":"HEM-002",
            "nama":"WBC",
            "satuan":"sel/uL",
            "metode":"-",
            "batas":"4.000 - 11.000",
            "biaya":"Rp 25.000"
        },
        {
            "id":3,
            "kode":"HEM-003",
            "nama":"Hitung Jenis Leukosit",
            "satuan":"sel/uL",
            "metode":"Mikroskopik",
            "batas":"-",
            "biaya":"Rp 25.000"
        },
        {
            "id":4,
            "kode":"HEM-004",
            "nama":"Trombosit",
            "satuan":"sel/uL",
            "metode":"-",
            "batas":"150.000 - 450.000",
            "biaya":"Rp 25.000"
        },
        {
            "id":5,
            "kode":"HEM-005",
            "nama":"Limfosit Baru",
            "satuan":"%",
            "metode":"Mikroskopik",
            "batas":"-",
            "biaya":"Rp 25.000"
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
    }

    function handlePrev(){
    }
    function handleNext(){
    }

    return (
        <div className=" p-8">
            <div className='tex-center items-center mt-4 mb-10'>
                <h1 className='font-bold text-2xl text-info text-center '>Data Parameter Uji</h1>
            </div>

            <div className="flex justify-end">
                <button className="btn btn-success text-white">+ Add New</button>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center mt-4">
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

                <div class="form-control mt-4">
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
                            <th className="text-center">Kode</th>
                            <th className="text-center">Nama Parameter</th>
                            <th className="text-center">Satuan</th>
                            <th className="text-center">Metode</th>
                            <th className="text-center">Batas Normal</th>
                            <th className="text-center">Biaya</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item) => (
                            <tr>
                                <td className="text-center">{item.id}</td>
                                <td className="text-center">{item.kode}</td>
                                <td className="text-center">{item.nama}</td>
                                <td className="text-center">{item.satuan}</td>
                                <td className="text-center">{item.metode}</td>
                                <td className="text-center">{item.batas}</td>
                                <td className="text-center">{item.biaya}</td>
                                <td className="flex justify-center">
                                    <div className="flex">
                                        <button className="btn btn-info mr-1" style={{color:"white"}}><FaPencilAlt /></button>
                                        <button className="btn btn-error ml-1"><GrClose /></button>
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

export default ParameterUji2;