import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import * as Card from './blog-card';

import { formatDate } from '@/utilities/format-date';

const mockPost = {
  title: 'HTML & CSS foundations',
  slug: '/blog/html-css',
  cover: {
    href: '/illustration-article.svg',
    alt: 'An illustration representing the blog topic.',
  },
  content: {
    tags: ['Learning', 'Web Development'],
    title: 'HTML & CSS foundations',
    description:
      'These languages are the backbone of every website, defining structure, content, and presentation.',
    publishedAt: '2023-12-21',
  },
  author: {
    name: 'Greg Hooper',
    avatarUrl: '/image-avatar.webp',
  },
};

describe('Blog Card', () => {
  it('should render the blog card with provided props', () => {
    render(
      <Card.Wrapper>
        <Card.Cover src={mockPost.cover.href} alt={mockPost.cover.alt} />
        <Card.Content
          slug={mockPost.slug}
          tags={mockPost.content.tags}
          title={mockPost.content.title}
          description={mockPost.content.description}
          publishedAt={mockPost.content.publishedAt}
        />
        <Card.Author name={mockPost.author.name} avatarUrl={mockPost.author.avatarUrl} />
      </Card.Wrapper>,
    );

    // Check cover image
    expect(screen.getByAltText(mockPost.cover.alt)).toHaveAttribute('src', mockPost.cover.href);

    // Check content
    expect(screen.getAllByRole('listitem')).toHaveLength(mockPost.content.tags.length);
    expect(screen.getByText(formatDate(mockPost.content.publishedAt))).toBeInTheDocument();
    expect(screen.getByText(mockPost.content.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.content.description)).toBeInTheDocument();

    // Check author avatar
    expect(screen.getByAltText(mockPost.author.name)).toHaveAttribute(
      'src',
      mockPost.author.avatarUrl,
    );
  });
});
