import { useState } from 'react';
import AdminButton from '../../Buttons/AdminButton';
import './cards.css';

interface AccountCardsProps {
  image: string;
  img_alt: string;
  title: string;
  text: string;
  height?: number;
  width?: number; 
}

function AccountCards({ image, img_alt, title, text, height, width }: AccountCardsProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this account?')) {
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
        <div className='deleteContainer'>
          <div className='delete' onClick={handleDeleteClick}>
            <AdminButton text='Delete'/>
          </div>
        </div>
      </div>
    ) : null
  );
}

export default AccountCards;
