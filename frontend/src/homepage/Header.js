import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
  const user = useSelector(state => state.user);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/cart", { userId: user.id }).then((res) => {
      console.log(res.data.updatedCart);
      setCartData(res.data.updatedCart.products)
    }
    ).catch((err) => {
      console.log(err);
    })
  }
    , [user], cartData)
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/31.jpg"
          alt="First slide"
          style={{ height: "540px" }}
        />
        <Carousel.Caption>
          <h2 style={{ marginBottom: "20px", color: "darkBlue" }}>العاب تعليمية</h2>
          <NavLink className='btn btn-primary mb-5 btn-block' to="/product1" style={{ width: "13%", borderRadius: "25px", backgroundColor: "darkblue", padding: "12px" }}>اكتشف المنتجات</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/32.jpg"
          alt="second slide"
          style={{ height: "540px" }}
        />
        <Carousel.Caption>
          <h2 style={{ marginBottom: "20px", color: "darkBlue" }}>العاب مهارات</h2>
          <NavLink className='btn btn-primary mb-5 btn-block ' style={{ width: "13%", borderRadius: "25px", backgroundColor: "darkblue", padding: "12px" }} to="/product2" >اكتشف المنتجات</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\img\images\IMG-20240429-WA0035.jpg"
          alt="First slide"
          style={{ height: "540px" }}
        />
        <Carousel.Caption>
          <h2 style={{ marginBottom: "20px", color: "darkBlue" }}>العاب ذكاء</h2>
          <NavLink className='btn btn-primary mb-5 btn-block ' style={{ width: "13%", borderRadius: "25px", backgroundColor: "darkblue", padding: "12px" }} to="/product3" >اكتشف المنتجات</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\img\images\IMG-20240429-WA0050.jpg"
          alt="First slide"
          style={{ height: "540px" }}
        />
        <Carousel.Caption>
          <h2 style={{ marginBottom: "20px", color: "darkblue" }}>العاب تركيب</h2>
          <NavLink className='btn btn-primary mb-5 btn-block ' style={{ width: "13%", borderRadius: "25px", backgroundColor: "darkblue", padding: "12px" }} to="/product4" >اكتشف المنتجات</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\img\images\IMG-20240429-WA0051.jpg"
          alt="Second slide"
          style={{ height: "540px" }}
        />
        <Carousel.Caption>
          <h2 style={{ marginBottom: "20px", color: "darkblue" }}>العاب ورقية</h2>
          <NavLink className='btn btn-primary mb-5 btn-block ' style={{ width: "13%", borderRadius: "25px", backgroundColor: "darkblue", padding: "12px" }} to="/product5" >اكتشف المنتجات</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\img\images\IMG-20240430-WA0029.jpg"
          alt="Third slide"
          style={{ height: "540px" }}
        />
        <Carousel.Caption>
          <h2 style={{ marginBottom: "20px", color: "darkblue" }}>العاب ترفيهية</h2>
          <NavLink className='btn btn-primary mb-5 btn-block ' style={{ width: "13%", borderRadius: "25px", backgroundColor: "darkblue", padding: "12px" }} to="/product6" >اكتشف المنتجات</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;