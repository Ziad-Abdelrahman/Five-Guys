import "./Categories.css";
import { Link } from "react-router-dom";
interface CategoryCardProps {
  image: string;
  title: string;
  forwardPath: string;
}
function CategoryCard(props: CategoryCardProps) {
  return (
    <div className="category-card">
      <Link to={props.forwardPath}>
        <img
          className="category-card-image"
          src={props.image}
          alt={props.title}
        ></img>
      </Link>
      <h3>{props.title}</h3>
    </div>
  );
}

export default CategoryCard;
