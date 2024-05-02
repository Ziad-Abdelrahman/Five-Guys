import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";
import DisabledDropDown from "../../components/DropDown/DisabledDropDown.tsx";
import hashSet from "../../hashSet";

function Food() {
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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFood, setSelectedFood] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedFood("");
  };

  return (
    <div>
      <div className="header-container">
        <h1>Food</h1>
      </div>
      <div className="rest-container" style={{ top: "10em" }}>
        <h4> What category of food do you need?</h4>
        <DropDown
          options={Object.keys(foodOptions)}
          selected={"Specify food category"}
          width={"280px"}
          onChange={handleCategoryChange}
        />
        <br />
        <br />
        <h4>What specific food do you need?</h4>
        <h6> (Please select a category first)</h6>
        {selectedCategory ? (
          <DropDown
            options={foodOptions[selectedCategory]}
            selected={selectedFood || "Select food"}
            width={"280px"}
            onChange={(food) => setSelectedFood(food)}
          />
        ) : (
          <DisabledDropDown selected={"Select food"} width={"280px"} />
        )}
        <br />
        <br />
        {selectedCategory === "Fruits" || selectedCategory === "Vegetables" ? (
          <>
            <h4> How much {selectedCategory.toLowerCase()} do you need?</h4>
            <NumberInputBox label={"Quantity (in KG)"} width={"280px"} />{" "}
          </>
        ) : (
          <>
            <h4> How much food do you need?</h4>
            <NumberInputBox label={"Quantity"} width={"280px"} />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Food;
