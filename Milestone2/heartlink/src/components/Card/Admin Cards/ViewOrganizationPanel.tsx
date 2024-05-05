import React, { useState } from 'react';
import close from "../../assets/close_icon.png";
import "./cards.css";
import "../../components/InfoPanel/InfoPanel.css";


interface ViewOrganizationPanelProps {
  image: string;
  img_alt: string;
  title: string;
  text: string;
  height?: number;
  width?: number;
  phoneNumber: String;
  address: String; 
  email: String; 

}

const ViewOrganizationPanel: React.FC<ViewOrganizationPanelProps> = ({
  image,
  img_alt,
  title,
  text,
  phoneNumber,
  address,
  email,
  height,
  width,
}: ViewOrganizationPanelProps) => {
  const isVisible = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleShowPanel = () => {
    setShowInfo(true); 
  };


  const cardStyle = {
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
  };
  

  return (
    <>
      {isVisible && (
        <div className='card' style={cardStyle} onClick={handleShowPanel}>
          <img className='logo' src={image} alt={img_alt} />
          <h2 className='title'>{title}</h2>
          <p className='text'>{text}</p>
        </div>
      )}

      {showInfo && (
        <div className='panel'>
          <div className='innerPanel'>
            <div className='close' onClick={() => setShowInfo(false)}>
              <img src={close} alt="close" className='close'/>
            </div>
            <div className='info'>
              <h2>{title}:</h2>
              <h4>Organization Type:{text}</h4>
              <h4>Phone Number: {phoneNumber}</h4>
              <h4>Email: {email}</h4>
              <h4>Addres: {address}</h4>
              <div>
                
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default ViewOrganizationPanel;
