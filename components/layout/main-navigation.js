import React from 'react';
import Link from 'next/link';
import Logo from './logo';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contacts'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
