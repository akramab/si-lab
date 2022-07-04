import ItemMenu from './ItemMenu';
import {Menu} from './data.menu.js';

function SideBar ({ children }) {
    return (
        <div className='flex z-10 w-full   '>
            <div id='SideMenu-Content' className='fixed left-0 top-0 flex flex-col w-24 min-h-screen shadow-md mt-20 items-center'>
                <div className='w-full h-16 items-center flex justify-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' style={{width:40, height:40}} className="stroke-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
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