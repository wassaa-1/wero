import React, { useState } from 'react'

const WriteLetter = props => {
    const [letter, setLetter] = useState({
        nickName: '',
        content: '',
        isCheck: false,
    });
    const handleChange = e => {
        setLetter({
            ...letter,
            [e.target.name]: e.target.value,
        })
    }
    const handleClick = () => {
        alert('전송이 완료되었습니다!');
        document.location.href = '/';
    }
    const handleCheck = () => {
        setLetter({
            ...letter,
            isCheck: !letter.isCheck,
        })
    }

    return (
        <div>
            <div className='flex mb-3 ml-10 text-3xl font-bold mt-14'>
                <img src="img/Write.png" alt="" className='w-10 mr-2' />
                <h1>편지 쓰기</h1>
            </div>
            <div className='mx-20 mt-16'>
                <textarea onChange={handleChange} name='content' value={letter.content} className='w-full h-96 border-b-2 border-black' placeholder='오늘의 이야기를 들려주세요. :)' />
                <div className='flex items-center mt-4 space-x-2'>
                    <input type="checkbox" onClick={handleCheck} className='w-4 h-4' name="" id="" />
                    <p>편지 공개</p>
                </div>
                <button
                    onClick={handleClick}
                    className='absolute mt-16 right-20 h-10 md:h-12 w-36 md:w-52 rounded-2xl text-slate-200 bg-black border-slate-300'
                >전송</button>
            </div>
        </div>
    )
}

export default WriteLetter