import React, { useEffect, useRef, useState } from 'react'

const dummyData = {
    id: 'qqq',
    password: '123',
}

const Login = props => {
    const focusRef = useRef();

    const [values, setValues] = useState({
        id: "",
        password: "",
    });

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = e => {
        if (dummyData.id === values.id && dummyData.password === values.password) {
            sessionStorage.setItem('user_id', values.id);
        } else {
            alert('아이디 혹은 비밀번호를 다시 입력하세요.')
        }
        document.location.href = '/';
    }

    useEffect(() => {
        focusRef.current.focus();
    }, [])

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div>
                <input type='text'
                    name='id'
                    value={values.id}
                    onChange={handleChange}
                    className="h-12 gap-2 my-3 border-b-2 border-gray-400 border-solid w-96"
                    placeholder='E-mail'
                    ref={focusRef}
                />
            </div>
            <div>
                <input type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onKeyDown={onEnter}
                    className="h-12 gap-2 my-3 border-b-2 border-gray-400 border-solid w-96"
                    placeholder='Password'
                />
            </div>
            <div className='flex mb-20 space-x-40'>
                <div className='flex'>
                    <input type="checkbox" name="" id="" />
                    <p className='mx-1 text-sm'>아이디 기억하기</p>
                </div>
                <p className='text-sm'>비밀번호 찾기</p>
            </div>
            <button onClick={handleSubmit}
                className='h-10 rounded-md text-slate-200 bg-slate-800 w-96 border-slate-300'
            >Log In</button>
        </div>
    )
}

export default Login