import {getImagePath} from '../../../helpers/getImagePath';
import { useLocation } from 'react-router-dom'

function ItemMenu ({icon, title, link}) {
    const location = useLocation();
    return ( 
        <a href={link} className={`w-full h-12 mt-1 flex justify-center items-center hover:cursor-pointer hover:bg-gray-300 group tooltip tooltip-right ${(location.pathname===link)? 'bg-gray-300 ':'bg-white '} `} data-tip={title}>
            <div className={`rounded-md items-center flex justify-center group-hover:bg-white ${(location.pathname===link)? 'bg-white':'bg-gray-300'}`} style={{width:45, height:45}}>
                <img src={getImagePath(icon)} style={{width:35, height:35}} alt='menu' />
            </div>
        </a>
    )
}

export default ItemMenu;