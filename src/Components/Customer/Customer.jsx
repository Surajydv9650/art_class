import React from 'react';
import customer1 from '../../assets/customer/customer1.jpg';
import customer2 from '../../assets/customer/customer2.jpg';
import customer3 from '../../assets/customer/customer3.jpg';

const Customer = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div id="carousel-inner" className="carousel-inner">
                <div id="carousel-item-active" className="carousel-item active">
                    <img src={customer1} className="d-block w-100 img-h" alt="Description 1" />
                </div>
                <div id="carousel-item-2" className="carousel-item">
                    <img src={customer2} className="d-block w-100 img-h" alt="Description 2" />
                </div>
                <div id="carousel-item-3" className="carousel-item">
                    <img src={customer3} className="d-block w-100 img-h" alt="Description 3" />
                </div>
            </div>
            <button
                id="carousel-control-prev"
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span id="carousel-control-prev-icon" className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                id="carousel-control-next"
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span id="carousel-control-next-icon" className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Customer;








// const Customer = () => {
//   return (
//     <div className="image-container">
//        <sec className="module bg-gray p-b-0">
//          <div className="container">
//            <div className="row">
//              <div className="col-md-3">
//                <div className="counter">
//                  <div className="counter-icon">
//                    <span className="icon-energy icons"></span>
//                  </div>
//                  <div className="counter-number">
//                    <h6>
//                      <strong className="counter-timer" data-from="0" data-to="1538">
//                        10+
//                      </strong>
//                    </h6>
//                  </div>
//                  <div className="counter-title">Expert Teachers</div>
//                </div>
//              </div>
//              <div className="col-md-3">
//                <div className="counter">
//                  <div className="counter-icon">
//                    <span className="icon-game-controller icons"></span>
//                  </div>
//                  <div className="counter-number">
//                    <h6>
//                      <strong className="counter-timer" data-from="0" data-to="2124">
//                        100+
//                      </strong>
//                   </h6>
//                  </div>
//                  <div className="counter-title">Completed Courses</div>
//                </div>
//              </div>
//             <div className="col-md-3">
//                <div className="counter">
//                  <div className="counter-icon">
//                    <span className="icon-fire icons"></span>
//                  </div>
//                  <div className="counter-number">
//                    <h6>
//                      <strong className="counter-timer" data-from="0" data-to="3128">
//                        300+
//                      </strong>
//                    </h6>
//                  </div>
//                  <div className="counter-title">Students Learner</div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </sec>
//      </div>
 
//  );
// };

// export default Customer;

