import React from 'react';
import './app.css'
import STORE from './store.js';
import List from './list.js';

function App(props) {
  const storeCards = STORE.lists;
  const cardIds = STORE.allCards;
  console.log(storeCards);
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {storeCards.map(list => (
          <List key={list.id}
            header={list.header}
            card={list.cardIds.map(id => cardIds[id])} />
        ))}
      </div>
    </main>
  );

}

export default App;