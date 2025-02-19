import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import s from './VenusPrime.module.css';
import Link from '../Link/Link';

const VenusPrime: React.FC = () => (
  <Container className={s.root}>
    <div className={s.card} key="bounty">
      <div className={cn(s.backgroundImg, s.venusPrimeLogo)} />
      <div className={s.logoMobile} />
      <div className={s.textWrapper}>
        <h2>
          Leverage <span className={s.accent}>Venus Prime</span>
          <br /> to amplify your returns
        </h2>
        <p>
          Venus Prime and the Venus Prime Token reward dedicated users of Venus Protocol with real
          yield for superior rates with their lending and borrowing activities.
        </p>
        <Link className={s.link} href="https://community.venus.io/">
          Learn more
        </Link>
      </div>
    </div>
  </Container>
);

export default VenusPrime;
