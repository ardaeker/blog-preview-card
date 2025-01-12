import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/utilities/format-date';

type WrapperProps = React.ComponentProps<'article'>;

function Wrapper({ ...props }: WrapperProps) {
  return (
    <article
      className="w-full max-w-96 space-y-6 rounded-3xl bg-white p-6 shadow-card ring-1 ring-gray-950"
      {...props}
    />
  );
}

type CoverProps = {
  src: string;
  alt: string;
};

function Cover({ src, alt }: CoverProps) {
  return (
    <figure className="relative h-[200px] w-full">
      <Image src={src} alt={alt} className="rounded-xl object-cover" sizes="100vw" priority fill />
    </figure>
  );
}

type ContentProps = {
  tags: string[];
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
};

function Content({ tags, title, slug, description, publishedAt }: ContentProps) {
  return (
    <div className="space-y-3">
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="inline-block rounded bg-yellow px-3 py-1 text-xs font-extrabold text-gray-950 sm:text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
      <p className="text-xs font-medium text-gray-950 sm:text-sm">
        Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      </p>
      <h1 className="text-xl font-extrabold text-gray-950 sm:text-2xl">
        <Link href={slug} className="transition-colors duration-200 hover:text-yellow">
          {title}
        </Link>
      </h1>
      <p className="text-sm font-medium sm:text-base">{description}</p>
    </div>
  );
}

type AuthorProps = {
  name: string;
  avatarUrl: string;
};

function Author({ name, avatarUrl }: AuthorProps) {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src={avatarUrl}
        overrideSrc={avatarUrl}
        alt={name}
        className="h-8 w-8 rounded-full"
        width={32}
        height={32}
        priority
      />
      <p className="text-sm font-extrabold text-gray-950">{name}</p>
    </div>
  );
}

export { Wrapper, Cover, Content, Author };
