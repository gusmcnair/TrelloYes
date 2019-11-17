import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import STORE from './store.js';
import renderer from 'react-test-renderer';

describe ('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List  cardInstance={props.card} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer;
            .create(<List cardInstance={props.card} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})