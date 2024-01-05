import {render,screen} from '@testing-library/react';
import About from '../pages/About.js'
 
test('renders learn react link', () => {
    render(<About />);
    const linkElement = screen.getByText(/Soundariya/i);
    expect(linkElement).toBeInTheDocument();
    const linkElement1= screen.getByText(/727822tucs227/i);
    expect(linkElement1).toBeInTheDocument();
  });