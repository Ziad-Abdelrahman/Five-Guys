import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";
import hashSet from "../../hashSet";
import Template1 from "../../components/Templates/Template1.tsx";

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
  const[quantity, setQuantity] = useState("");
  const [error, setError] = useState("");


  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedFood("");

  };

  const handlleQuantityChange = (num: string) => {
    setQuantity(num);
  };

  const handleClick = () => {
    if( selectedCategory.trim()===""|| selectedFood.trim()==="" || quantity.trim() ===""){
      setError("Please provide all the required information.");
      return false;
    }
    setError("");
    console.log("Form submitted successfully!");
    return true;
  }

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 1<h2> Creating your post!</h2>
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
            <DropDown
              options={selectedCategory ? foodOptions[selectedCategory] : []}
              selected={selectedFood || "Select food"}
              width={"280px"}
              onChange={(food) => setSelectedFood(food)}
              disabled={!selectedCategory}
              
            />
            {/* <br />
            <br /> */}
            {selectedCategory === "Fruits" ||
            selectedCategory === "Vegetables" ? (
              <>
                <h4> How much {selectedCategory.toLowerCase()} do you need?</h4>
                <NumberInputBox
                  label={"Quantity (in KG)"}
                  width={"280px"}
                  handleChange={handlleQuantityChange}
                />{" "}
              </>
            ) : (
              <>
                <h4> How much food do you need?</h4>
                <NumberInputBox label={"Quantity"} width={"280px"} handleChange={handlleQuantityChange}/>{" "}
                {error && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
            )}
              </>
            )}

          </div>
         
        </div>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../"}
      handleClick={handleClick}
    />
  );
}

export default Food;
