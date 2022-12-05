import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';  



function Genre() {

  const [selectedOption, setSelectedOption] = useState("Genre");

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {selectedOption}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Rap" href="#">Rap</Dropdown.Item>
            <Dropdown.Item eventKey="Country" href="#">Country</Dropdown.Item>
            <Dropdown.Item eventKey="Pop" href="#">Pop</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Genre;