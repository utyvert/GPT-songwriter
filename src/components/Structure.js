
import React, { useState } from 'react';
import { Button, ListGroup, Container } from 'react-bootstrap';

const Structure = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    if(items.length > 4) {
      alert("You can only have 5 sections.")
    } else {
      setItems([...items, item]);
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div className="Structure">
    <div className="Structure--container-and-list">
      <Container className='Structure--container'>
        <Button onClick={() => handleAddItem('Verse')}>Verse</Button>
        <Button onClick={() => handleAddItem('Chorus')}>Chorus</Button>
        <Button onClick={() => handleAddItem('Bridge')}>Bridge</Button>
        <Button variant="danger" onClick={handleClearAll}>Clear All</Button>
      </Container>

      <ListGroup horizontal className='Structure--list'>
        {items.map((item, index) => (
          <ListGroup.Item key={index}>
            {item}
            <Button
              onClick={() => handleRemoveItem(index)}
              variant="danger"
              size="sm"
              style={{ padding: "3px 7px 3px 7px", fontSize: "0.8rem" }}
            >
              x
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  </div>
  );
};


export default Structure;