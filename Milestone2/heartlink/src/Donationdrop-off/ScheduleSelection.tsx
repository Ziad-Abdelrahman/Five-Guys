import React, { useState } from 'react';
import DropDown from '../components/DropDown/DropDown';


const ScheduleSelection: React.FC = () => {
    const [selectedSlot, setSelectedSlot] = useState<string>("");
  
    
    const timeSlots: string[] = [
      '9:00 AM - 11:00 AM',
      '11:00 AM - 1:00 PM',
      '2:00 PM - 4:00 PM',
      '4:00 PM - 6:00 PM',
      '6:00 PM - 8:00 PM'
    ];
  
    const handleSlotSelection = (slot: string) => {
      setSelectedSlot(slot);
    };
  
    return (
      <div>
        
        <h2>Schedule Selection for Donation Drop-off</h2>
        <p>Select a time slot :</p>
        <DropDown options={timeSlots} selected={selectedSlot} width="200px" onChange={handleSlotSelection} />
        {selectedSlot && (
          <p>Selected time slot: {selectedSlot}</p>
        )}
      </div>
    );
  };
  
  export default ScheduleSelection;

