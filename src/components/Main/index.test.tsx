import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the default text', () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #06092b;
        color: #fff;
        width: 100%;
        height: 100%;
        padding: 3rem;
        text-align: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c1 {
        font-size: 2.5rem;
      }

      <main
        class="c0"
      >
        <h1
          class="c1"
        >
          Hello world
        </h1>
      </main>
    `);
  });

  it('should render the text which was passed as prop', () => {
    render(<Main title="Testing" />);
    expect(
      screen.getByRole('heading', { name: /Testing/i }),
    ).toBeInTheDocument();
  });
});
