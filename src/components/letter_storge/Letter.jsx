import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import './Letter.css'

const Letter = props => {
    // Todo : 편지 열면 뜨는 팝업 창 만들어야함, modal로 만들 듯?

    return (
        <div className='modal'>
            <div onClick={props.onClick} className='overlay'></div>
            <div className='modal-content'>
                <h2>Hello Modal</h2>
                <p>props.content</p>
                <button className='close-modal' onClick={props.onClick}>
                    CLOSE
                </button>
            </div>
        </div>
    )
}

export default Letter