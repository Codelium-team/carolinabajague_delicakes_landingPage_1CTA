import React from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";

const ProductModal = ({ product, show, handleClose, imageOnly = false }) => {
  if (!product) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size={imageOnly ? "xl" : "lg"}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {imageOnly ? (
          <Image
            src={product.image}
            fluid
            className="w-100"
            style={{ maxHeight: "80vh", objectFit: "contain" }}
          />
        ) : (
          <Row>
            <Col md={6}>
              <Image 
                src={product.image} 
                fluid 
                rounded 
                className="mb-3" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleShowImageModal(product)}
              />
            </Col>
            {/* Modal con descripción */}
            {/* <Col md={6}>
              <div className="product-details">
                <h4 className="mb-3">
                  ${new Intl.NumberFormat("es-CL").format(product.price)}
                </h4>
                <p className="mb-3">
                  <strong>Descripción:</strong>
                  <br />
                  {product.description}
                </p>
                <p className="mb-3">
                  <strong>Ingredientes:</strong>
                  <br />
                  {product.ingredients}
                </p>
                <p className="mb-3">
                  <strong>Información de alérgenos:</strong>
                  <br />
                  {product.allergens}
                </p>
                <p className="mb-3">
                  <strong>Peso neto:</strong>
                  <br />
                  {product.weight}g por unidad
                </p>
                <p className="mb-3">
                  <strong>Información nutricional:</strong>
                  <br />
                  {product.nutritionalInfo}
                </p>
                <p className="mb-3">
                  <strong>Conservación:</strong>
                  <br />
                  {product.storageInfo}
                </p>
              </div>
            </Col> */}
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
