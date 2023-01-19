import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import AllLetter from './AllLetter'

const LetterStorge = props => {
    return (
        <div>
            <div className='flex mb-3 ml-10 text-3xl font-bold mt-14'>
                <img src="img/Email.png" alt="" className='w-10 mr-2' />
                <h1>편지보관함</h1>
            </div>
            <div className='flex space-x-3 ml-14'>
                <NavLink to='/'><p>모든 편지</p></NavLink>
                <NavLink to='/read'><p>읽은 편지</p></NavLink>
                <NavLink to='/notRead'><p>안읽은 편지</p></NavLink>
                <NavLink to='/send'><p>보낸 편지</p></NavLink>
            </div>
            <Routes>
                <Route path='/' element={<AllLetter />} />
            </Routes>
        </div>
    )
}

export default LetterStorge