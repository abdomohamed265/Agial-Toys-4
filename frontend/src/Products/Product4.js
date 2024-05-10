import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import Navbar from '../homepage/Navbar';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from "../homepage/Footer";

 export function Page4() {
  const { addItem } = useCart();
  const [builds, setBuilds] = useState([]);
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }




  useEffect(() => {
    axios
      .get(`https://agial-toys-4.onrender.com/builds`)
      .then(function (response) {
        console.log(response.data.builds);
        setBuilds(response.data.builds);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Container className="text-center mt-3 pt-3">
        <Row>
        <h2 className="text-center mt-5"></h2>
          {builds.map((abdo) => (
            <Col md="4">
              <img
                src={abdo.image}
                alt=""
                className="img-fluid mt-5"
                style={{ height: "250px" }}
              ></img>
              <h2 className="h4 mt-3">{abdo.name}</h2>
              <h4 className="h5">{abdo.price}$</h4>
              <button className="btn btn-dark" style={{backgroundColor:"darkgreen"}} onClick={() => addItem(abdo)}>إضافة إلي السلة</button>
              <>
      {values.map((v, idx) => (
        <Button key={idx} className=" mx-2 btn btn-primary" style={{backgroundColor:"darkblue"}} onClick={() => handleShow(v)}>
          تفاصيل
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton >
        </Modal.Header>
          <Modal.Title className="mt-5 fs-1" style={{marginRight:"30px",marginTop:"50px"}}>
            {abdo.name}
          </Modal.Title>
        <Modal.Body>
        <Container className="d-flex">
          <div>
          <img
        src={abdo.image}
        alt=""
        className="img-fluid mt-5"
        style={{ height: "200px" }} ></img>
        <div className="d-flex">
          
        <button className="btn btn-dark mt-5 mx-2"style={{height:"35px",backgroundColor:"darkgreen"}} onClick={() => addItem(abdo)}>إضافة إلي السلة</button>
        </div>
          </div>
          <div style={{marginRight:"50px"}}>
            <h2 style={{marginTop:"50px",}}> وصف المنتج: </h2>
            <p style={{marginTop:"10px",width:"400px"}}>{abdo.title}</p>
            <h2> السعر:</h2>
            <p>{abdo.price}</p>
          </div>
        
        
        
        </Container>
        
        </Modal.Body>
      </Modal>
    </>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}


function Product4() {
  return (
    <CartProvider>
    <Navbar/>
      <Page4 />
      <Footer/>
    </CartProvider>
  );
}
export default Product4;
