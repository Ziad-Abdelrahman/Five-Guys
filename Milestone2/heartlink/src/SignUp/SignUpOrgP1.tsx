import DropDown from "../components/DropDown/DropDown.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import Button from "../components/Buttons/Button.tsx";
import BackButton from "../components/Buttons/BackButton.tsx";
import logo from "../assets/minilogo.png";
import "./SignUp.css";
import hashSet from "../hashSet";
import { useState } from "react";
import { Link } from "react-router-dom";

const Alexandria = [
  "Amreya 1",
  "Amreya 2",
  "Ataren",
  "Bab Sharqi",
  "Borg El Arab",
  "Dekhela",
  "El Raml 1",
  "El Raml 2",
  "Gomrok",
  "Karmouz",
  "Labban",
  "Mansheya",
  "Mohram Bek",
  "Montaza 1",
  "Montaza 2",
  "New Borg El Arab",
  "North Coast",
  "Port al-Basal",
  "Sidi Gaber",
];
const Aswan = [
  "Abu Simbel",
  "Aswan",
  "Aswan 1",
  "Aswan 2",
  "Daraw",
  "Edfu",
  "Kom Ombo",
  "New Aswan",
  "New Tushka",
  "Nasr",
];
const Asyut = [
  "Abnub",
  "Abu Tig",
  "Asyut",
  "Asyut 1",
  "Asyut 2",
  "Dairut",
  "El Badari",
  "El Fateh",
  "El Ghanayem",
  "El Qusiya",
  "Manfalut",
  "New Asyut",
  "Sahel Selim",
  "Sidfa",
];
const Beheira = [
  "Abu al-Matamir",
  "Abu Hummus",
  "Badr",
  "Damanhour",
  "Edku",
  "El Delengat",
  "Hosh Essa",
  "Itay El Barud",
  "Kafr El Dawwar",
  "Kom Hamada",
  "Mahmoudiyah",
  "Natrn Valley",
  "Rahmaniya",
  "Rosetta",
  "Shubrakhit",
  "West Nubariyah",
];
const BeniSuef = [
  "Beni Suef",
  "Biba",
  "El Fashn",
  "El Wasta",
  "Ihnasiya",
  "Nasser",
  "New Beni Suef",
  "Sumusta El Waqf",
];
const Cairo = [
  "1st Settlement",
  "5th Settlement",
  "15 May City",
  "Abdeen",
  "Ain Shams",
  "Al Qatamia",
  "Amreya",
  "Azbakeya",
  "Bab El Sharia",
  "Badr City",
  "Bulaq",
  "Dar El Salam",
  "El Basatin",
  "El Darb El Ahmar",
  "El Gamaliya",
  "El Khalifa",
  "El Marg",
  "El Masara",
  "El Matareya",
  "El Mokattam",
  "El Muski",
  "El Nozha",
  "El Sahel",
  "El Salam 1",
  "El Salam 2",
  "El Sayeda Zeinab",
  "El Sharabiya",
  "El Shorouk",
  "El Tebbin",
  "El Weili",
  "El Zaher",
  "El Zawya El Hamra",
  "Hadayek El Qobbah",
  "Heliopolis",
  "Helwan",
  "Maadi",
  "Manshiyat Naser",
  "Nasr City 1",
  "Nasr City 2",
  "New Cairo 1",
  "New Cairo 2",
  "New Cairo 3",
  "Old Cairo (Fustat)",
  "Qasr El Nil",
  "Rod El Farag",
  "Shubra",
  "Tura",
  "Zamalek",
  "Zeitoun",
];
const Dakahlia = [
  "Aga",
  "Belqas",
  "Beni Ebeid",
  "Dikirnis",
  "El Gamaliya",
  "El Kurdi",
  "El Mansoura",
  "El Mansoura 1",
  "El Mansoura 2",
  "El Manzala",
  "El Matareya",
  "El Senbellawein",
  "Gamasa",
  "Maḥallat Damanah",
  "Minyet El Nasr",
  "Mit Ghamr",
  "Mit Ghamr",
  "Mit Salsil",
  "Nabaroh",
  "Shirbin",
  "Talkha",
  "Timay El Imdid",
];
const Damietta = [
  "Al Sarw",
  "Damietta",
  "Damietta 1",
  "Damietta 2",
  "El Zarqa",
  "Faraskur",
  "Kafr El Battikh",
  "Kafr Saad",
  "New Damietta",
  "Ras El Bar",
];
const Faiyum = [
  "Al Shawashna",
  "Faiyum",
  "Faiyum 1",
  "Faiyum 2",
  "Ibsheway",
  "Itsa",
  "New Faiyum",
  "Sinnuris",
  "Tamiya",
  "Yousef El Seddik",
];
const Gharbia = [
  "Basyoun",
  "El Mahalla El Kubra",
  "El Mahalla El Kubra 1",
  "El Mahalla El Kubra 2",
  "El Mahalla El Kubra 3",
  "El Sunta",
  "Kafr El Zayat",
  "Kotoor",
  "Samanoud",
  "Tanta",
  "Tanta 1",
  "Tanta 2",
  "Zefta",
];
const Giza = [
  "6th of October City",
  "Abu El Namras",
  "Agouza",
  "Atfeh",
  "Bulaq El Dakrour",
  "Dokki",
  "El Ayyat",
  "El Badrashein",
  "El Hawamdeya",
  "El Omraniya",
  "El Saff",
  "El Wahat El Bahariya",
  "El Warraq",
  "Giza",
  "Imbaba",
  "Imbaba",
  "Kerdasa",
  "Ossim",
  "Pyramids",
  "Sheikh Zayed City",
  "Talbia",
];
const Ismailia = [
  "Abu Suwir",
  "El Qantara El Sharqiya",
  "El Qantara West",
  "Fayid",
  "Ismailia",
  "Ismailia 1",
  "Ismailia 2",
  "Ismailia 3",
  "New Kasaseen",
  "Tell El Kebir",
];
const KafrElSheikh = [
  "Bila",
  "Burullus",
  "Desouk",
  "El Hamool",
  "El Reyad",
  "Fuwa",
  "Kafr el Sheikh",
  "Kafr el Sheikh 1",
  "Kafr el Sheikh 2",
  "Metoubes",
  "Qallin",
  "Sidi Salem",
];
const Luxor = ["Armant", "Esna", "Luxor", "Luxor", "Qurna", "Thebes"];

