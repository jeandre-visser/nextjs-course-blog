import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/john.webp'
          alt='An image showing John'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m John Doe</h1>
      <p>I&apos;m a front end developer based in Canada.</p>
    </section>
  );
};

export default Hero;
