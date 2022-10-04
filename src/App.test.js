import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Form from './components/Form';
import App from './App';

test.skip('renders form component', () => {
  render(<App />);
  const component = renderer.create(<Form />).toJSON();
  expect(component).toMatchSnapshot();
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
