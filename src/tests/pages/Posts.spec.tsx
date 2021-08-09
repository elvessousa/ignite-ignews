import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Posts, { getStaticProps } from '../../pages/posts';
import { getPrismicClient } from '../../services/prismic';

jest.mock('../../services/prismic');

const posts = [
  {
    slug: 'new-post',
    title: 'New post',
    excerpt: 'Post excerpt',
    updatedAt: 'March 10th',
  },
];

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText('New post')).toBeInTheDocument();
  });

  it('loads initial data', async () => {
    const getPrimicClientMocked = mocked(getPrismicClient);
    getPrimicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'new-post',
            data: {
              title: [{ type: 'heading', text: 'New post' }],
              content: [{ type: 'paragraph', text: 'Post excerpt' }],
            },
            last_publication_date: '04-01-2021',
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'new-post',
              title: 'New post',
              excerpt: 'Post excerpt',
              updatedAt: '01 de abril de 2021',
            },
          ],
        },
      })
    );
  });
});
