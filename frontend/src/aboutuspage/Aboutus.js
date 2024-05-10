import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { CartProvider } from "react-use-cart";
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';

const Aboutus = () => {
    return (
        <CartProvider>
            <Navbar />
            <h2 className='mt-5 text-center' style={{ color: "#45bceb" }}>لماذا تختار موقعنا</h2>
            <Container>
                <Row>
                    <Col md="4" className='text-center'>
                        <h3 className='h1 ' style={{ color: "darkblue" }}>الأهداف</h3>
                        <i className="fa-solid fa-bullseye h1 mt-3 " style={{ color: "#9d9db9" }}></i>
                        <p className='h4 text-dark  mt-3'>الهدف الأساسي للشركة هو الإنتشار السوقي من خلال زيادة نسبة المبيعات خمسون بالمئة خلال الخمس سنوات  القادمة، خاصةً في ظل الظروف الراهنة التي تحتم على الشركات تقنين أعمالها وأنشطتها</p>
                    </Col>
                    <Col md="4" className='text-center text-muted'>
                        <h3 className='h1' style={{ color: "darkblue" }}>الرؤية</h3>
                        <i className="fa-regular fa-eye h1 mt-3" style={{ color: "#9d9db9" }}></i>
                        <p className='h4 text-dark mt-3'>خلال العشر سنوات القادمة تسعى شركة العزازي للإنتقال إلى مرحلة جديدة من العمل من خلال  تطوير الهياكل التنظيمية والمهنية والتخصصية التي تعمل وفقها، لتتوائم مع متطلبات وطموح الشركة في الإنتشار الواسع وتطوير قاعدة العملاء وجودة الخدمة،  للوصول نحو العالمية في مجال الألعاب الترفيهية</p>
                    </Col>
                    <Col md="4" className='text-center text-muted'>
                        <h3 className='h1' style={{ color: "darkblue" }}>الرسالة</h3>
                        <i className="fa-regular fa-message h1 mt-3" style={{ color: "#9d9db9" }} ></i>
                        <p className='h4 text-dark mt-3'>مهمتنا تطوير مجال الألعاب الترفيهية في مصر والمنطقة، لترفيه و مرح أفضل مع الكثير من المرونة والسهولة</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </CartProvider>
    );
};

export default Aboutus;