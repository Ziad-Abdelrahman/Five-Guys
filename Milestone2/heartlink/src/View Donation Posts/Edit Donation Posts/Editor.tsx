import { useLoaderData, useParams } from "react-router-dom";
import EditBooks from "./Book Donation Webpages/EditBooks.tsx";
import EditMedicalEquipment from "./Medical Equipment Webpages/EditMedicalEquipment.tsx";
import EditMedicalTools from "./Medical Tools Webpages/EditMedicalTools.tsx";
import EditBloodDonation from "./Blood Donation Webpages/EditBloodDonation.tsx";
import EditClothes from "./Clothes Donation Webpages/EditClothes.tsx";
import EditFood from "./Food Donation Webpages/EditFood.tsx";
import EditStationary from "./Stationary Webpages/EditStationary.tsx";
import EditToys from "./Toys Donation Webpages/EditToys.tsx";
import EditMedication from "./Medication Webpages/EditMedication.tsx";

function Editor() {
  const { id } = useParams();

  const alldata = useLoaderData() as any;
  switch (id) {
    case "1":
    case "2":
      return (
        <EditBooks
          id={alldata.id}
          edition={alldata.edition}
          language={alldata.language}
          bookName={alldata.bookname}
          quantity={alldata.copies}
          authorName={alldata.authorname}
        />
      );
    case "3":
    case "4":
      return (
        <EditMedicalEquipment
          id={alldata.id}
          category={alldata.equipment}
          value=""
          quantity={alldata.quantity}
        />
      );
    case "5":
    case "6":
      return (
        <EditMedicalTools
          id={alldata.id}
          category={alldata.tool}
          value={""}
          quantity={alldata.quantity}
        />
      );
    case "7":
    case "8":
      return (
        <EditBloodDonation
          bloodType={alldata.bloodtype}
          patientName={alldata.patientname}
        />
      );
    case "9":
    case "10":
      return (
        <EditClothes
          id={alldata.id}
          category={alldata.kind}
          gender={alldata.clothesgender}
          season={alldata.season}
          ageGroup={alldata.clothesage}
          material={alldata.material}
        />
      );
    case "11":
    case "12":
      return (
        <EditFood
          category={alldata.fcategory}
          quantity={alldata.fquantity}
          food={alldata.item}
        />
      );
    case "13":
    case "14":
      return (
        <EditStationary
          category={alldata.stcategory}
          supply={alldata.supply}
          quantity={alldata.stquantity}
        />
      );
    case "15":
    case "16":
      return (
        <EditToys
          id={alldata.id}
          ageGroup={alldata.toyage}
          gender={alldata.toygender}
          category={alldata.toycategory}
        />
      );
    case "17":
      return <EditMedication id={alldata.id} med={alldata.medcategory} />;

    default:
      return <></>;
  }
}

// @ts-ignore
const EditorLoader = async ({ params }) => {
  var { id } = params;
  const res = await fetch("http://localhost:4000/AllData/" + id);
  return res.json();
};
export { Editor, EditorLoader };
