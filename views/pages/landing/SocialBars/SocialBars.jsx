import React from 'react';
import cx from 'classnames';

import classes from './SocialBars.scss';

export default function SocialBars() {
  return (
    <>
      <div className={cx(classes.bottomSocial, classes.left, classes.icons)}>
        <a href={'https://github.com/thecyberbyte'} target={'_blank'}>
          <i className={'fab fa-github'} />
        </a>
        <a href={'https://t.me/iamch3r0'} target={'_blank'}>
          <i className={'fab fa-telegram'} />
        </a>
        <a href={'mailto:sasankreddy58@gmail.com'}>
          <i className={'fas fa-envelope'} />
        </a>
      </div>
      <div className={cx(classes.bottomSocial, classes.right, classes.text)}>
        <p>
          <a href={'mailto:sasankreddy58@gmail.com'}>sasank reddy</a>
        </p>
      </div>
    </>
  );
}
