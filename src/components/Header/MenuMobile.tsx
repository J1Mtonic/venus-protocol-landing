import React from 'react';
import cn from 'classnames';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import Container from '../Container/Container';
import LinkLaunchApp from '../Link/LinkLaunchApp';
import s from './MenuMobile.module.css';

const content = [
  {
    href: 'https://github.com/VenusProtocol/venus-protocol-documentation/tree/main/whitepapers',
    text: 'Whitepaper',
  },
  {
    href: 'https://docs-v4.venus.io/',
    text: 'Docs',
  },
  {
    href: 'https://app.venus.io/market',
    text: 'Markets',
  },
];

interface IMenuMobileProps {
  className?: string;
}

const MenuMobile: React.FC<IMenuMobileProps> = ({ className }) => (
  <Container className={cn(s.root, className)}>
    <NavigationLinks content={content} classNames={{ root: s.headerNavLinksWrapper, link: s.headerLink }} />
    <LinkLaunchApp variant="buttonTransparent" className={s.btn} />
  </Container>
);

export default MenuMobile;