const Matruh = [
  "El Alamein",
  "El Dabaa",
  "El Hamam",
  "El Negaila",
  "Mersa Matruh",
  "North Coast",
  "Sallum",
  "Sidi Barrani",
  "Siwa Oasis",
];

const Minya = [
  "Abu Qirqas",
  "Beni Mazar",
  "Deir Mawas",
  "El Idwa",
  "Maghagha",
  "Mallawi",
  "Matai",
  "Minya",
  "Minya 1",
  "Minya 2",
  "Minya 3",
  "New Minya",
  "Samalut East",
  "Samalut West",
];
const Monufia = [
  "Ashmoun",
  "Birket el Sab",
  "El Bagour",
  "El Shohada",
  "Menouf",
  "Menouf",
  "Quweisna",
  "Sadat City",
  "Sers El Lyan",
  "Shibin el Kom",
  "Shibin el Kom",
  "Tala",
];
const NewValley = ["Balat", "Baris", "Dakhla", "Farafra", "Kharga"];

const NorthSinai = [
  "Bir El Abd",
  "El Arish 1",
  "El Arish 2",
  "El Arish 3",
  "El Arish 4",
  "El Hassana",
  "Nakhl",
  "Rafah",
  "Sheikh Zuweid",
  "Shurtet El Qasima",
  "Shurtet Rumana",
];

const PortSaid = [
  "Al Arab",
  "Al Dawahi",
  "Al Janoub",
  "Al Janoub 2",
  "Al Manakh",
  "Al Manasra",
  "Al Sharq",
  "Al Zohur",
  "Mubarak East",
  "Port Fuad",
  "Port Fuad 2",
];

