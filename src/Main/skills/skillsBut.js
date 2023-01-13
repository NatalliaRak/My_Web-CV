import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Skills from './skillsText';

export default function HomeModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const style={
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#4E105D'
   }

  return (
    
    <>
      <Button style={style} onClick={handleShow}>
       My skills
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Skills />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}