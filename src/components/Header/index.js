import {getImagePath} from '../../helpers/getImagePath';

function Header (params) {
    return (
        <div className='sticky top-0 flex h-20 items-center shadow-md bg-white' id='HeaderNavBar' style={{ transition: 'top 0.3s' }} style={{zIndex:"1"}}>
            <div className='flex items-center px-10 justify-between w-full'>
                <h1 className='text-4xl bold font-bold text-info'>Sistem Informasi Laboratorium</h1>
                <div className='flex'>
                    <a className='mr-3' href='/change-password'>
                        <h3 className='font-bold text-xl'>Username</h3>
                        <p>Administrator</p>
                    </a>
                    <img src={getImagePath('/images/icons/avatar.svg')} alt='avatar username' className='rounded-full mr-3' style={{width:50,height:50}}/>
                    <div className='group items-center flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>                    
                </div>
            </div>
            
        </div>
    );
  }
  export default Header;