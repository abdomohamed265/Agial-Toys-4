import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Services = () => {
    return (
        <div>
            <Container className='text-center' style={{ backgroundColor: "#8080800d" }}>
                <Row className='d-flex'>
                    <h2 className="text-center mt-3">الخدمات</h2>


                    <Col md="4">
                        <div className='mt-5 pt-2'>
                            <i className="fa-solid fa-rotate-right h1 " style={{ color: "darkblue" }}></i>
                            <h2>الإسترجاع و الإستبدال</h2>
                        </div>
                    </Col>

                    <Col md="4">
                        <div className='mt-5 pt-2'>
                            <i className="fa-solid fa-screwdriver-wrench h1" style={{ color: "darkblue" }}></i>
                            <h2>الصيانة</h2>
                        </div>
                    </Col>

                    <Col md="4">
                        <div className='mt-5 pt-2'>
                            <i className="fa-solid fa-truck-fast h1 " style={{ color: "darkblue" }}></i>
                            <h2>التوصيل</h2>
                        </div>
                    </Col>



                </Row>
            </Container>
        </div>
    );
};

export default Services;