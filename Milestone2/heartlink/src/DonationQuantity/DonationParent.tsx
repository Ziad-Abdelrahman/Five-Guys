import './Donate.css'
import React, { useState} from "react";
import DonateButton from '../Buttons/DonateButton.tsx'
interface DonationQuantityProps{
    children:React.ReactNode;
}



function DonationParent({children}:DonationQuantityProps) {
    const minValue = 1;
    const maxValue = 220;
    const [rangeValue, setRangeValue] = useState(70); // You can set an initial value as needed

    // Handle changes in the range input
    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(parseInt(event.target.value));
    };
    const percentage = ((rangeValue - minValue) / (maxValue - minValue)) * 100;



    return (
        <div className="range-container">

            <div className="header">
                {children}
            </div>

            <div className='scroller-container'>
                <label htmlFor="customRange1" className="form-label">Specify The Quantity</label>
                <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    min={minValue} // Set minimum range value
                    max={maxValue} // Set maximum range value
                />
                <div className="value-display">
                    <p>{rangeValue}</p>
                    <p>({percentage.toFixed(0)}%)</p>
                </div>  {/* Display the current value and percentage in a box */}  {/* Display the current value in a box */}
            </div>
            <div className='button-container'>
                <DonateButton/>
            </div>

        </div>
    );
}

export default DonationParent;
