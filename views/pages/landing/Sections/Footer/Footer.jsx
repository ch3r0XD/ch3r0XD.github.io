import React from 'react';

import classes from './Footer.scss';

export default function Project(props) {
  return (
    <div className={classes.footer}>
      <span>
        {'Designed by '}
        <i className={'fas fa-heart'} />
        {' by '}
        <a href={'https://t.me/iamch3r0/'}>sasank reddy</a>
        {'.'}
      </span>
    </div>
  );
}
