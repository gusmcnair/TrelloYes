import React from 'react';
import Card from './card.js';
import './list.css';

function List(props) {
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((cardInstance) => 
                    <Card 
                        key={cardInstance.id}
                        id={cardInstance.id}
                        title={cardInstance.title}
                        content={cardInstance.content}
                        onDeleteItem={props.onDeleteItem} />
                )}
                <button type="button" className="List-add-button" onClick={() => props.onAddItem(props.id)}>
                    + Add random card
                </button>
            </div>
        </section>
    )}



export default List;
