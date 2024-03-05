import style from './card.module.scss';

type Props = {
  photo: string;
  name: string;
  post: string;
  email: string;
  number: string;
};

const Card: React.FC<Props> = ({ photo, name, post, email, number }) => {
  return (
    <div className={style.card}>
      <img src={photo} alt='photo' className={style.cardImage} />
      <span className={style.text}>{name}</span>
      <div className={style.wrapper}>
        <span className={style.text}>{post}</span>
        <span className={style.text}>{email}</span>
        <span className={style.text}>{number}</span>
      </div>
    </div>
  );
};

export default Card;
