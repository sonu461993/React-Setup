
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Login from '../../src/views/Login';
import '@testing-library/jest-dom'

test('should render component', () => {
    render(<Login />)
    const loginELement = screen.getByTestId('login');
    expect(loginELement).toBeInTheDocument();
})