const Qalyubia = [
  "Banha",
  "Banha 1",
  "Banha 2",
  "El Qanater El Khayreya",
  "El Ubour",
  "Kafr Shukr[8]",
  "Khanka",
  "Khanka",
  "Khusus",
  "Qaha",
  "Qalyub",
  "Qalyub",
  "Shibin El Qanater",
  "Shubra El Kheima 1",
  "Shubra El Kheima 2",
  "Tukh",
];
const Qena = [
  "Abu Tesht",
  "Dishna",
  "El Waqf",
  "Farshut",
  "Nag Hammadi",
  "Naqada",
  "New Qena",
  "Qena",
  "Qena",
  "Qift",
  "Qus",
];
const redSea = [
  "El Qusair",
  "Halaib",
  "Hurghada 1",
  "Hurghada 2",
  "Marsa Alam",
  "Ras Gharib",
  "Safaga",
  "Shalateen",
];
const Sharqia = [
  "10th of Ramadan City 1",
  "10th of Ramadan City 2",
  "Abu Hammad",
  "Abu Kebir",
  "Awlad Saqr",
  "Bilbeis",
  "Diyarb Negm",
  "El Husseiniya",
  "El Ibrahimiya",
  "El Qanayat",
  "El Qurein",
  "Faqous",
  "Hihya",
  "Kafr Saqr",
  "Mashtool El Souk",
  "Minshat Abu Omar",
  "Minya El Qamh",
  "New Salhia",
  "Tanis",
  "Zagazig",
  "Zagazig 1",
  "Zagazig 2",
];
const Sohag = [
  "Akhmim",
  "Aserat",
  "Dar El Salam",
  "El Balyana",
  "El Kawthar",
  "El Maragha",
  "El Munsha",
  "Girga",
  "Juhaynah West",
  "New Akhmim",
  "New Sohag",
  "Saqultah",
  "Sohag",
  "Sohag 1",
  "Sohag 2",
  "Tahta",
  "Tima",
];
const SouthSinai = [
  "Abu Redis",
  "Dahab",
  "El Tor",
  "Nuweiba",
  "Ras Sedr",
  "Saint Catherine",
  "Sharm El Sheikh 1",
  "Sharm El Sheikh 2",
  "Taba",
];
const Suez = ["Arbaeen", "Attaka", "Faisal", "Ganayen", "Suez"];
function SignUpOrgP1() {
  const areaOptions: hashSet = {
    Alexandria: Alexandria,
    Aswan: Aswan,
    Asyut: Asyut,
    Beheira: Beheira,
    "Beni Suef": BeniSuef,
    Cairo: Cairo,
    Dakahlia: Dakahlia,
    Damietta: Damietta,
    Faiyum: Faiyum,
    Gharbia: Gharbia,
    Giza: Giza,
    Ismailia: Ismailia,
    "Kafr El Sheikh": KafrElSheikh,
    Luxor: Luxor,
    Matruh: Matruh,
    Minya: Minya,
    Monufia: Monufia,
    "New Valley": NewValley,
    "North Sinai": NorthSinai,
    "Port Said": PortSaid,
    Qalyubia: Qalyubia,
    Qena: Qena,
    "Red Sea": redSea,
    Sharqia: Sharqia,
    Sohag: Sohag,
    "South Sinai": SouthSinai,
    Suez: Suez,
  };
  const [selectedGov, setSelectedGov] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleGovChange = (Gov: string) => {
    setSelectedGov(Gov);
    setSelectedArea("");
  };

  return (
    <>
      <div className="signUpMain" style={{ flexDirection: "row-reverse" }}>
        <div className="rightPartSignupB">
          <div className="logo-containerx">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="rightText">
            <p className="leftTextProgress"> 2 of 3 </p>
            <h2 className="leftTextFirst">Sign up as an Organization!</h2>
            <p className="leftTextSecond"> Only few steps ahead .. </p>
          </div>
        </div>

        <div className="rightPanelSignUpAB">
          <div className="rightPanel-containerS">
            <h2 style={{ position: "relative", bottom: "5%" }}>
              Provide us with your organization details
            </h2>
            <div className="dataHolderJJ">
              <div style={{ marginBottom: "3%" }}>
                <DropDown
                  options={[
                    "Charity",
                    "Hospital",
                    "Orphanage",
                    "School",
                    "Mosque",
                    "Church",
                  ]}
                  selected={"Specify Organization type"}
                  width={"430px"}
                />
              </div>
              <InputBox
                type={"text"}
                label={"Organization Name"}
                width={"430px"}
              />
              <div className="twoInputHolderS">
                <DropDown
                  options={Object.keys(areaOptions)}
                  selected={"Governorate"}
                  width={"200px"}
                  onChange={handleGovChange}
                />
                <DropDown
                  options={selectedGov ? areaOptions[selectedGov] : []}
                  selected={selectedArea || "Select Area"}
                  width={"200px"}
                  onChange={(area) => setSelectedArea(area)}
                  disabled={!selectedGov}
                />
              </div>
              <InputBox
                type={"text"}
                label={"Organization Address (Street Name,Home Number)"}
                width={"430px"}
              />
            </div>
          </div>
          <div className="footerSignUp">
            <div className="footerButtons-containerSignUpA">
              <Link to="../Organization/2">
                <Button text={"Next"} />
              </Link>
              <Link to="../" className="whyLink">
                <BackButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpOrgP1;
