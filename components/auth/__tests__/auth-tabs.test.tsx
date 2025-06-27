import { render, screen } from '@testing-library/react';
import { AuthTabs } from '../auth-tabs';

// Mock the child components to avoid complex dependencies
jest.mock('../login-form', () => ({
  LoginForm: () => <div data-testid="login-form">Login Form</div>,
}));

jest.mock('../register-form', () => ({
  RegisterForm: () => <div data-testid="register-form">Register Form</div>,
}));

describe('AuthTabs', () => {
  it('renders without crashing', () => {
    render(<AuthTabs />);
    
    // Check that the welcome message is rendered
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
  });

  it('renders the tab triggers', () => {
    render(<AuthTabs />);
    
    // Check for login and register tabs
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('shows login form by default', () => {
    render(<AuthTabs />);
    
    // Check that login form is visible by default
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
}); 