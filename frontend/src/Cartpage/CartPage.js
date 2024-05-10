import React from 'react';
import { Col, Container, Row } from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";
import Navbar from '../homepage/Navbar';


import Footer from '../homepage/Footer';
import { NavLink } from 'react-router-dom';


const Cartpage = () => {

  function Cart() {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } =
      useCart();

    if (isEmpty) {
      return (<p className="text-center mt-5">Your cart is empty</p>);
    }
    return (
      <div>
        <h1 className="text-center mt-3 ">السلة ({totalUniqueItems})
          <button className="btn btn-danger mx-3 mb-1" style={{ borderRadius: "25px", width: "10%", height: "40px", backgroundColor: "red" }} onClick={() => emptyCart()}>حذف جميع المنتجات</button>
        </h1>
        <Container>
          <Row>
            <Col md="12">
              <table className="table table-success text-center">
                <thead>
                  <th className='text-dark'> اسم المنتج</th>
                  <th className='text-dark'>الكمية</th>
                  <th className='text-dark'>السعر</th>
                  <th className='text-dark'>الصورة</th>
                  <th className='text-dark'>العملية</th>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}$</td>
                      <td><img src={item.image} className="img-fluid" alt=''
                        style={{ height: "100px" }}></img></td>
                      <td> <button className="btn btn-danger"
                        style={{ backgroundColor: "red" }}
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                        <button className="btn btn-success mx-3"
                          style={{ backgroundColor: "darkgreen" }}
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button className="btn btn-info" style={{ backgroundColor: "black", color: "white" }} onClick={() => removeItem(item.id)}>&times;</button></td>

                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className='text-center'>مجموع عدد المنتجات : ({totalItems}) و مجموع السعر  ({cartTotal})$</h2>
              <h2 className='text-center'><NavLink to="/visa" className='btn btn-success mt-3 pt-3' style={{ borderRadius: "25px", width: "14%", height: "40px", backgroundColor: "darkgreen" }}>شراء المنتجات</NavLink></h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  return (
    <CartProvider>
      <Navbar />
      <div className='mt-5 pt-4'></div>
      <Cart />
      <Footer />
    </CartProvider>
  );
};

export default Cartpage;