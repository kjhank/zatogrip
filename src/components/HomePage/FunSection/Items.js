import React from 'react';
import PropTypes from 'prop-types';

import { ArrowLink } from '@components';

import {
  ItemsGrid,
  ModalHeading,
  Name,
  SingleItem,
  Thumbnail,
} from './FunSection.styled';

export const Items = ({
  content, heading,
}) => (
  <>
    <ModalHeading>{heading}</ModalHeading>
    <ItemsGrid>
      {content?.files?.map(({ item }) => (
        <SingleItem key={item?.file}>
          {item?.thumbnail ?
            (
              <Thumbnail
                image={item?.thumbnail}
                isLazy={false}
              />
            ) :
              <Name>{item.name}</Name>}
          <ArrowLink
            $isCaps
            href={item?.file}
          >
            Pobierz
          </ArrowLink>
        </SingleItem>
      ))}
    </ItemsGrid>
  </>
);

Items.propTypes = {
  content: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  heading: PropTypes.string.isRequired,
};

