import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

describe ('List component', () => {
    it('renders without crashing', () => {
        const testObject =  (  [{
            id: '1',
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
          }])
        const div = document.createElement('div');
        ReactDOM.render(<List  cardInstance={testObject} />, div);
        ReactDOM.unmountComponentAtNode(div);
)};
    it('renders UI as expected', () => {
        const testObject =  (  [{
              id: '1',
              header: 'First list',
              cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
            }])
        const tree = renderer;
            .create(<List cardInstance={testObject} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})