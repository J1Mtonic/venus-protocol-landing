import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import { ReactComponent as Code4rena } from './assets/c4.svg';
import { ReactComponent as Code4renaHover } from './assets/c4Hover.svg';
import { ReactComponent as Certik } from './assets/certik.svg';
import { ReactComponent as CertikHover } from './assets/certikHover.svg';
import { ReactComponent as Hacken } from './assets/hacken.svg';
import { ReactComponent as HackenHover } from './assets/hackenHover.svg';
import { ReactComponent as Fairyproof } from './assets/fairyproof.svg';
import { ReactComponent as FairyproofHover } from './assets/fairyproofHover.svg';
import { ReactComponent as OpenZeppelin } from './assets/openzeppelin.svg';
import { ReactComponent as OpenZeppelinHover } from './assets/openzeppelinHover.svg';
import { ReactComponent as Peckshield } from './assets/peckshield.svg';
import { ReactComponent as PeckshieldHover } from './assets/peckshieldHover.svg';
import s from './Safety.module.css';
import SafetyScore from './SafetyScore';
import Auditor from './Auditor';

interface ISafetyProps {
  className?: string;
}

const auditors = [
  {
    logo: Code4rena,
    logoHovered: Code4renaHover,
    audits: 1,
    className: s.certik,
    href: 'https://code4rena.com/contests/2023-05-venus-protocol-isolated-pools',
  },
  {
    logo: Hacken,
    logoHovered: HackenHover,
    audits: 4,
    className: s.hacken,
    href: 'https://hacken.io/audits/venus/',
  },
  {
    logo: Fairyproof,
    logoHovered: FairyproofHover,
    audits: 2,
    className: s.certik,
    href: 'https://www.fairyproof.com/report/Venus',
  },
  {
    logo: OpenZeppelin,
    logoHovered: OpenZeppelinHover,
    audits: 2,
    className: s.certik,
    href: 'https://docs-v4.venus.io/links/security-and-audits',
  },
  {
    logo: Certik,
    logoHovered: CertikHover,
    audits: 7,
    className: s.certik,
    href: 'https://skynet.certik.com/projects/venus',
  },
  {
    logo: Peckshield,
    logoHovered: PeckshieldHover,
    audits: 10,
    className: s.certik,
    href: 'https://docs-v4.venus.io/links/security-and-audits',
  },
];

const Safety: React.FC<ISafetyProps> = ({ className }) => (
  <section className={cn(s.root, className)}>
    <Container className={s.container}>
      <h2 className={s.safetyBeforeAll}>Safety before all</h2>
      <p className={s.assetSecurity}>
        Transact with confidence, knowing Venus places nothing before the security of your assets
      </p>
      <div className={s.auditorsAndScore}>
        <SafetyScore className={s.safetyScoreMobile} />
        <div className={s.logos}>
          {auditors.map(a => (
            <Auditor auditor={a} />
          ))}
        </div>
        <SafetyScore className={s.safetyScoreDesktop} />
      </div>
    </Container>
  </section>
);

export default Safety;
