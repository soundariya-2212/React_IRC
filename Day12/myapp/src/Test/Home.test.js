import {render,screen} from '@testing-library/react';
import Home from '../pages/Home.js'
 
test('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Sri Krishna College of Engineering/i);
    expect(linkElement).toBeInTheDocument();
    const linkElement1= screen.getByText(/React_IRC/i);
    expect(linkElement1).toBeInTheDocument();
  });