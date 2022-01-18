import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Container } from '@components';
import {
  Envelope, EnvelopeWithAt, Phone, Pills,
} from '@icons';

import {
  Address, Contact, Contacts, Footer, Link,
} from './GlobalFooter.styled';

const sanitizeConfig = {
  allowedTags: [
    'a',
    'br',
  ],
};

export const GlobalFooter = ({ content }) => (
  <Footer>
    <Container>
      <Contacts>
        <Contact>
          <Pills />
          <Address
            dangerouslySetInnerHTML={{ __html: sanitize(content.companyData, sanitizeConfig) }}
          />
        </Contact>
        <Contact>
          <Envelope />
          <Address
            dangerouslySetInnerHTML={{ __html: sanitize(content.officeData, sanitizeConfig) }}
          />
        </Contact>
        <Contact>
          <Phone />
          <ul>
            {content.phones.map(({ number }) => (
              <li key={number}>
                <Link href={`tel:${number.split(' ').join('')
                  .split('-')
                  .join('')}`}
                >
                  {number}
                </Link>
              </li>
            ))}
          </ul>
        </Contact>
        <Contact>
          <EnvelopeWithAt />
          <ul>
            {content.emails.map(({ email }) => (
              <li key={email}>
                <Link href={email}>{email}</Link>
              </li>
            ))}
          </ul>
        </Contact>
      </Contacts>
    </Container>
  </Footer>
);

GlobalFooter.propTypes = {
  content: PropTypes.shape({
    companyData: PropTypes.string,
    emails: PropTypes.arrayOf(PropTypes.shape({})),
    officeData: PropTypes.string,
    phones: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

