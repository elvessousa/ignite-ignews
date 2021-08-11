import { render, screen, waitFor } from '@testing-library/react';
import { Async } from '.';

/* TIPS:
 * getBy functions: get information from the screen synchronously
 * findBy functions: get information from the screen asynchronously
 * queryBy function: doesn't throw error if information does not exist;
 */

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  // expect(await screen.findByText('Button')).toBeInTheDocument();

  // await waitForElementToBeRemoved(screen.queryByText('Button'));

  await waitFor(() => {
    return expect(screen.queryByText('Button')).not.toBeInTheDocument();
  });
});
