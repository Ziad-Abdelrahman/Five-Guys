import Headerofsection from "../components/header/headerofsection.tsx";
import teacher1 from "../assets/teacher1.jpeg";
import ProBonoCard from "../components/Card/ProBonoCard.tsx";
import teacher2 from "../assets/teacher2.jpeg";
function ProBonoTeacher() {
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
          subject="English"
          area="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
        <ProBonoCard
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
      </div>
    </>
  );
}

export default ProBonoTeacher;
