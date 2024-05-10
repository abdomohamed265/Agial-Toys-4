import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
} from "@mui/material";

const PlanCard = () => {
  const { items,cartTotal,totalItems } =
    useCart();
  return (
    <CartProvider>
      
      <Box
        sx={{
          py: 4,
          background: "",
          height: "100%",
        }}
      >
        <Box
          sx={{ maxWidth: "40rem", px: 2, margin: "auto", height: "100%" }}
          className="flex align-items-center"
        >
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "15px",
              //   height: "100%",
              border: "1px solid #ABABAB",
              px: 3.5,
              py: 3.5,
              backgroundColor: "--main-color",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F7F7F7",
                transition: "0.5s ease-in-out",
              },
              "&:hover .MuiButton-root": {
                backgroundColor: "var(--main-color)",
                color: "#fff",
                border: "1px solid var(--main-color)",
              },
            }}
          >
            <Box sx={{ p: 0 }}>
              <div className="text-center">
              <Typography variant="h6" component="div" className="fw-500 mb-3" style={{ fontSize: "25px" }}>
                السلة
              </Typography>
              </div>
              <table className="table table-success text-center">
                <thead>
                  <th className='text-dark'> اسم المنتج</th>
                  <th className='text-dark'>الكمية</th>     
                  <th className='text-dark'>السعر</th>
                  <th className='text-dark'>الصورة</th>     
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}$</td>
                      <td><img src={item.image} className="img-fluid" alt=""
                        style={{ height: "100px" }}></img></td></tr>
                  ))}
                </tbody>
              </table>
              <hr style={{fontSize:"100px"}}></hr>
              <div className="d-flex">
              <h2 className='' style={{marginRight:"60px"}}>   الكمية  ({totalItems}):</h2>
              <h2 className='' style={{marginRight:"15px"}}>   السعر  ({cartTotal})$</h2> 
              </div>
                
              <div className="text-center">
              <NavLink to="/cartpage" className="btn btn-primary mt-3" style={{backgroundColor:"darkblue",borderRadius:"13px",padding:"10px 30px"}}>العودة إلي السلة</NavLink>     
              </div>      
            </Box>
          </Card>
        </Box>
      </Box>
      
      </CartProvider>
  );
};

export default PlanCard;