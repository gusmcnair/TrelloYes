import React from 'react';
import './list.css'
import Card from './card.js';


function List(props) {
    console.log(props)
    const cardInstance = (props.card);
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {console.log(cardInstance)}
                {cardInstance.map(card =>
                    <Card 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    />
                )}
                <button type="button" className="List-add-button">
                    + Add Random Card
          </button>
            </div>
        </section>
    )
}

export default List;
