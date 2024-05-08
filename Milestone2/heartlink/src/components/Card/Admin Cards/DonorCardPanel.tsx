import React, { useState } from 'react';
import "./cards.css";
import AdminButton from '../../Buttons/AdminButton';
import jsPDF from 'jspdf';
import close from "../../../assets/close_icon.png";
import "./InfoPanel.css"

interface DonorCardPanelProps {
  image: string;
  img_alt: string;
  title: string;
  gender: String;
  text: string;
  phoneNumber: String;
  address: String; 
  area: String;
  Governorate: String; 
  height?: number;
  width?: number;
}

const DonorCardPanel: React.FC<DonorCardPanelProps> = ({
  image,
  img_alt,
  title,
  text,
  gender,
  phoneNumber,
  address,
  area,
  Governorate,
  height,
  width,
}: DonorCardPanelProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleShowPanel = () => {
    setShowInfo(true); 
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF;
    doc.text("Donor Info:", 80, 10);
    doc.save("Donor_Submission.pdf")
  };
  

  const handleOpenNewTab = () => {
    const content = 'Donor data should be viewed here:';
  
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Tab</title>
      </head>
      <body>
        <div style="text-align: center; padding: 50px;">
          <h1>${content}</h1>
        </div>
      </body>
      </html>
    `;
  
    const newTab = window.open('', '_blank');
    if (newTab) {
      newTab.document.open();
      newTab.document.write(htmlContent);
      newTab.document.close();
    } else {
      alert('Failed to open new tab. Please check your browser settings.');
    }
  };

  const handleDeleteClick1 = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (window.confirm('Are you sure you want to reject this submission?')) {
      setIsVisible(false);
    }
  };

  const handleDeleteClick2 = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (window.confirm('Are you sure you want to accept this submission?')) {
      setIsVisible(false);
    }
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
          <div className='buttonContainer'>
            <div className='accept' onClick={handleDeleteClick2}>
              <AdminButton text='Accept'/>            
            </div>
            <div className='reject' onClick={handleDeleteClick1}>
              <AdminButton text='Reject'/>            
            </div>
          </div>
        </div>
      )}

      {showInfo && (
        <div className='panel'>
          <div className='innerPanel'>
            <div className='close' onClick={() => setShowInfo(false)}>
              <img src={close} alt="close" className='close'/>
            </div>
            <div className='info'>
              <h2>{title}</h2>
              <h4>Donor Type: {text}</h4>
              <h4>Donor Gender: {gender}</h4>
              <h4>Phone Number: {phoneNumber}</h4>
              <h4>Address: {address}</h4>
              <h4>Area: {area}</h4>
              <h4>Governorate: {Governorate}</h4>
            </div>
            <div className='buttons'>
              <button onClick={handleDownloadPDF}>Download PDF</button>
              <button onClick={handleOpenNewTab}>View info</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonorCardPanel;
