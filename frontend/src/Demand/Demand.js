import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { CartProvider } from "react-use-cart";
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import axios from 'axios';


function Demand() {
  const [ProductName, setProductName] = useState('');
  const [ProductQuantity, setProductQuantity] = useState('');
  const [ProductColor, setProductColor] = useState('');
  const [Attachement, setAttachement] = useState('');
  const [errors, setErrors] = useState({});
  const [ProductType, setProductType] = useState('')
  const [ProductSize, setProductSize] = useState('')
  const [cost, setCost] = useState(0)



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ProductType);
    const errors = {};
    if (!ProductName) {
      errors.ProductName = 'Product Name Is Required';
    }
    else if (ProductName.length < 3) {
      errors.ProductName = 'Invalid Product'
    }
    if (!ProductType) {
      errors.ProductType = 'Product Type Is Required';
    }
    if (!ProductSize) {
      errors.ProductSize = 'Product Size Is Required';
    }
    if (!ProductQuantity) {
      errors.ProductQuantity = 'ProductQuantity is required';
    } else if (ProductQuantity === 0) {
      errors.ProductQuantity = 'ProductQuantity is invalid';
    }
    if (!ProductColor) {
      errors.ProductColor = 'ProductColor is required';
    }
    if (!Attachement) {
      errors.Attachement = 'Attachement is required';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setErrors({})

      let materialCost = 0;
      let sizeCost = 0
      if (ProductType == "Plastic") {
        materialCost = 100;
      }
      else if (ProductType == "Silicon") {
        materialCost = 200;
      }
      else if (ProductType == "Wood") {
        materialCost = 300
      }
      if (ProductSize == "Sm") {
        sizeCost = 200;
      }
      else if (ProductSize == "Md") {
        sizeCost = 400;
      }
      else if (ProductSize == "Lg") {
        sizeCost = 600;
      }
      setCost((materialCost * ProductQuantity) + sizeCost)
    }
  }

   let Send = async(event) =>{
    event.preventDefault();
    const errors = {};
    if (!ProductName) {
      errors.ProductName = 'Product Name Is Required';
    }
    else if (ProductName.length < 3) {
      errors.ProductName = 'Invalid Product'
    }
    if (!ProductType) {
      errors.ProductType = 'Product Type Is Required';
    }
    if (!ProductSize) {
      errors.ProductSize = 'Product Size Is Required';
    }
    if (!ProductQuantity) {
      errors.ProductQuantity = 'ProductQuantity is required';
    } else if (ProductQuantity === 0) {
      errors.ProductQuantity = 'ProductQuantity is invalid';
    }
    if (!ProductColor) {
      errors.ProductColor = 'ProductColor is required';
    }
    if (!Attachement) {
      errors.Attachement = 'Attachement is required';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setErrors({})

  
    try{
      alert("تم إرسال طلبك بنجاح و سيتم الرد عليك خلال اقرب وقت")
      await axios.post(`https://agial-toys-4.onrender.com/`,{
        ProductName,
        ProductQuantity,
        Attachement,
        ProductColor,
        ProductType,
        ProductSize
      })
    }
    catch(event){
      console.log(event);

    }
   }}

  return (
    <div className="container d-flex">
      <div style={{ marginRight: "100px", width: "500px", marginTop: "30px" }}>
        <h1>اصنع منتجك بنفسك</h1>

        <Form onSubmit={handleSubmit} action='POST'>
          {errors.global && <Alert variant="danger">{errors.global}</Alert>}
          <Form.Group controlId="formProductName">
            <Form.Label className='mt-4'>اسم المنتج</Form.Label>
            <Form.Control className='maken' type="text" name="ProductName" value={ProductName} onChange={(event) => setProductName(event.target.value)
             } isInvalid={errors.ProductName} />
            <Form.Control.Feedback type="invalid">{errors.ProductName}</Form.Control.Feedback>
          </Form.Group>
          <label className='mt-4'>نوع المنتج</label>
          <Form.Select aria-label="Default select example" name='ProductType' value={ProductType} onChange={(event) => setProductType(event.target.value)} isInvalid={errors.ProductType} >
            <option name=''></option>
            <option name='plastic' value="Plastic">البلاستيك</option>
            <option name='selecion' value="Silicon">السيلكون</option>
            <option name='wood' value="Wood">الخشب</option>
          </Form.Select>
          <label className='mt-4'> حجم المنتج</label>
          <Form.Select aria-label="Default select example" name='ProductSize' value={ProductSize} onChange={(event) => setProductSize(event.target.value)
          } isInvalid={errors.ProductSize}>
            <option name=''></option>
            <option name='first' value="Sm">10 x 20 </option>
            <option name='second' value="Md">30 x 40 </option>
            <option name='third' value="Lg">50 x 60</option>
          </Form.Select>

          <Form.Group controlId="formProductQuantity">
            <Form.Label className='mt-4'>العدد</Form.Label>
            <Form.Control className='makenn' min={0} type="number" name="ProductQuantity" value={ProductQuantity} onChange={(event) => setProductQuantity(event.target.value)} isInvalid={errors.ProductQuantity} />
            <Form.Control.Feedback type="invalid">{errors.ProductQuantity}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formProductColor">
            <Form.Label className='mt-4'>اللون</Form.Label>
            <Form.Control type="color" name="ProductColor" value={ProductColor} onChange={(event) => setProductColor(event.target.value)
            } isInvalid={errors.ProductColor} />
            <Form.Control.Feedback type="invalid">{errors.ProductColor}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formAttachement">
            <Form.Label>إضافة ملف</Form.Label>
            <Form.Control type="File" name="Attachement" value={Attachement} onChange={(event) => setAttachement(event.target.value)
            } isInvalid={errors.Attachement} />
            <Form.Control.Feedback type="invalid">{errors.Attachement}</Form.Control.Feedback>
          </Form.Group>
          <h2 className='result'>{cost}</h2>
          <Button variant="primary" className='mt-3' style={{backgroundColor:"darkblue",width: "13%", borderRadius: "25px",padding:"12px"}} type="submit">
            حساب
          </Button>
          <Button variant="primary" className='mx-3 mt-3' style={{backgroundColor:"black",width: "13%", borderRadius: "25px",padding:"12px"}} type="submit" onClick={Send}>
            إرسال
          </Button>


        </Form>
      </div>

    </div>
  )
}

const Ondemandl = () => {
  return (
    <CartProvider>
      <Navbar />
      <div className=''></div>
      <Demand />
      <Footer />
    </CartProvider>
  );
};

export default Ondemandl;