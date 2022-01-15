import { render, screen } from '@testing-library/react';

import { Main } from './main.component';

describe('<Main />', () => {
  test('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Next boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
