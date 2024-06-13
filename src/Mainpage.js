import "./App.css";
import Header from './Header';


function App() {
  return (
    <>
      <>
        <Header />
        <br />
        <br />
        <section className="Feautes section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>SKIN DISEASE HEALTH PARTNER!</h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
                <div className="single-features">
                  <div className="signle-icon">
                    <i className="icofont icofont-eye-alt" />
                  </div>
                  <h3>Upload Image</h3>
                </div>
                {/* End Single features */}
              </div>
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
                <div className="single-features">
                  <div className="signle-icon">
                    <i className="icofont icofont-prescription" />
                  </div>
                  <h3>Disease Detection</h3>
                </div>
                {/* End Single features */}
              </div>
              <div className="col-lg-4 col-12">
                {/* Start Single features */}
                <div className="single-features last">
                  <div className="signle-icon">
                    <i className="icofont icofont-stethoscope" />
                  </div>
                  <h3>Remedies & Medical Treatment</h3>
                </div>
                {/* End Single features */}
              </div>
            </div>
          </div>
        </section>
        <br />

        {/*/ End Feautes */}
        {/* Start Fun-facts */}
        <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-home" />
                  <div className="content">
                    <span className="counter">7</span>
                    <p>Diseases trained</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-user-alt-3" />
                  <div className="content">
                    <span className="counter">6</span>
                    <p>Dermatologists</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont-simple-smile" />
                  <div className="content">
                    <span className="counter">25</span>
                    <p>Happy Patients</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Fun */}
                <div className="single-fun">
                  <i className="icofont icofont-table" />
                  <div className="content">
                    <span className="counter">1</span>
                    <p>Months of Experience</p>
                  </div>
                </div>
                {/* End Single Fun */}
              </div>
            </div>
          </div>
        </div>
        {/*/ End Fun-facts */}
        {/* Start Why choose */}
        <section className="why-choose section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>
                    Disease Detection Procedure
                  </h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                {/* Start Choose Left */}
                <div className="choose-left">
                  <h3>Follow this procedure:</h3>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="list">
                        <li>
                          <i className="fa fa-caret-right" />
                          Navigate to the "Diagnosis" page
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Upload an image of the affected area.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Receive disease name and suggested remedies.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Optionally, schedule an appointment for further consultation.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          disease name and uploaded image are forwarded to a dermatologist.
                        </li>
                        <li>
                          <i className="fa fa-caret-right" />
                          Engage in an online consultation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Choose Left */}
              </div>
              <div className="col-lg-6 col-12">
                {/* Start Choose Rights */}
                <div className="choose-right">
                  <div className="video-image">
                    {/* Video Animation */}
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    {/*/ End Video Animation */}
                    <a
                      href=" " target="_blank"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play" />

                    </a>
                  </div>
                </div>

                {/* End Choose Rights */}
              </div>
            </div>
          </div>
        </section>

        {/*/ End Why choose */}

        {/*/ End Why choose */}
        {/* Start Call to action */}
        <section
          className="call-action overlay"
          data-stellar-background-ratio="0.5"
        >
        </section>

        {/* Diseases Detected Section */}
        <section className="diseases-detected" style={{  padding: '20px' }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h3 style={{ fontWeight: 600 }}>Detects Following Diseases</h3><br />
          <img src="img/section-img.png" alt="#" />
        </div>
      </div>
    </div>
    <div>
      <div style={{ color: '#666', marginBottom: '20px'}}>
        <span>Acne / Rosacea</span><br />
        <span>Melanocytic Nevus</span><br />
        <span>Eczema</span><br />
        <span>Dermatofibroma</span><br />
        <span>Vascular Lesion</span><br />
        <span>Ringworm / Tinea</span><br />
        <span>Melanoma</span>
      </div>
    </div>
  </div>
</section>




        {/*/ End Call to action */}
        {/*/ End portfolio */}

        {/* Pricing Table */}
        <section className="pricing-table section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Provides Best Treatment In Resonable Price</h2>
                  <img src="img/section-img.png" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Table */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="single-table">
                  {/* Table Head */}
                  <div className="table-head">
                    <h4 className="title">FREE  MEMBERSHIP</h4>
                    <div className="price">
                      <p className="amount">₹0<span>/ Per Month</span></p>
                    </div>
                  </div>
                  {/* Table List */}
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check" />5 Scans Per Day
                    </li>
                    <li className="cross">
                      <i className="icofont icofont-ui-close" />
                      doctor consultation
                    </li>

                  </ul>
                  <div className="table-bottom">
                    <btn className="btn">Book Now</btn>
                  </div>
                  {/* Table Bottom */}
                </div>
              </div>
              {/* End Single Table*/}
              {/* Single Table */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="single-table">
                  {/* Table Head */}
                  <div className="table-head">
                    <h4 className="title">PRIME MEMBERSHIP</h4>
                    <div className="price">
                      <p className="amount">
                        ₹99<span>/ Per Month</span>
                      </p>
                    </div>
                  </div>
                  {/* Table List */}
                  <ul className="table-list">
                    <li>
                      <i className="icofont icofont-ui-check" />
                      20 scans per day
                    </li>
                    <li>
                      <i className="icofont icofont-ui-check" />
                      doctor consultation
                    </li>
                  </ul>
                  <div className="table-bottom">
                    <btn className="btn">Book Now</btn>
                  </div>
                  {/* Table Bottom */}
                </div>
              </div>
              {/* End Single Table*/}
            </div>
          </div>
        </section>
        {/*/ End Pricing Table */}
        {/* Start clients */}


        {/*/Ens clients */}
        {/* Start Appointment */}
        <section className="appointment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Ready to accept your query</h2>
                  <img src="img/section-img.png" alt="#" />
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <form className="form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="name" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="phone" type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Date" id="datepicker" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Write Your Message Here....."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }} className="row">
                    <div className="">
                      <div className="form-group">
                        <div className="button">
                          <button type="submit" className="btn">
                            Submit Query
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
           
            

          </div>
        </section>
        {/* End Appointment */}

        {/* Footer Area */}
        <footer id="footer" className="footer ">
          {/* Footer Top */}

          {/*/ End Footer Top */}
          {/* Copyright */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="copyright-content">
                    <p>
                      © Copyright 2024 | All Rights Reserved by{"Surekha"}
                      <a
                        target="_blank"
                        rel="noreferrer"
                      >
                        Skin-O-Cure
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}
export default App;
