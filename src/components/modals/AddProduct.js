import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'

function AddProduct(props){
        return(
            <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Yeni Ürün Ekle
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="container">
                  Fieldsss
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        );
}
export default AddProduct
