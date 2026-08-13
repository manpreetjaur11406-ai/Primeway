import "./WhyChooseUs.css";

import {
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

import truckImage from "../../assets/trucck.png";


function WhyChooseUs() {

  return (

    <section className="why-choose-us">


      {/* =========================
          TOP FEATURES
      ========================= */}

      <div className="why-features">


        {/* ONLINE PAYMENT */}

        <div className="why-feature-card">

          <FaCreditCard className="why-feature-icon" />

          <h3>
            Secure Payment
          </h3>

          <p>
            Safe and convenient payment
            options for all your truck
            spare parts orders.
          </p>

        </div>



        {/* SUPPORT */}

        <div className="why-feature-card">

          <FaHeadset className="why-feature-icon" />

          <h3>
            Support 24/7
          </h3>

          <p>
            Our team is always ready to
            help you with product and
            order-related queries.
          </p>

        </div>



        {/* SPECIAL OFFER */}

        <div className="why-offer-card">


          <div className="offer-content">

            <span className="offer-label">
              SPECIAL OFFER
            </span>


            <h2>
              Free Delivery
              <br />
              Across India
            </h2>


            <p>
              Get fast and reliable delivery
              on your truck spare parts
              orders.
            </p>

          </div>



          <div className="offer-image">

            <img
              src={truckImage}
              alt="PrimeWay truck delivery"
            />

          </div>


        </div>

      </div>



      {/* =========================
          WELCOME SECTION
      ========================= */}

      <div className="welcome-section">


        {/* IMAGE */}

        <div className="welcome-image">

          <img
            src={truckImage}
            alt="PrimeWay truck spare parts"
          />

        </div>



        {/* CONTENT */}

        <div className="welcome-content">

          <h2>
            Welcome to PrimeWay –
            <br />
            Your Trusted Truck Parts
            <br />
            Partner
          </h2>


          <p>
            At PrimeWay, we specialize in
            supplying high-quality, reliable,
            and durable truck spare parts that
            keep your fleet moving. With a
            commitment to excellence and
            customer satisfaction, we ensure
            every part meets strict quality
            standards.
          </p>

        </div>


      </div>


    </section>

  );

}


export default WhyChooseUs;