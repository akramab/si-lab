import ItemMenu from './ItemMenu';
import {Menu} from './data.menu.js';

function SideBar ({ children }) {
    return (
        <div className='flex z-10 w-full   '>
            <div id='SideMenu-Content' className='fixed left-0 top-0 flex flex-col w-24 min-h-screen shadow-md mt-20 items-center overflox-x' style={{zIndex:"100"}}>
                {Menu.map((data,index) =>
                    <ItemMenu key={index} icon={data.icon} title={data.title} link={data.link} />
                )}   
            </div>
            <div className='w-full pl-24' id='Content' style={{ transition: 'width 1s ease-in-out' }}>
                {children}
            </div>
        </div>
    )
}

export default SideBar;