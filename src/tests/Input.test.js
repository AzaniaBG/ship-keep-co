import renderer from 'react-test-renderer';
import UseInputHook from '../hooks/UseInputHook';

it('changes based on user input', () => {
    const component = renderer.create(
        <UseInputHook />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
