import renderer from 'react-test-renderer';
import { UseInputState } from '../hooks/UseInputState';

it('changes based on user input', () => {
    const component = renderer.create(
        <UseInputState />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
