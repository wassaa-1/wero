import React from 'react'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import LetterStorge from './letter_storge/LetterStorge';

const MainPage = props => {

    const onLogout = () => {
        sessionStorage.removeItem('user_id');
        document.location.href = '/';
    }

    return (
        <HashRouter>
            <div className='flex justify-center'>
                <div className='absolute h-screen bg-white'>
                    <div className='mx-56 md:mx-96'></div>
                    <div className='flex justify-end mt-8 mr-8 space-x-5'>
                        <Link to='/'><img src="img/Email.png" alt="" /></Link>
                        <Link to='/write'><img src="img/Write.png" alt="" /></Link>
                        <Link to='/setting'><img src="img/Setting.png" alt="" /></Link>
                        <Link to='/notification'><img src="img/Notification.png" alt="" /></Link>
                        <img onClick={onLogout} src="img/Logout.png" alt="" />
                    </div>
                    <div>
                        <Routes>
                            <Route path='/' element={<LetterStorge />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}

export default MainPage