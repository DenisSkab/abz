import classNames from 'classnames';

import style from './radio.module.scss';

type Props = {
  id: string;
  handleRadioChange: (id: string) => void;
  checked: string | null;
  title: string;
};

const Radio: React.FC<Props> = ({ id, handleRadioChange, checked, title }) => {
  const handleChange = () => {
    handleRadioChange(id);
  };

  return (
    <label className={style.wrapper}>
      <input
        type='radio'
        className={style.input}
        onChange={handleChange}
        name='position'
        id={id}
      />
      <div
        className={classNames(style.checkbox, {
          [style.checked]: checked === id,
        })}
      ></div>
      <p className={style.title}>{title}</p>
    </label>
  );
};

export default Radio;
