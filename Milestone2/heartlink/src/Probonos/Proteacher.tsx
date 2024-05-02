import Headerofsection from "../components/header/headerofsection.tsx";
import teacher1 from "../assets/teacher1.jpeg"
import Viewdetails from "../components/ViewDetailsCard/Viewdetails.tsx";
import teacher2 from "../assets/teacher2.jpeg";
//import NavigationBar from "../components/NavigationBar/NavigationBar.tsx";
function Proteacher() {
  return (
    <>
      
      <Headerofsection title={"Probonos"} />
      <div className="info-conainer">
        <Viewdetails
          image={teacher1}
          description="Teacher"
          postedby="Ahmed Mohamed "
          email="ahmed.mohamed@yahoo.com"
          subject="English"
          area="Cairo"
        />
          <Viewdetails
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
          <Viewdetails
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
          <Viewdetails
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
          <Viewdetails
          image={teacher2}
          description="Teacher"
          postedby="Lina Ahmed "
          email="lina.helmy@yahoo.com"
          subject="Math"
          area="Cairo"
        />
          <Viewdetails
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

export default Proteacher;
