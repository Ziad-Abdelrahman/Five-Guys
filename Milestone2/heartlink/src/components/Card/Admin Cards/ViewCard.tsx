import './cards.css';

interface ViewCardsProps {
  image: string;
  img_alt: string;
  title: string;
  text: string;
  height?: number;
  width?: number; 
}

function ViewCards({ image, img_alt, title, text, height, width }: ViewCardsProps) {
  const cardStyle = {
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto'
  };

  return (
    
      <div className='card' style={cardStyle}>
        <img className='logo' src={image} alt={img_alt} />
        <h2 className='title'>{title}</h2>
        <p className='text'>{text}</p>
      </div>
  );
}

export default ViewCards;
