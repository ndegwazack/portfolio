import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call/Text/WhatsApp</LinkTitle>
          <LinkItem href='tel:+254727214409'>+254 727 214 409</LinkItem>
        </LinkColumn>
        <br></br>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href='mailto:ndegwangugi1@gmail.com'>ndegwangugi1@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building solutions that transform lives.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/ndegwazack/'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/zacharia-ndegwa-473407126/'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>        
        {/* <SocialIcons href='#'>
          <AiFillWechat size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/ndegwagram/'>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/ZackVage'>
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons> */}
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
