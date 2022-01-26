import React, {
  // useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  Input, Label, LabelText, SubmitButton, TextArea, Wrapper,
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
    dataType: 'text',
    isRequired: true,
    label: 'Imię i nazwisko',
    type: 'input',
    variant: 'small',
  },
  userEmail: {
    dataType: 'email',
    isRequired: true,
    label: 'E-mail',
    type: 'input',
    variant: 'small',
  },
  messageSubject: {
    dataType: 'text',
    isRequired: true,
    label: 'Tytuł wiadomości',
    type: 'input',
    variant: 'large',
  },
  messageContent: {
    dataType: 'text',
    isRequired: true,
    label: 'Treść wiadomości',
    type: 'textarea',
    variant: 'large',
  },
};
  /* eslint-enable sort-keys */

export const Form = ({ form }) => {
  const [
    formValues,
    setFormValues,
  ] = useState(initialForm);

  const [
    requestState,
    setRequestState,
  ] = useState(null);

  const [
    focusedField,
    setFocusedField,
  ] = useState(null);

  const handleChange = ({
    target: {
      id, value,
    },
  }) => {
    setFormValues(current => ({
      ...current,
      [id]: value,
    }));
  };

  const { GATSBY_BACKEND_URL } = process.env;

  const handleSubmit = async event => {
    event.preventDefault();

    const { target: formElement } = event;

    const isValid = formElement.checkValidity();

    if (isValid) {
      setRequestState('pending');
      const { ID: formId } = form;
      const formUrl = `${GATSBY_BACKEND_URL}/contact-form-7/v1/contact-forms/${formId}/feedback`;
      const formData = new FormData();

      Array.from(formElement.elements).forEach(item => formData.append(item.name, item.value));

      const response = await fetch(formUrl, {
        body: formData,
        method: 'post',
      });

      const { status } = await response.json();

      setRequestState(status);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      {Object.keys(initialForm).map(key => {
        const {
          dataType, isRequired, label, type, variant,
        } = fieldTypes[key];

        return (
          <Label
            key={key}
            variant={variant}
          >
            <LabelText isHidden={!!formValues[key] || focusedField === key}>{label}</LabelText>
            {type === 'input' && (
            <Input
              id={key}
              name={key}
              onBlur={() => setFocusedField(null)}
              onChange={handleChange}
              onFocus={() => setFocusedField(key)}
              required={isRequired}
              type={dataType}
            />
            )}
            {type === 'textarea' && (
              <TextArea
                id={key}
                name={key}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                onFocus={() => setFocusedField(key)}
                required={isRequired}
                type={dataType}
              />
            )}
          </Label>
        );
      })}
      <SubmitButton
        disabled={requestState === 'pending' || requestState === 'mail_sent'}
        isRed={requestState === 'mail_failed'}
        type="submit"
      >
        {!requestState && 'Wyślij'}
        {requestState === 'pending' && 'Wysyłam wiadomość...'}
        {requestState === 'mail_sent' && 'Wiadomość wysłana 👌'}
        {requestState === 'mail_failed' && 'Wystąpił błąd'}
      </SubmitButton>
    </Wrapper>
  );
};

Form.propTypes = {
  form: PropTypes.shape({
    ID: PropTypes.number,
  }).isRequired,
};

