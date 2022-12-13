import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:15062711895'> +1 (506) 271-1895</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>e-mail</LinkTitle>
          <LinkItem href='mailto:marian.volodymyr.perun@gmail.com'> marian.volodymyr.perun@gmail.com </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <Slogan>Shoutout to JavaScript Mastery!</Slogan>
        <CompanyContainer></CompanyContainer>
        <SocialIcons href='https://github.com/MarianPerun'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/marian-perun/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
