
import React, { useState } from 'react';
import { Button, ListGroup, Container } from 'react-bootstrap';

const Structure = (props) => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    if(props.items.length >= 5) {
      alert("You can only have 5 sections.")
    } else {
      // setItems([...items, item]);
      const newItems = [...props.items, item]
      props.updateItems(newItems)
    }
  };



  const handleRemoveItem = (index) => {
    const newItems = [...props.items];
    newItems.splice(index, 1);
    props.updateItems(newItems)

  };

  const handleClearAll = () => {
    console.log(props.items)
    props.updateItems([])
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
        {props.items.map((item, index) => (
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