import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = props => {
    const [cantLogin, setCantLogin] = useState('')

    const [values, setValues] = useState({
        id: "",
        password: "",
    })

    const handleSubmit = e => {
        console.log(JSON.stringify(values));
        setCantLogin('아이디나 비밀번호가 틀렸습니다.')
    }

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className='flex flex-col items-center'>
            <div>
                <label htmlFor='id' className='mr-4'>아이디</label>
                <input type='text'
                    name='id' 
                    value={values.id} 
                    onChange={handleChange}
                    className="w-48 border-2 hover:border-black" />
            </div>
            <div>
                <label htmlFor='password'>비밀번호</label>
                <input type='password' 
                value={values.password}
                onChange={handleChange} 
                name='password' 
                className="w-48 border-2 hover:border-black" />
            </div>
            <br />
            <Link to='/Main_page'>
                <button onClick={handleSubmit} className='w-48 border rounded-full border-slate-300 hover:border-indigo-300'>로그인</button>
            </Link>
            {/* <p className='text-red-500'>{cantLogin}</p> */}
        </div>
  )
}

export default Login