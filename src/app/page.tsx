import * as Card from '@/components/blog-card';

export default function Page() {
  const post = {
    title: 'HTML & CSS foundations',
    slug: '#',
    cover: {
      href: '/illustration-article.svg',
      alt: 'An illustration representing the blog topic.',
    },
    description:
      'These languages are the backbone of every website, defining structure, content, and presentation.',
    publishedAt: '2023-12-21',
    content: {
      tags: ['Learning'],
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
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card.Wrapper>
        <Card.Cover src={post.cover.href} alt={post.cover.alt} />
        <Card.Content
          slug={post.slug}
          tags={post.content.tags}
          title={post.content.title}
          description={post.content.description}
          publishedAt={post.content.publishedAt}
        />
        <Card.Author name={post.author.name} avatarUrl={post.author.avatarUrl} />
      </Card.Wrapper>
    </main>
  );
}
