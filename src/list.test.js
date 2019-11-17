import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

describe ('List component', () => {
    it('renders without crashing', () => {
        const testObject =  [{
            content: 'lorem ipsum',
            id: 'a',
            title: 'Twelfth card',
          }]
        const div = document.createElement('div');
        ReactDOM.render(<List card={testObject} />, div);
        ReactDOM.unmountComponentAtNode(div);
});
    it('renders UI as expected', () => {
        const testObject =  [{
            content: 'lorem ipsum',
            id: 'b',
            title: 'Eighth card',
          }
        ]
        const tree = renderer
            .create(<List card={testObject} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})