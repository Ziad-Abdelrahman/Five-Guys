import Headerofsection from "../components/header/headerofsection.tsx";
import teacher1 from "../assets/teacher1.jpeg";
import ProBonoCard from "../components/Card/ProBonoCard.tsx";
import teacher2 from "../assets/teacher2.jpeg";
function ProbonoDoctor() {
  return (
    <>
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
        <ProBonoCard
          image={teacher1}
          description="Teacher"
          postedby="Ahmed Mohamed "
          email="ahmed.mohamed@yahoo.com"
          speciality="Cardiology"
          contact="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          speciality="Dermatology"
          contact="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          speciality="Neurology"
          contact="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          speciality="Otolaryngology"
          contact="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          speciality="Psychiatry"
          contact="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          speciality="Pediatrics"
          contact="Cairo"
        />
      </div>
    </>
  );
}

export default ProbonoDoctor;
