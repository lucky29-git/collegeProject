import React from 'react'
import  { useState } from 'react';


export default function MainPage() {

  const [showSections, setShowSections] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = () => {
    setShowSections(!showSections); // Toggle the visibility of sections
  };

  const handleSectionButtonClick = (section) => {
    setSelectedButton(section);
  };


  const renderSemesterButtons = () => {
    switch (selectedButton) {
      case 'Functional Button 1':
        return (
          <div>
            <button>Semester 1</button>
            &nbsp;&nbsp;
            <button>Semester 2</button>
          </div>
        );
      case 'Functional Button 2':
        return (
          <div>
            <button>Semester 3</button>
            &nbsp;&nbsp;
            <button>Semester 4</button>
          </div>
        );
      case 'Functional Button 3':
        return (
          <div>
            <button>Semester 5</button>
            &nbsp;&nbsp;
            <button>Semester 6</button>
          </div>
        );
      case 'Functional Button 4':
        return (
          <div>
            <button>Semester 7</button>
            &nbsp;&nbsp;
            <button>Semester 8</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ position: 'relative', top: '-15vh' }}>
      <h1>Previous Year Question Papers & Notes</h1>
      <p>Tackle your exam with previous year papers, notes and video lectures all in one place.</p>
      
      <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>CSE</button>

      {showSections && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ marginTop: '20px' }}>FIRST YEAR</h2>
              <p>Content for first year..</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 1')} style={{ cursor: 'pointer' }}>NOTES & PYQ</button>
          </div>

          {selectedButton === 'Functional Button 1' && renderSemesterButtons()}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2>SECOND YEAR</h2>
              <p>Content for second year...</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 2')} style={{ cursor: 'pointer' }}>NOTES & PYQ</button>
          </div>

          {selectedButton === 'Functional Button 2' && renderSemesterButtons()}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2>THIRD YEAR</h2>
              <p>Content for third year...</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 3')} style={{ cursor: 'pointer' }}>NOTES & PYQ</button>
          </div>

          {selectedButton === 'Functional Button 3' && renderSemesterButtons()}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2>FOURTH YEAR</h2>
              <p>Content for fourth year...</p>
            </div>
            <button onClick={() => handleSectionButtonClick('Functional Button 4')} style={{ cursor: 'pointer' }}>NOTES & PYQ</button>
          </div>

          {selectedButton === 'Functional Button 4' && renderSemesterButtons()}
        </div>
      )}
    </div>
  );


}
