import React from 'react';
import Header from './Header';
import img1 from "./doctor/doc1.jpg";
import img2 from "./doctor/doc2.jpg";
import img3 from "./doctor/doc3.png";
import img4 from "./doctor/doc4.jpg";
import img5 from "./doctor/doc5.jpg";
import img6 from "./doctor/doc6.jpg";

export default function Appointment() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="card mx-3 my-3" style={{ width: "18rem", borderRadius: '15px' }}>
                <img src={img1} style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" alt="Doctor" />
                <div className="card-body">
                  <h5 className="card-title text-center">Dr. Sarah Smith</h5>
                  <p className="card-text text-center">Dermatologist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="card mx-3 my-3" style={{ width: "18rem", borderRadius: '15px' }}>
                <img src={img2} style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" alt="Doctor 2" />
                <div className="card-body">
                  <h5 className="card-title text-center">Dr. Kylie</h5>
                  <p className="card-text text-center">Dermatologist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="card mx-3 my-3" style={{ width: "18rem", borderRadius: '15px' }}>
                <img src={img3} style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" alt="Doctor 3" />
                <div className="card-body">
                  <h5 className="card-title text-center">Dr. Chang</h5>
                  <p className="card-text text-center">Dermatologist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="card mx-3 my-3" style={{ width: "18rem", borderRadius: '15px' }}>
                <img src={img4} style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" alt="Doctor 4" />
                <div className="card-body">
                  <h5 className="card-title text-center">Dr. Jenifer</h5>
                  <p className="card-text text-center">Dermatologist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="card mx-3 my-3" style={{ width: "18rem", borderRadius: '15px' }}>
                <img src={img5} style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" alt="Doctor 5" />
                <div className="card-body">
                  <h5 className="card-title text-center">Dr. Mahin Fatima</h5>
                  <p className="card-text text-center">Dermatologist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="card mx-3 my-3" style={{ width: "18rem", borderRadius: '15px' }}>
                <img src={img6} style={{ borderRadius: '10px 10px 0 0', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" alt="Doctor 6" />
                <div className="card-body">
                  <h5 className="card-title text-center">Dr. Daniel Wang</h5>
                  <p className="card-text text-center">Dermatologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
