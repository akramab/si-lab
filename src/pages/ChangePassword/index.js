import { useState, useEffect } from "react";
function ChangePassword (){
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
    }

    function getTotal() {
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
                <h1 className='font-bold text-2xl text-info text-center '>Ganti Password</h1>
            </div>
            <div className="flex justify-center">
                <div class="form-control w-full max-w-md mb-3">
                    <label class="label">
                        <span class="label-text">Password Lama</span>
                    </label>
                    <input type="text" class="input input-info w-full max-w-md"/>
                </div>
            </div>
            <div className="flex justify-center">
                <div class="form-control w-full max-w-md mb-3">
                    <label class="label">
                        <span class="label-text">Password Baru</span>
                    </label>
                    <input type="text" class="input input-info w-full max-w-md"/>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="btn btn-info text-white mt-4 mb-44">Ganti Password</button>
            </div>
        </div>
    )
}
export default ChangePassword;