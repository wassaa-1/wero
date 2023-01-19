import React, { useState } from 'react'
import Letter from './Letter'
import './Letter.css'

const dummyData = [
    {
        state: '안읽음',
        nickName: '닉네임1',
        letterName: '제목 제목 제목제목제목',
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
    const [letter, setLetter] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = data => {
        setLetter({
            letterName: data.letterName,
            content: data.content,
            nickName: data.nickName,
        });
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

            {show && (<div className='modal'>
                <div className='overlay' onClick={handleClose}>
                    <div className="modal-content">
                        <div className='flex justify-between'>
                            <h1 className='mb-5 text-2xl font-semibold border-slate-600 border-b-2 pr-8'>{letter.letterName}</h1>
                            <h3 className='text-xl border-b-2 border-slate-600 mb-5 pl-4'>{letter.nickName}</h3>
                        </div>
                        <p className='text-xl mb-10 pb-20 border-b-2 border-slate-600'>
                            {letter.content}
                            {/* Lorem ipsum dolor sit amet. A voluptate possimus et assumenda modi ut quibusdam odio eum veritatis pariatur sed tempora blanditiis? Quo quia reiciendis qui dolore libero non dolores voluptate quo magnam quia sit quas sint aut adipisci itaque.
                            Qui optio officiis qui nisi quos sit debitis dolorem sit molestiae voluptatem eum repudiandae nemo. Qui iste sunt est quibusdam numquam At quasi molestiae sed doloremque assumenda et laudantium galisum. A dolorem aspernatur est consequatur aspernatur et quod rerum in perferendis distinctio.
                            Ea voluptatem architecto ut dolorem nostrum sit quia veniam qui quis placeat ea excepturi excepturi. Et unde accusantium quo voluptates repudiandae in iure consectetur ut voluptatibus maiores nam eligendi ducimus ab recusandae architecto! */}
                        </p>
                        <button className="close-modal bg-slate-200 rounded-xl" onClick={handleClose}>
                            뒤로가기
                        </button>
                        <button className="answer-btn bg-black text-white rounded-xl" onClick={handleClose}>
                            회신
                        </button>
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default AllLetter