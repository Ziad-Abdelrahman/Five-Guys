import "../../Donation Posts/Medication Webpages/Medication.css";
import EditRadioButton from "../../components/RadioButton/EditRadioButton.tsx";
import { useState } from "react";

interface EditMedicationProps {
  med: string;
}

function EditMedication({ med }: EditMedicationProps) {
  const [medication, setMedication] = useState(med);
  return (
    <div>
      <div className="header-container">
        <h1>Medications</h1>
      </div>
      <div className="rest-container" style={{ top: "18em" }}>
        <h4 style={{ marginBottom: "15px" }}>
          Please choose the category you need
        </h4>
        <form
          className="radioButtons-form"
          style={{ width: "800px" }}
          method="get"
        >
          <EditRadioButton
            text={"Analgesics"}
            checked={medication === "Analgesics"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Antibiotics"}
            checked={medication === "Antibiotics"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Anticoagulants"}
            checked={medication === "Anticoagulants"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Antidepressants"}
            checked={medication === "Antidepressants"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Antidiabetics"}
            checked={medication === "Antidiabetics"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Antiemetics"}
            checked={medication === "Antiemetics"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Antihistamines"}
            checked={medication === "Antihistamines"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Bronchodilators"}
            checked={medication === "Bronchodilators"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Diuretics"}
            checked={medication === "Diuretics"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Eye drops"}
            checked={medication === "Eye drops"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Laxatives"}
            checked={medication === "Laxatives"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Muscle relaxants"}
            checked={medication === "Muscle relaxants"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Topical medications"}
            checked={medication === "Topical medications"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"Vitamins"}
            checked={medication === "Vitamins"}
            setChecked={setMedication}
          />
          <EditRadioButton
            text={"First Aid Kit"}
            checked={medication === "First Aid Kit"}
            setChecked={setMedication}
          />
        </form>
      </div>
    </div>
  );
}

export default EditMedication;
