import Hero from '@/components/home-page/hero';
import { Fragment } from 'react';
import FeaturedPosts from '@/components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG functionality!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS2',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG functionality!',
    date: '2022-02-10',
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
