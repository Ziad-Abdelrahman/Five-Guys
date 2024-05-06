import Pic from "../../assets/profilepic.jpg";
import '../AdminStyles.css';
import DonorCardPanel from "../../components/Card/Admin Cards/DonorCardPanel";
import Headerofsection from "../../components/Header/HeaderOfSection";

const DonorSubmission = () => {
  const cardData = [
    {
      id: "1",
      image: Pic,
      img_alt: 'profile picture',
      title: 'Robert Moore',
      gender: 'Male',
      text: 'Regular Donor',
      phoneNumber: '+1234567890',
      address: '123 Main St',
      area: 'Downtown',
      Governorate: 'City'
    },
    {
      id: "2",
      image: Pic,
      img_alt: 'profile picture',
      title: 'Jenna Clark',
      gender: 'Female',
      text: 'Teacher',
      phoneNumber: '+1987654321',
      address: '456 Elm St',
      area: 'Suburb',
      Governorate: 'Town'
    },
    {
      id: "3",
      image: Pic,
      img_alt: 'profile picture',
      title: 'Amanda Anderson',
      gender: 'Female',
      text: 'Doctor',
      phoneNumber: '+1122334455',
      address: '789 Oak St',
      area: 'Rural',
      Governorate: 'County'
    },
    {
      id: "4",
      image: Pic,
      img_alt: 'profile picture',
      title: 'Andrew Taylor',
      gender: 'Male',
      text: 'Teacher',
      phoneNumber: '+1567890123',
      address: '321 Pine St',
      area: 'Urban',
      Governorate: 'City'
    },
    {
      id: "5",
      image: Pic,
      img_alt: 'profile picture',
      title: 'Nicole White',
      gender: 'Female',
      text: 'Regular Donor',
      phoneNumber: '+1777888999',
      address: '567 Maple St',
      area: 'Town',
      Governorate: 'District'
    }
  ];
  return (
    <div>
      <div>
      <Headerofsection
        title={"Donor Submissions"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        style={{ marginLeft: "10em", width: "80%" }}
      />     
      </div>
      <div className="cards">
        {cardData.map((card) => (
          <DonorCardPanel 
          key={card.id}
          image={card.image}
          img_alt={card.img_alt}
          title={card.title}
          text={card.text}
          gender={card.gender}
          phoneNumber={card.phoneNumber}
          address={card.address}
          area={card.area}
          Governorate={card.Governorate}
          width={1000}
          height={350}
          />

        ))}
      </div>
    </div>
  )
}

export default DonorSubmission
