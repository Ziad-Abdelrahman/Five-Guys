import React, { useState } from 'react';
import close from "../../assets/close_icon.png";
import "./cards.css";
import "../../components/InfoPanel/InfoPanel.css";
import AdminButton from '../Buttons/AdminButton';
import jsPDF from 'jspdf';

interface OrganizationCardPanelProps {
  image: string;
  img_alt: string;
  title: string;
  text: string;
  height?: number;
  width?: number;
}

const OrganizationCardPanel: React.FC<OrganizationCardPanelProps> = ({
  image,
  img_alt,
  title,
  text,
  height,
  width,
}: OrganizationCardPanelProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleShowPanel = () => {
    setShowInfo(true); 
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF;
    doc.text("Organization Info:", 80, 10);
    doc.save("organization_Submission.pdf")
  };
  const handleOpenNewTab = () => {
    const content = 'Organization data should be viewed here:';
  
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
    if (window.confirm('Are you sure you want to reject this request?')) {
      setIsVisible(false);
    }
  };

  const handleDeleteClick2 = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (window.confirm('Are you sure you want to accept this request?')) {
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
              <h4>Organization Type: non-profit</h4>
              <h4>Organization Location: Egypt</h4>
              <h4>Organization Mission: {text}</h4>
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

export default OrganizationCardPanel;
