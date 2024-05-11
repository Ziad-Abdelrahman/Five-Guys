import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import ProBonoCard from "../components/Card/Organization Cards/ProBonoCard.tsx";
import ThankYouButton from "../components/Buttons/ThankYouButton.tsx";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import "./probonoPageStyling.css";
import OrgNavgBar from "../components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";

function ProBonos() {
  const proBonoData = [
    {
      image: <FaChalkboardTeacher className={"request-card-image react-img"} />,
      description: "Teacher",
      name: "Ahmed Mohamed ",
      email: "ahmed.mohamed@yahoo.com",
      subject: "English",
      contactNumber: "01112030667",
      children: <ThankYouButton email={"ahmed.mohamed@yahoo.com"} />,
      isTeacher: true,
    },
    {
      image: <FaChalkboardTeacher className={"request-card-image react-img"} />,
      description: "Teacher",
      name: "Ziad Abdelrahman",
      email: "ziad.abdelrahman@yahoo.com",
      subject: "Computer Science",
      contactNumber: "01030418547",
      children: <ThankYouButton email={"ziad.abdelrahman@yahoo.com"} />,
      isTeacher: true,
    },
    {
      image: <FaUserDoctor className={"request-card-image doctor-img"} />,
      description: "Doctor",
      name: "Ola Soliman",
      email: "ola.soliman@yahoo.com",
      subject: "Pediatrician",
      contactNumber: "01109834083",
      children: <ThankYouButton email={"ola.soliman@yahoo.com"} />,
      isTeacher: false,
    },
    {
      image: <FaChalkboardTeacher className={"request-card-image react-img"} />,
      description: "Teacher",
      name: "Youssef Mohamed ",
      email: "youssef.mohamed@yahoo.com",
      subject: "Math",
      contactNumber: "01031841891",
      children: <ThankYouButton email={"youssef.mohamed@yahoo.com"} />,
      isTeacher: true,
    },
    {
      image: <FaChalkboardTeacher className={"request-card-image react-img"} />,
      description: "Teacher",
      name: "Mohamed Wael",
      email: "mohamed.wael@yahoo.com",
      subject: "Arabic",
      contactNumber: "01212035867",
      children: <ThankYouButton email={"ahmed.mohamed@yahoo.com"} />,
      isTeacher: true,
    },
    {
      image: <FaUserDoctor className={"request-card-image doctor-img"} />,
      description: "Doctor",
      name: "Farah Faisal",
      email: "farah.faisal@yahoo.com",
      subject: "Psychiatrist",
      contactNumber: "01117190578",
      children: <ThankYouButton email={"farah.faisal@yahoo.com"} />,
      isTeacher: false,
    },
    {
      image: <FaChalkboardTeacher className={"request-card-image react-img"} />,
      description: "Teacher",
      name: "Abdallah Ahmed ",
      email: "abdallah.ahmed@yahoo.com",
      subject: "Biology",
      contactNumber: "01119020607",
      children: <ThankYouButton email={"abdallah.ahmed@yahoo.com"} />,
      isTeacher: true,
    },
    {
      image: <FaUserDoctor className={"request-card-image doctor-img"} />,
      description: "Doctor",
      name: "Mirna Mohamed",
      email: "mirna.mohamed@yahoo.com",
      subject: "Cardiologist",
      contactNumber: "01113200578",
      children: <ThankYouButton email={"mirna.mohamed@yahoo.com"} />,
      isTeacher: false,
    },
  ];
  return (
    <>
      <OrgNavgBar />
      <br />
      <Headerofsection title={"Probonos"} />
      <div
        className="info-conainer"
        style={{
          justifyContent: "flex",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {proBonoData.map((proBono) => (
          <ProBonoCard
            image={proBono.image}
            description={proBono.description}
            name={proBono.name}
            email={proBono.email}
            subject={proBono.subject}
            contactNmber={proBono.contactNumber}
            children={proBono.children}
            isTeacher={proBono.isTeacher}
          />
        ))}
      </div>
    </>
  );
}

export default ProBonos;
