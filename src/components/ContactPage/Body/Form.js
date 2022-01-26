import React, {
  // useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { ArrowLink } from '@components';

import {
  Input, Label, LabelText, TextArea, Wrapper,
} from './Form.styled';

const initialForm = {
  /* eslint-disable sort-keys */
  userName: '',
  userEmail: '',
  messageSubject: '',
  messageContent: '',
};

const fieldTypes = {
  userName: {
    label: 'Imię i nazwisko',
    type: 'input',
    variant: 'small',
  },
  userEmail: {
    label: 'E-mail',
    type: 'input',
    variant: 'small',
  },
  messageSubject: {
    label: 'Tytuł wiadomości',
    type: 'input',
    variant: 'large',
  },
  messageContent: {
    label: 'Treść wiadomości',
    type: 'textarea',
    variant: 'large',
  },
};
  /* eslint-enable sort-keys */

export const Form = ({ form }) => {
  const [
    formData,
    setFormData,
  ] = useState(initialForm);

  // const [
  //   requestState,
  //   setRequestState,
  // ] = useState(null);

  const [
    focusedField,
    setFocusedField,
  ] = useState(null);

  const handleChange = ({
    target: {
      id, value,
    },
  }) => {
    setFormData(current => ({
      ...current,
      [id]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
    console.log(event);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      {Object.keys(initialForm).map(key => {
        const {
          label, type, variant,
        } = fieldTypes[key];

        return (
          <Label
            key={key}
            variant={variant}
          >
            <LabelText isHidden={!!formData[key] || focusedField === key}>{label}</LabelText>
            {type === 'input' && (
            <Input
              id={key}
              name={key}
              onBlur={() => setFocusedField(null)}
              onChange={handleChange}
              onFocus={() => setFocusedField(key)}
            />
            )}
            {type === 'textarea' && (
              <TextArea
                id={key}
                name={key}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                onFocus={() => setFocusedField(key)}
              />
            )}
          </Label>
        );
      })}
      <ArrowLink type="submit">
        Wyślij
      </ArrowLink>
    </Wrapper>
  );
};

Form.propTypes = {
  form: PropTypes.shape({}).isRequired,
};

