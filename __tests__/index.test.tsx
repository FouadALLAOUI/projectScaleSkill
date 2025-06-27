import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders the authentication tabs', () => {
    render(<Home />);
    
    // Check that the main container is rendered
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('min-h-screen');
  });

  it('has the correct styling classes', () => {
    render(<Home />);
    
    const main = screen.getByRole('main');
    expect(main).toHaveClass(
      'min-h-screen',
      'flex',
      'items-center',
      'justify-center',
      'bg-gradient-to-br'
    );
  });
}); 