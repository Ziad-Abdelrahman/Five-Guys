import { useState } from "react";
import ViewCards from "../../components/Card/Admin Cards/ViewCards.tsx";
import Org1 from "../../assets/57357.jpeg";
import Org2 from "../../assets/EgyptianFoodBank.png";
import Org3 from "../../assets/Misrelkheir.jpeg";
import Org4 from "../../assets/Orman.png";
import Org5 from "../../assets/Resala.png";
import Org6 from "../../assets/Turin.jpg";
import Org7 from "../../assets/MagdyYakoub.png";
import Org8 from "../../assets/Redcrescent.png";
import Org9 from "../../assets/baheya.png";
import "./DeleteOrganizations.css";
import "../../components/Search/searchbar.css";
import Search from "../../components/Search/Search.tsx";
import OrganizationFilter from "../../components/DonorFilterCard/OrganizationFilter.tsx";
import HeaderOfSection from "../../components/Header/HeaderOfSection.tsx";
import ViewPopup from "../../components/View Request Popup/ViewPopup.tsx";

interface DeleteOrganizationsProps {
  hideDelete?: boolean;
  title: string;
  children: React.ReactNode;
}

function DeleteOrganizations({
  hideDelete = false,
  title,
  children,
}: DeleteOrganizationsProps) {
  const cardData = [
    {
      id: "1",
      image: Org1,
      img_alt: "57357 logo",
      title: "57357",
      text: "To Be the Unique Worldwide Icon of Change Towards a Cancer‐ Free Childhood",
      type: "Cancer Institute",
      city: "Cairo",
      area: "El Saida Zeinab",
      established: "2007",
      contact: "19057",
      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=57357&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
    {
      id: "2",
      image: Org2,
      img_alt: "Egyptian Food Bank logo",
      title: "Egyptian Food Bank",
      text: "Food is the basis of life",
      type: "Food Charity",
      city: "Zagazig",
      Area: "Third District",
      established: "2006",
      contact: "16060",

      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=44%20Gamal%20Abd%20Al%20Naser%20Axis%20,%20New%20Cairo%203%20,%20Cairo%20Governorate%204713311+(Egyptian%20Food%20Bank)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
    {
      id: "3",
      image: Org3,
      img_alt: "Misr elkheir logo",
      title: "Misr elkheir",
      text: "Misr El Kheir aims to develop the Egyptian individual in a comprehensive manner.",
      type: "Human Development",
      city: "Alexandria",
      area: "Miami",
      established: "2007",
      contact: "16140",
      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Atef%20Madkour%20Street%20,%20Al%20Abageyah%20,%20El%20Khalifa%20,%20Cairo%20Governorate%204411164+(Egyptian%20Clothing%20Bank)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
    {
      id: "4",
      image: Org4,
      img_alt: "Orman logo",
      title: "Orman",
      text: "Providing qualitative, non-traditional charitable services aimed, within a specific period of time.",
      type: "Human Development",
      city: "Cairo",
      area: "Giza",
      established: "2007",
      contact: "19057",

      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=57357&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
    {
      id: "5",
      image: Org5,
      img_alt: "Resala logo",
      title: "Resala",
      text: "Spreading volunteerism and positivity in society, and cultivate belonging.",
      type: "Humanitarian Aid",
      city: "Cairo",
      Area: "10th of Ramadan",
      established: "1999",
      contact: "19455",
      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2%20Zaki%20Rostom%20,%20Al%20Mintaqah%20as%20Sadisah%20,%20Nasr%20City,%20Cairo%20,4450321+(Resala%20Organization%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
    {
      id: "6",
      image: Org6,
      img_alt: "Turin logo",
      title: "Turin",
      text: "Turin is a non-profit organization that aims to provide a decent life for the poor and needy.",
      type: "Human Development",
      city: "Giza",
      area: "Sheikh Zayed",
      established: "2018",
      contact: "17057",
      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=57357&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
    {
      id: "7",
      image: Org7,
      img_alt: "MagdyYakoub",
      title: "Magdy Yakoub",
      text: "Magdy Yakoub is a non-profit organization that aims to provide a decent life for the poor and needy.",
      type: "Heart Diseases Institute",
      city: "Cairo",
      area: "Zamalek",
      established: "2008",
      contact: "19731",

      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=St.%20off%20,%207%20Aziz%20Abaza%20,%2026%20July%20St%20,%20Zamalek%20,%20Cairo%20Governorate+(Magdi%20Yacoub%20Foundation)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
    {
      id: "8",
      image: Org8,
      img_alt: "Red Cresent",
      title: "Red Cresent",
      text: "Red Cresent is a non-profit organization that aims to provide a decent life for the poor and needy.",
      type: "Global Humanitarian Network",
      city: "Cairo",
      area: "Nasr City",
      established: "1911",
      contact: "11371",
      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Abd%20El%20Razak%20El%20Sanhouri%20St.%20,%20Nasr%20city%20,%20Cairo%20,11371+(Egyptian%20Red%20Crescent)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },

    {
      id: "9",
      image: Org9,
      img_alt: "Baheya",
      title: "Baheya",
      text: "Baheya  Foundation is breaking down the barriers by providing early detection and treatment services for breast cancer",
      type: "Breast Cancer Institute",
      city: "Cairo",
      area: "El Haram",
      established: "2017",
      contact: "16602",
      iframe: (
        <iframe
          width="230"
          height="180"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4%20Alouba%20Street%20,%20Off%20Haram%20Street%20,%20Giza%20Egypt+(Baheya%20Foundation)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Children Cancer Hospital Location"
        />
      ),
    },
  ];

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [selectedID, setSelectedID] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  //responsible for closing the popup
  function handleClosePopUp() {
    setSelectedID("");
  }

  function handleType(chosenType: string) {
    chosenType === "Type" ? setType("") : setType(chosenType);
  }
  function handleCity(chosenCity: string) {
    chosenCity === "Government" ? setCity("") : setCity(chosenCity);
  }
  function handleArea(chosenArea: string) {
    chosenArea === "Area" ? setArea("") : setArea(chosenArea);
  }

  const handleSearch = (written: string) => {
    setSearch(written);
  };

  return (
    <>
      {children}
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
        <div>
          {cardData
            .filter((cardData) => cardData.id === selectedID)
            .map((cardData) => (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "240px" }}>
                  <ul>
                    <li>Category: {cardData.type}</li>
                    <br />
                    <li>City: {cardData.city}</li>
                    <br />
                    <li>Area: {cardData.area}</li>
                    <br />
                    <li>Established: {cardData.established}</li>
                    <br />
                    <li>Hotline: {cardData.contact}</li>
                  </ul>
                </div>
                {cardData.iframe}
              </div>
            ))}
        </div>
      </ViewPopup>
      <HeaderOfSection
        title={title}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        style={{ marginLeft: "10em", width: "80%" }}
      >
        <Search handleSearch={handleSearch} />
      </HeaderOfSection>
      <OrganizationFilter
        handleTyoeFilter={handleType}
        handleGovernmentFilter={handleCity}
        handleAreaFilter={handleArea}
      />
      <div className={"admin-organizations-container"}>
        {cardData
          .filter(
            (cardData) =>
              cardData.title.toLowerCase().includes(search.toLowerCase()) &&
              (type === "" || type === cardData.type) &&
              (city === "" || city === cardData.city) &&
              (area === "" || area === cardData.area),
          )
          .map((cardData) => (
            <ViewCards
              id={cardData.id}
              image={cardData.image}
              img_alt={cardData.img_alt}
              title={cardData.title}
              text={cardData.text}
              height={"400px"}
              handleLearnMoreClick={handleLearnMoreClick}
              hideDelete={hideDelete}
            />
          ))}
      </div>
    </>
  );
}

export default DeleteOrganizations;
