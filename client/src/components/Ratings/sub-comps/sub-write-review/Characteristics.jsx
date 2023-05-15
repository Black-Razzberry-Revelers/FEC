import React, { useState } from 'react';

function Characteristics({ metaData }) {
  const { characteristics } = metaData;
  const traits = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  return (
    <div className="characteristics">
      <fieldset>
        <legend>Please select a rating for each of the characteristics:</legend>
        {Object.entries(characteristics).map((entry) => (
          <div key={entry[0]} style={{ display: 'flex' }}>
            <label htmlFor={entry[0]}>{entry[0]}</label>
            {traits[entry[0]].map((rating, i) => (
              <div key={i + 1}>
                <p>{i + 1}</p>
                <input type="radio" id={entry[0]} name={entry[0]} value={i + 1} />
                <p>{rating}</p>
              </div>
            ))}
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default Characteristics;
