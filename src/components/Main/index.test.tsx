import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the default text', () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the text which was passed as prop', () => {
    render(<Main title="Testing" />);
    expect(
      screen.getByRole('heading', { name: /Testing/i }),
    ).toBeInTheDocument();
  });
});
