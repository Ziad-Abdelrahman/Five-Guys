import { useLoaderData, useParams } from "react-router-dom";
import EditBooksPt2 from "./Book Donation Webpages/EditBooksPt2.tsx";
import EditMedicalEquipmentPt2 from "./Medical Equipment Webpages/EditMedicalEquipmentPt2.tsx";
import EditMedicalToolsPt2 from "./Medical Tools Webpages/EditMedicalToolstPt2.tsx";
import EditClothesPt2 from "./Clothes Donation Webpages/EditClothesPt2.tsx";
import EditToysPt2 from "./Toys Donation Webpages/EditToysPt2.tsx";
import EditMedicationPt2 from "./Medication Webpages/EditMedicationPt2.tsx";

function EditorPt2() {
  const { id } = useParams();
  console.log("imhere");
  const alldata = useLoaderData() as any;
  switch (id) {
    case "1":
    case "2":
      return <EditBooksPt2 id={alldata.id} use={alldata.use} />;
    case "3":
    case "4":
      return <EditMedicalEquipmentPt2 id={alldata.id} use={alldata.use} />;
    case "5":
    case "6":
      return <EditMedicalToolsPt2 id={alldata.id} use={alldata.use} />;
    case "9":
    case "10":
      return (
        <EditClothesPt2
          id={alldata.id}
          size={alldata.size}
          quantity={alldata.pieces}
        />
      );
    case "15":
    case "16":
      return (
        <EditToysPt2
          id={alldata.id}
          toyName={alldata.toyname}
          quantity={alldata.toyquantity}
        />
      );
    case "17":
      return (
        <EditMedicationPt2
          id={alldata.id}
          medName={alldata.medicationname}
          quantity={alldata.medquantity}
        />
      );

    default:
      return <></>;
  }
}
export default EditorPt2;
