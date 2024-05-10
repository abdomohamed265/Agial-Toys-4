import { Grid, Container } from "@mui/material";
import PlanCard from "../components/planCard";
import PaymentForm from "../components/PaymentForm";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { CartProvider } from "react-use-cart";


function Visa() {
  return (
    <CartProvider>
    <Navbar/>
    <div className="mt-2 pt-5" style={{backgroundColor:"#69B8FF"}}>
    <Container >
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
        <PaymentForm/>
        </Grid>
        <Grid item xs={12} md={6}>
        <PlanCard/> 
        </Grid>
      </Grid>
      </Container>
      </div>
      <Footer/>
      </CartProvider>
  );
}

export default Visa;