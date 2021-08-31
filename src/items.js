  
import React from 'react';
import Item from './item';

const Items = ({items, removeitem}) => {
    // {items} => destructuring of prop
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {items.map((tour) => {
          return <Item key={tour.id} {...tour} removeitem={removeitem}/>;
        })}
      </div>
    </section>

  );
};

export default Items;