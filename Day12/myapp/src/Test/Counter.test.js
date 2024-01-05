import {render,screen,fireEvent} from '@testing-library/react';
import Counter from '../Pages/Counter'

test('render learn react link',()=>
{
    render(<Counter/>);
    const link1=screen.getByText(/0/);
    expect(link1).toBeInTheDocument();
});
test('render learn react link',()=>
{
    render(<Counter/>);
    const link2=screen.getByText('Increase')
    const inc=screen.getByText(/0/);
    fireEvent.click(link2);

    expect(inc).toHaveTextContent('1');
})
test('render learn react link',()=>
{
    render(<Counter/>);
    const link3=screen.getByText('Decrease')
    const dec=screen.getByText(/0/);
    fireEvent.click(link3);

    expect(dec).toHaveTextContent('-1');

})
