import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/';
import { UserProvider } from '../../context/UserContext';
import Auth from './Auth';

it('should render our button to log into github', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <Auth />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
