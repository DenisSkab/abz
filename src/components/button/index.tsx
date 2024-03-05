import classNames from 'classnames';
import style from './button.module.scss';

type Props = {
  text: string;
  disabled?: boolean;
  type?: 'submit';
  link?: string;
  func?: () => void;
};

const Button: React.FC<Props> = ({ text, disabled, type, link, func }) => {
  const renderElement = () =>
    link ? (
      <a
        className={classNames(style.button, {
          [style.disable]: disabled,
        })}
        href={`#${link}`}
      >
        {text}
      </a>
    ) : (
      <button
        className={classNames(style.button, {
          [style.disable]: disabled,
        })}
        disabled={disabled}
        type={type}
        onClick={func}
      >
        {text}
      </button>
    );

  return renderElement();
};

export default Button;
