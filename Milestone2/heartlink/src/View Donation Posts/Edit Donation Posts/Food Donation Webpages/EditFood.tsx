import { useState } from "react";
import hashSet from "../../../hashSet";
import EditDropDown from "../../../components/DropDown/EditDropDown.tsx";
import EditNumberInputBox from "../../../components/InputBox/EditNumberInputBox.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";

interface FoodProps {
  category: string;
  food: string;
  quantity: string;
}

function EditFood(props: FoodProps) {
  const foodOptions: hashSet = {
    Bakery: ["Bagels", "Bread", "Croissants", "Muffins", "Pastries"],
    Beverages: ["Coffee", "Juice", "Soda", "Tea", "Water"],
    "Canned Goods": ["Beans", "Soup", "Tomatoes", "Tuna", "Vegetables"],
    Dairy: ["Butter", "Cheese", "Eggs", "Milk", "Yogurt"],
    "Frozen Foods": [
      "Frozen Pizza",
      "Ice Cream",
      "Frozen Vegetables",
      "Frozen Meals",
      "Frozen Desserts",
    ],
    Fruits: ["Apples", "Bananas", "Grapes", "Oranges", "Strawberries"],
    Grains: ["Bread", "Cereal", "Pasta", "Quinoa", "Rice"],
    Meat: ["Beef", "Chicken", "Pork", "Turkey", "Veal"],
    Produce: ["Carrots", "Lettuce", "Onions", "Potatoes", "Tomatoes"],
    Seafood: ["Salmon", "Shrimp", "Tilapia", "Tuna", "Sardines"],
    Snacks: ["Chips", "Cookies", "Nuts", "Popcorn", "Pretzels"],
    Spices: ["Basil", "Cinnamon", "Garlic Powder", "Oregano", "Paprika"],
    Vegetables: ["Broccoli", "Carrots", "Spinach", "Tomatoes", "Zucchini"],
  };

  const [selectedCategory, setSelectedCategory] = useState(props.category);
  const [quantity, setQuantity] = useState(props.quantity);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <div>
          <div className="header-container">
            <h1>Food</h1>
          </div>
          <div className="rest-container" style={{ top: "10em" }}>
            <h4> What category of food do you need?</h4>
            <EditDropDown
              options={Object.keys(foodOptions)}
              selected={selectedCategory}
              width={"280px"}
              onChange={handleCategoryChange}
            />
            <br />
            <br />
            <h4>What specific food do you need?</h4>
            <h6> (Please select a category first)</h6>
            <EditDropDown
              options={foodOptions[selectedCategory]}
              selected={props.food}
              width={"280px"}
            />
            <br />
            <br />
            {selectedCategory === "Fruits" ||
            selectedCategory === "Vegetables" ? (
              <>
                <h4> How much {selectedCategory.toLowerCase()} do you need?</h4>
                <EditNumberInputBox
                  label={"Quantity (in KG)"}
                  width={"280px"}
                  text={quantity}
                  hasText={quantity !== ""}
                  setChecked={setQuantity}
                />{" "}
              </>
            ) : (
              <>
                <h4> How much food do you need?</h4>
                <EditNumberInputBox
                  label={"Quantity"}
                  width={"280px"}
                  text={quantity}
                  setChecked={setQuantity}
                  hasText={quantity !== ""}
                />{" "}
              </>
            )}
          </div>
        </div>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../../ViewPosts"}
    />
  );
}

export default EditFood;
