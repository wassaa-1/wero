import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Letter = props => {

    // Todo : 편지 열면 뜨는 팝업 창 만들어야함, modal로 만들 듯?

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClick}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.onClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Letter