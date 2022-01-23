import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import sanitize from 'sanitize-html';

import {
  Container, ExternalLink,
} from '@components';
import {
  Envelope, EnvelopeWithAt, ManufacturerLogo, Phone, Pills,
} from '@icons';

import { Carousel } from './Carousel/Carousel';

import {
  Address,
  Badge,
  BadgeLink,
  Bottom,
  Contact,
  Contacts,
  Footer,
  Link as GenericLink,
  Legal,
  Links,
} from './GlobalFooter.styled';

const sanitizeConfig = {
  allowedTags: [
    'a',
    'br',
  ],
};

export const GlobalFooter = ({
  carousel, content, hasCarousel,
}) => (
  <Footer>
    {hasCarousel && <Carousel content={carousel} />}
    <Container>
      <Contacts>
        <Contact>
          <Pills />
          <Address
            dangerouslySetInnerHTML={{ __html: sanitize(content?.companyData, sanitizeConfig) }}
          />
        </Contact>
        <Contact>
          <Envelope />
          <Address
            dangerouslySetInnerHTML={{ __html: sanitize(content?.officeData, sanitizeConfig) }}
          />
        </Contact>
        <Contact>
          <Phone />
          <ul>
            {content?.phones.map(({ number }) => (
              <li key={number}>
                <GenericLink href={`tel:${number.split(' ').join('')
                  .split('-')
                  .join('')}`}
                >
                  {number}
                </GenericLink>
              </li>
            ))}
          </ul>
        </Contact>
        <Contact>
          <EnvelopeWithAt />
          <ul>
            {content?.emails.map(({ email }) => (
              <li key={email}>
                <GenericLink href={email}>{email}</GenericLink>
              </li>
            ))}
          </ul>
        </Contact>
      </Contacts>
      <Bottom>
        <ManufacturerLogo />
        <Legal>
          {content?.legal.copyright}
          <Links>
            {content?.legal.externalUrls.map(({ link }) => (link.url.includes('http') ?
              (
                <ExternalLink
                  href={link.url}
                  key={link.title}
                >
                  {link.title}
                </ExternalLink>
              ) :
              (
                <Link
                  key={link.title}
                  to={link.url}
                >
                  {link.title}
                </Link>
              )))}
          </Links>
        </Legal>
        <BadgeLink href={content?.productsLink.url}>
          {content?.productsLink.title}
        </BadgeLink>
        <Badge>
          {content?.badge}
        </Badge>
      </Bottom>
    </Container>
  </Footer>
);

GlobalFooter.propTypes = {
  carousel: PropTypes.shape({}).isRequired,
  content: PropTypes.shape({
    badge: PropTypes.string,
    companyData: PropTypes.string,
    emails: PropTypes.arrayOf(PropTypes.shape({})),
    legal: PropTypes.shape({
      copyright: PropTypes.string,
      externalUrls: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    officeData: PropTypes.string,
    phones: PropTypes.arrayOf(PropTypes.shape({})),
    productsLink: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
  hasCarousel: PropTypes.bool.isRequired,
};
