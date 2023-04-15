import Image from 'next/image';
import React from 'react';
import classes from './post-header.module.css';

const PostHeader = (props) => {
  const { title, image, date } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <div className={classes.image}>
        <Image src={image} alt={title} width={200} height={150} />
      </div>
      <div className={classes.meta}>
        <time>{date}</time>
      </div>
    </header>
  );
};

export default PostHeader;
