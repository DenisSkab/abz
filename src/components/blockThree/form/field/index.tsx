import { useState } from 'react';
import classNames from 'classnames';

import validationSchema from '../../../../utils/validation';

import style from './field.module.scss';

type Props = {
  placeholder: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
  setFormatError: (value: boolean) => void;
};

const Field: React.FC<Props> = ({
  placeholder,
  value,
  type,
  onChange,
  setFormatError,
}) => {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState('');

  const handlerFocus = () => setFocus(true);

  const handlerBlur = () => {
    setFocus(false);

    validationSchema
      .validate({ [type]: value })
      .then(() => {
        setError('');
        setFormatError(false);
      })
      .catch((error) => {
        setError(error.errors[0]);
        setFormatError(true);
      });
  };

  return (
    <label className={style.wrapper}>
      <input
        className={classNames(style.field, {
          [style.error]: error,
        })}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        value={value}
        type={type}
        onChange={(event) => onChange(event.target.value)}
      />
      <span
        className={classNames(style.placeholder, {
          [style.focus]: focus || value,
        })}
      >
        {placeholder}
      </span>
      {type === 'tel' && !error && (
        <p className={style.phone}>+38 (XXX) XXX - XX - XX</p>
      )}
      <p className={style.errorText}>{error}</p>
    </label>
  );
};

export default Field;
