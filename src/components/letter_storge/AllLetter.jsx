import React, { useState } from 'react'
import Letter from './Letter'

const dummyData = [
    {
        state: '안읽음',
        nickName: '닉네임1',
        letterName: '제목 제목',
        date: '2023.01.12',
        content: '안녕 나는 1번이야',
    }, {
        state: '안읽음',
        nickName: '닉네임2',
        letterName: '제목 제목',
        date: '2023.01.14',
        content: '나는 2번이야',
    }, {
        state: '안읽음',
        nickName: '닉네임3',
        letterName: '제목 제목',
        date: '2023.01.18',
        content: '나는 3번인데ㅋㅋ',
    }
]


const AllLetter = props => {
    const [letterContent, setLetterContent] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = data => {
        setLetterContent(data.content);
        setShow(true);
    }

    return (
        <div className='mt-12 ml-20 mr-20'>
            <ol style={{ listStyleType: 'decimal' }} reversed>
                {dummyData.map((data, index) => {
                    return (
                        <div key={index} onClick={() => handleShow(data)} className='flex justify-between py-2 mb-3 border-b-2'>
                            <div className='flex space-x-4'>
                                <li>{data.state}</li>
                                <p>{data.nickName}</p>
                            </div>
                            <p>{data.letterName}</p>
                            <p>{data.date}</p>
                        </div>
                    )
                })}
            </ol>
            <Letter show={show} onHide={handleClose} onClick={handleClose} content={letterContent} />

        </div>
    )
}

export default AllLetter