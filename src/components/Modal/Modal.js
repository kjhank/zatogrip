import React, {
  createRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  animate, timeline,
} from 'motion';

import {
  Backdrop, Wrapper,
} from './Modal.styled';

export const Modal = ({
  children,
  close,
}) => {
  const backdropRef = createRef();
  const modalRef = createRef();

  const handleClosing = async () => {
    const { current: backdropElement } = backdropRef;

    try {
      const [status] = await animate(backdropElement, { opacity: 0 }, { duration: 0.5 }).finished;

      if (status) {
        close();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackdropClick = ({
    currentTarget, target,
  }) => {
    if (currentTarget === target) {
      handleClosing();
    }
  };

  useEffect(() => {
    const { current: backdropElement } = backdropRef;
    const { current: modalElement } = modalRef;

    const inSequence = [
      [
        backdropElement,
        { opacity: 1 },
        { duration: 0.25 },
      ],
      [
        modalElement,
        {
          transform: 'translateY(0)',
        },
        {
          duration: 0.25,
        },
      ],
    ];

    timeline(inSequence);
  }, []);

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      if (keyCode === 27) {
        handleClosing();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Backdrop
      onClick={handleBackdropClick}
      ref={backdropRef}
    >
      <Wrapper ref={modalRef}>
        {children}
      </Wrapper>
    </Backdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  close: PropTypes.func.isRequired,
};
