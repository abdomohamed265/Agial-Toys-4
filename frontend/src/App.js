import { CartProvider } from 'react-use-cart';
import Footer from './homepage/Footer';
import Header from './homepage/Header';
import Mostsell from './homepage/Mostsell';
import Navbar from './homepage/Navbar';
import Offers from './homepage/Offers';
import Ondemand from './homepage/Ondemand';
import Services from './homepage/Services';



function App() {
  return (
    <CartProvider>
      <Navbar />
      <Header />
      <Ondemand />
      <Mostsell />
      <Offers />
      <Services />
      <Footer />
    </CartProvider>
  );
}
export default App;
