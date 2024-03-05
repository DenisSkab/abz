import Button from '../button';

import style from './blockOne.module.scss';

const BlockOne = () => {
  return (
    <div className={style.block}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Test assignment for front-end developer</h1>
        <p className={style.text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button text='Sing up' link='sing_up' />
      </div>
    </div>
  );
};

export default BlockOne;
