import "./Welcome.css";
import NavigationBar from "../components/NavigationBar/NavigationBar.tsx";
import { BackgroundPhoto, hideLogin } from "./BackgroundPhoto.tsx";
import { useEffect } from "react";
import SignUpButton from "../components/Buttons/SignUpButton.tsx";
import LoginButton from "../components/Buttons/LoginButton.tsx";
import image1 from "../assets/57357nobg.png";
import image2 from "../assets/EgyptianFoodBanknobg.png";
import image3 from "../assets/Misrelkheirnobg.png";
import image4 from "../assets/Ormannobg.png";
import image5 from "../assets/Redcrescentnobg.png";
import image6 from "../assets/Turinnobg.png";
import image7 from "../assets/Resalanobg.png";
import image8 from "../assets/magdiYacoubFoundationnobg.png";
import image9 from "../assets/baheyanobg.png";
import Login from "./Login.tsx";
import { MdOutlineHelp } from "react-icons/md";
import HowToUse from "./HowToUse.tsx";

function Welcome() {
  useEffect(() => {
    var navbar = document.querySelector(".navigation-bar");
    if (navbar) navbar.classList.add("scrolled");
    window.addEventListener("scroll", function () {
      var currentScrollPosition = window.scrollY;
      if (navbar) {
        if (currentScrollPosition !== 0) {
          navbar.classList.remove("scrolled");
        } else {
          navbar.classList.add("scrolled");
        }
      }
    });
  }, []);
  const showHowTo = () => {
    var howto = document.querySelector(".howto-container") as HTMLElement;
    howto.style.display = "flex";
  };

  return (
    <div className="welcomeDashboard">
      <div className="navBarHolder">
        <NavigationBar
          rightDiv={
            <>
              <SignUpButton />
              <LoginButton />
            </>
          }
          leftDiv={<MdOutlineHelp size={30} onClick={showHowTo} />}
          dashboard="/"
        />
      </div>
      <Login />
      <HowToUse
        message={
          <div className="howtoText">
            <p>
              Welcome to HeartLink! HeartLink is a platform that connects donors
              with organizations in need. Here's how to use it:
            </p>
            <p>
              1. Click on the "Sign Up" button to create an account. You can
              sign up as a donor, organization, teacher, or doctor.
            </p>
            <p>
              2. Click on the "Login" button to log in. You can log in as a
              donor, organization, teacher, or doctor.
            </p>
            <p style={{ fontWeight: "bold" }}>
              For testing purposes here are the passwords for each account type:
              <br />
              Donor: donor
              <br />
              Organization: org
              <br />
              Admin: admin
              <br />
              Teacher: teacher
              <br />
              Doctor: doctor
            </p>
          </div>
        }
        id={"hi"}
      />
      <BackgroundPhoto />
      <div className="app" onClick={hideLogin}>
        <h1 id="about"> Connecting Hearts, Changing Lives</h1>
        <p>
          {" "}
          Heartlink is your bridge to meaningful impact. Our web app connects
          compassionate donors with organizations in need, facilitating
          donations of essential goods to those who need them most. Together, we
          create a network of kindness, transforming generosity into tangible
          support for communities around the world. Join us in making a
          difference, one heart at a time.
        </p>

        <br />
        <hr />
        <br />
        <h1>Our Mission</h1>
        <p>
          At Heartlink, we believe in the power of connection. Our mission is to
          create a platform that brings together individuals and organizations,
          fostering a community of support and compassion. We strive to make
          giving back easy and accessible, enabling donors to make a difference
          in the lives of those in need. By connecting hearts and changing
          lives, we aim to build a brighter future for all.
        </p>
        <br />
        <hr />
        <br />
        <h1>Our Vision</h1>
        <p>
          Our vision is a world where kindness knows no bounds. We envision a
          global community where every person has the opportunity to thrive,
          supported by the generosity of others. By creating a network of
          giving, we seek to empower individuals and organizations to make a
          positive impact on the world around them. Together, we can build a
          brighter future for all, one heart at a time.
        </p>
        <br />
        <hr />
        <br />
        <h1>Get Involved</h1>
        <p>
          There are many ways to get involved with Heartlink and support our
          mission of connecting hearts and changing lives. Whether you are an
          individual looking to make a donation or a nonprofit organization
          seeking support, there are opportunities for everyone to get involved.
          Here are some ways you can help:
        </p>
        <ul>
          <li>
            Make a Donation: You can make a one-time or recurring donation to
            support our programs and initiatives, helping us to provide
            essential goods to communities in need.
          </li>
          <li>
            Volunteer Your Time: You can volunteer with Heartlink to help us
            with a variety of tasks, from fundraising to outreach to technology
            support.
          </li>
          <li>
            Spread the Word: You can help us raise awareness of our work by
            sharing our mission and programs with your friends, family, and
            social networks.
          </li>
          <li>
            Partner with Us: If you are a nonprofit organization, you can
            partner with Heartlink to receive donations of essential goods for
            your programs and initiatives.
          </li>
        </ul>
        <br />
        <hr />
        <h1>Trusted Partners</h1>
        <div className="partners">
          <div className="scroller">
            <img src={image1} alt="partner" className="partner" />
            <img src={image2} alt="partner" className="partner" />
            <img src={image3} alt="partner" className="partner" />
            <img src={image4} alt="partner" className="partner" />
            <img src={image5} alt="partner" className="partner" />
            <img src={image6} alt="partner" className="partner" />
            <img src={image7} alt="partner" className="partner" />
            <img src={image8} alt="partner" className="partner" />
            <img src={image9} alt="partner" className="partner" />

            <img src={image1} alt="partner" className="partner" />
            <img src={image2} alt="partner" className="partner" />
            <img src={image3} alt="partner" className="partner" />
            <img src={image4} alt="partner" className="partner" />
            <img src={image5} alt="partner" className="partner" />
            <img src={image6} alt="partner" className="partner" />
            <img src={image7} alt="partner" className="partner" />
            <img src={image8} alt="partner" className="partner" />
            <img src={image9} alt="partner" className="partner" />
          </div>
        </div>

        <br />
        <hr />
        <br />
        <h1>FAQ</h1>
        <p>Q: What is Heartlink?</p>
        <p>
          A: Heartlink is a web app that connects compassionate donors with
          organizations in need, facilitating donations of essential goods to
          those who need them most. Our platform enables individuals and
          organizations to make a difference in the lives of others, creating a
          network of kindness and support around the world.
        </p>
        <p>Q: How does Heartlink work?</p>
        <p>
          A: Heartlink works by connecting donors with organizations in need
          through our web app. Donors can browse a list of organizations and
          their specific needs, then select items to donate. Once a donation is
          made, Heartlink coordinates the delivery of the items to the
          organization, ensuring that they reach those in need.
        </p>
        <p>Q: How can I get involved with Heartlink?</p>
        <p>
          A: There are many ways to get involved with Heartlink and support our
          mission of connecting hearts and changing lives. You can make a
          donation, volunteer your time, spread the word about our work, or
          partner with us as a nonprofit organization. Whatever your interests
          and skills, there is a way for you to make a difference with
          Heartlink.
        </p>
        <p>Q: How can I donate to Heartlink?</p>
        <p>
          A: You can make a donation to Heartlink by visiting our website and
          selecting the items you would like to donate. Once you have made your
          selection, you can complete the donation process and pay for the items
          using a credit card or other payment method. Your donation will then
          be delivered to the organization in need, making a difference in the
          lives of those who need it most.
        </p>
        <p>Q: Why is your site similar to gofundme ?</p>
        <p>
          A: We are not similar to gofundme, we are a non-profit organization
          that helps other non-profit organizations get the items they need to
          help the community. We are not a fundraising platform, we are a
          donation platform.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
