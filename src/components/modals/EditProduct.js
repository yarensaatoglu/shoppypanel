import React, { Component } from 'react'
import Modal from 'react-bootstrap'
function EditProduct(props){
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Ürün Ekle
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="container">

              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default EditProduct
