import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import { Link } from 'react-scroll';
const Navbar = () => {
    const { totalUniqueItems } = useCart();
    return (
        <CartProvider>
            <div className='fs-1 style'>
                <nav className="navbar navbar-expand-lg navbar-light bg-muted">
                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand"><img
                            src="img/lo2.png"
                            alt=''
                            classNameName="img-fluid "
                            style={{ width: "125px" }} />
                        </NavLink>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav">
                                <NavLink to="/" className="nav-link mx-2" style={{ color: "darkblue" }}>الصفحة الرئيسية</NavLink>
                                <NavLink to="/allproducts" className="nav-link mx-2" style={{ color: "darkblue" }}> المنتجات</NavLink>
                                <NavLink to="/polices2" className="nav-item nav-link mx-2" style={{ color: "darkblue" }}>السياسات</NavLink>
                                <Link to="contact" className="nav-item nav-link mx-2" style={{ color: "darkblue" }} smooth={true} offset={-50} duration={1000}>التواصل</Link>
                                <NavLink to="/Demand" className="nav-item nav-link mx-2" style={{ color: "darkblue" }}>اصنع بنفسك</NavLink>
                                <NavLink to="/aboutus" className="nav-item nav-link mx-2" style={{ color: "darkblue" }}>من نحن</NavLink>
                            </div>
                            <NavLink to="/loginform" className="btn btn-primary p-3" style={{ backgroundColor: "darkBlue", fontSize: "15px" }}>تسجيل الدخول</NavLink>
                            <div className="dropdown-menu " style={{ direction: "rtl" }}>
                            </div>
                            <NavLink to="/cartpage" className="nav-item nav-link"><i className="fa-solid fa-cart-shopping" style={{ color: "darkBlue" }}></i>
                                <sup className="mx-1" style={{ color: "darkBlue" }}>({totalUniqueItems})</sup>{" "}
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </CartProvider>
    );
};
export default Navbar;