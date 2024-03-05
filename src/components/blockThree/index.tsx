import Form from './form';

import style from './blockThree.module.scss';

const BlockThree = () => {
  return (
    <div className={style.block} id='sing_up'>
      <h2 className={style.title}>Working with POST request</h2>
      <Form />
    </div>
  );
};

export default BlockThree;
