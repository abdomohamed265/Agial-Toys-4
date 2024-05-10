import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>

      <div className="text-end" id='contact'>

        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: '#1c2331' }}
        >
          <section
            className="p-4 text-center"
            style={{ backgroundColor: 'darkBlue' }}
          >
            <div>
              <NavLink href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </NavLink>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-end">
                  <NavLink href="#" className="navbar-brand"><img
                    src="img/lo2.png"
                    alt=""
                    classNameName="img-fluid "
                    style={{ width: "250px" }}
                  />
                  </NavLink>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-end">
                  <h6 className="text-uppercase fw-bold">روابط سريعة</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    <NavLink to="/header" className="text-white">الرئيسية</NavLink>
                  </p>
                  <p>
                    <NavLink to="/aboutus" className="text-white">من نحن</NavLink>
                  </p>
                  <p>
                    <NavLink to="/cartpage" className="text-white">سلة المشتريات</NavLink>
                  </p>
                  <p>
                    <NavLink to="/polices1" className="text-white">السياسات</NavLink>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-end">

                  <h6 className="text-uppercase fw-bold">المنتجات</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    <NavLink to="/product1" className="text-white">العاب تعليمية</NavLink>
                  </p>
                  <p>
                    <NavLink to="/product2" className="text-white">العاب مهارات</NavLink>
                  </p>
                  <p>
                    <NavLink to="/product3" className="text-white">العاب ذكاء</NavLink>
                  </p>
                  <p>
                    <NavLink to="/product4" className="text-white">العاب تركيب</NavLink>
                  </p>
                  <p>
                    <NavLink to="/product5" className="text-white">العاب ورقية</NavLink>
                  </p>
                  <p>
                    <NavLink to="/product6" className="text-white">العاب ترفيهية</NavLink>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-end">

                  <h6 className="text-uppercase fw-bold">التواصل</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p><i className="fas fa-home mr-3"></i>Cairo</p>
                  <p><i className="fas fa-envelope mr-3"></i> agial5584@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i>  01587545454</p>
                  <p><i className="fas fa-print mr-3"></i>  01048966488</p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            <span className="text-white"
            >أجيال</span>
            : © 2024 Copyright
          </div>
        </footer>
        <ScrollToTop smooth
          viewBox="-22.5 0 157 157"
          svgPath="M5.30536 97.5978C5.91734 98.1288 6.50082 98.6913 7.05322 99.2839C7.94387 100.274 8.87613 101.263 9.77794 102.22C12.2978 104.747 14.5974 107.483 16.6522 110.4C18.7392 113.704 20.638 117.123 22.3394 120.642C23.2885 122.515 24.2705 124.449 25.2977 126.321L25.8883 127.398C28.2413 131.687 30.6749 136.122 33.3593 140.304C34.8295 142.46 36.6442 144.361 38.7308 145.929C42.5909 148.888 46.8727 151.252 51.4336 152.942C56.2859 154.882 61.4643 155.879 66.6902 155.877C72.5749 155.805 78.4012 154.709 83.9092 152.636C88.8435 150.753 93.3204 147.84 97.0419 144.091C100.763 140.344 103.645 135.846 105.494 130.898C110.518 117.827 112.49 103.513 111.524 87.1417C111.274 84.3096 110.556 81.5385 109.401 78.9408C108.371 76.3246 106.417 74.1764 103.91 72.9031C101.403 71.6298 98.516 71.32 95.7961 72.0321C94.4789 72.4109 93.2134 72.951 92.0281 73.6402C91.5621 73.885 91.0823 74.137 90.5947 74.3733C89.0739 70.9111 87.011 68.7728 84.2938 67.8408C82.2296 67.1969 80.1162 66.7224 77.9746 66.4211C77.0656 66.2663 76.1277 66.1074 75.1753 65.921C75.1753 65.8239 75.1753 65.7202 75.1792 65.6119C75.1865 65.0442 75.1963 64.3373 75.1687 63.6258C75.0637 60.9427 74.9659 58.2588 74.8754 55.5739C74.6391 48.851 74.3956 41.8984 73.9781 35.0699C73.5561 28.1632 71.7834 22.5036 68.5581 17.7655C65.6996 13.565 61.0589 12.4492 57.0067 14.9873C55.1592 16.1341 53.605 17.6965 52.4681 19.5501C51.4935 21.3369 50.676 23.2051 50.0251 25.1336C49.7987 25.7446 49.5724 26.357 49.3354 26.9648C49.2317 26.7987 49.1271 26.6294 49.0201 26.4568C48.4767 25.5766 47.9149 24.6656 47.2527 23.7973C44.6378 20.3705 41.2006 19.6098 37.3099 21.5946C36.0553 22.2127 34.9501 23.0957 34.0701 24.1826C33.1902 25.2696 32.5566 26.5345 32.2133 27.8902C31.7777 29.4217 31.4983 30.9933 31.3791 32.5811C31.3134 33.6378 31.2347 34.6945 31.1605 35.7512C30.875 39.7798 30.5803 43.9462 30.6013 48.0483C30.64 55.6343 30.8162 63.3443 30.9862 70.8009C31.0636 74.202 31.1371 77.6031 31.2066 81.0036C31.2283 82.1194 31.2222 83.2352 31.2163 84.3588C31.2163 84.7526 31.2148 85.1451 31.2118 85.5369C31.0431 85.3991 30.8779 85.2573 30.7138 85.1149C30.4099 84.8524 30.1066 84.5938 29.7863 84.3569C23.2951 79.5656 16.2735 77.8164 8.91137 79.1527C7.228 79.4028 5.63958 80.0893 4.30386 81.1441C2.96814 82.1982 1.93163 83.5843 1.29778 85.1635C0.689607 86.8477 0.526176 88.6598 0.823156 90.4254C1.12014 92.1916 1.86749 93.8508 2.99311 95.2429C3.68896 96.0981 4.46304 96.8863 5.30536 97.5978ZM36.8013 68.1171C36.7586 66.2728 36.6856 64.399 36.6147 62.5875C36.4789 59.1089 36.338 55.5174 36.4141 51.9916C36.5401 46.1187 36.9239 40.1493 37.2954 34.3761L37.4778 31.523C37.6392 28.9784 38.2492 26.5086 41.5591 25.637C43.6771 27.1669 44.9909 29.4982 45.573 32.7583C46.4231 37.3705 47.0203 42.0259 47.3616 46.7035C47.8171 53.3922 48.1605 60.203 48.492 66.7873C48.6621 70.1622 48.8371 73.5365 49.0169 76.9107C49.0575 77.6176 49.218 78.312 49.4915 78.965C49.7297 79.6299 50.2108 80.1799 50.8382 80.5048C51.4656 80.829 52.1926 80.9039 52.8729 80.7135C53.5156 80.6289 54.1 80.2968 54.5022 79.7881C54.9043 79.2794 55.0926 78.6342 55.0271 77.9891C55.0127 77.0787 55.0331 76.148 55.0521 75.2475C55.1218 73.5726 55.0887 71.8943 54.9534 70.2233C53.9938 60.8036 54.5179 51.2309 55.0252 41.9732L55.1989 38.6961C55.2956 35.8023 55.5376 32.9152 55.9241 30.0456C56.3588 27.6629 57.0744 25.3401 58.0559 23.1258C58.6099 22.0915 59.4004 21.2028 60.3631 20.532C60.5524 20.3463 60.7823 20.2071 61.0348 20.1258C61.2873 20.0445 61.5552 20.0231 61.8174 20.0634C62.0606 20.1475 62.2809 20.2871 62.4609 20.4711C62.6409 20.6551 62.7756 20.8783 62.8545 21.1234C63.1223 21.7456 63.4123 22.3671 63.703 22.99C64.6201 24.7359 65.2945 26.599 65.707 28.5275C66.6994 34.3683 67.3308 40.2646 67.5992 46.183C68.0271 59.0216 67.699 68.845 66.534 78.0357C66.5084 78.2647 66.4972 78.4958 66.4985 78.7261C66.4985 78.8416 66.4985 78.9565 66.4906 79.0714C66.3738 81.7545 66.6528 83.0311 68.6165 83.5076C70.5252 83.967 73.2043 82.9575 73.9985 80.7641C74.5597 79.0399 74.9042 77.2527 75.0237 75.4431C75.2101 73.4899 75.7844 72.2054 76.7302 71.6259C77.676 71.0463 79.0792 71.1166 80.8999 71.8359C82.0189 72.2244 83.0153 72.9031 83.7878 73.801C84.5603 74.6995 85.0814 75.7864 85.2974 76.9514C85.5546 78.499 85.7043 80.0624 85.7469 81.6304C85.7745 82.1732 85.8014 82.7147 85.8369 83.2549C85.9314 84.6745 86.3088 86.3646 88.4084 86.8352C90.2383 87.246 91.2608 86.0633 92.0182 84.8531C92.3366 84.3457 92.6398 83.8259 92.9437 83.3061C93.5633 82.1765 94.2701 81.0975 95.0584 80.0782C96.4761 78.3494 98.1005 77.5034 99.6226 77.6931C101.145 77.8827 102.522 79.1114 103.475 81.148C105.819 86.3456 106.68 92.0898 105.961 97.7455C105.24 104.501 104.222 111.566 102.848 119.343C101.725 125.159 99.3115 130.65 95.785 135.41C92.3064 140.279 87.017 143.845 80.0572 146.01C66.9658 150.079 54.758 147.913 42.7378 139.391C41.566 138.593 40.544 137.595 39.7186 136.442C37.9386 133.809 35.8756 130.666 34.074 127.331C31.5799 122.711 29.1024 117.81 26.4902 112.352C22.27 103.531 17.0244 96.7748 10.4545 91.6954C10.2894 91.5674 10.1334 91.4282 9.98783 91.2786C9.84961 91.1362 9.70928 90.9944 9.56706 90.852C8.215 89.4914 6.93796 88.2063 7.76757 86.1585C8.55518 84.2092 10.5622 83.904 12.3094 83.904C12.4039 83.904 12.4969 83.904 12.5895 83.904C20.1728 84.0352 25.4807 86.7715 28.8175 92.2775C29.3278 93.2312 29.7084 94.2492 29.9491 95.3039C30.039 95.6281 30.1289 95.9524 30.2254 96.2707C31.074 99.0811 32.6027 99.5524 33.723 99.4493C35.5148 99.2885 36.643 98.1537 37.0762 96.0764C37.2533 95.1746 37.328 94.2551 37.2992 93.3362C37.1424 84.0727 36.9765 75.8218 36.8013 68.1171Z"
        />
      </div>
    </div>
  );
};
export default Footer;