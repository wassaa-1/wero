import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ChangePersonalInfo from './ChangePersonalInfo'
import MyPage from './MyPage'
import Setting from './Setting'
import UserInfo from './UserInfo'

const FirstSettingPage = props => {
    return (
        <div>
            <div className='flex mb-3 ml-10 text-3xl font-bold mt-14'>
                <img src="img/Setting.png" alt="" className='w-10 mr-2' />
                <h1>설정</h1>
            </div>
            <Link to={'/'}></Link>
            <Routes>
                <Route path='/*' element={<Setting />}></Route>
                <Route path='/userInfo/*' element={<UserInfo />}></Route>
                <Route path='/userInfo/myPage/*' element={<MyPage />}></Route>
                <Route path='/userInfo/changeUserInfo/*' element={<ChangePersonalInfo />}></Route>
            </Routes>
        </div>
    )
}

export default FirstSettingPage