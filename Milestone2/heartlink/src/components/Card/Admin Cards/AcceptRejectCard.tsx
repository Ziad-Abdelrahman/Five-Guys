import './cards.css';
import AdminButton from '../Buttons/AdminButton';
import { useState } from 'react';
interface AcceptRejectCard{
  image: string;
  img_alt: string;
  title: string;
  text: string;
  height?: number;
  width?: number; 
}
function AcceptRejectCard({image, img_alt, title, text, height, width }: AcceptRejectCard) {
  const [isVisible, setIsVisible] = useState(true);
    const handleDeleteClick1 = () => {
      if (window.confirm('Are you sure you want to reject this request?')) {
        setIsVisible(false);
      }
    };
    const handleDeleteClick2 = () => {
      if (window.confirm('Are you sure you want to accept this request?')) {
        setIsVisible(false);
      }
    };
    const cardStyle = {
      width: width ? `${width}px` : 'auto',
      height: height ? `${height}px` : 'auto'
    };
  
  return (
    isVisible ? (
      <div className='card' style={cardStyle}>
      <img className='logo' src={image} alt={img_alt} />
      <h2 className='title'>{title}</h2>
      <p className='text'>{text}</p>
      <div className='buttonContainer'>
      <div className='accept' onClick={handleDeleteClick2}>
        <AdminButton text='Accept'/>
      </div>
      <div className="reject" onClick={handleDeleteClick1}>
        <AdminButton text='Reject' />
      </div>
      </div>
    </div>
    ) : null
  );
}

export default AcceptRejectCard;
