import './Categories.css'
interface CategoryCardProps {
    image: string;
    title: string;

}
function CategoryCard(props:CategoryCardProps){

    return (
        <div className="card">
            <img  className="category-card-image" src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
        </div>
    );

}

export default CategoryCard;



