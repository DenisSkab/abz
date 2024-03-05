import { useState } from 'react';

import Form from './form';

import success from '../../assest/images/success-image.png';

import style from './blockThree.module.scss';

const BlockThree = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handlerSuccessAddUser = () => setIsSuccess(true);

  return (
    <div className={style.block} id='sing_up'>
      {!isSuccess && (
        <>
          <h2 className={style.title}>Working with POST request</h2>
          <Form setIsSuccess={handlerSuccessAddUser} />
        </>
      )}
      {isSuccess && (
        <div className={style.blockSuccess}>
          <h2>User successfully registered</h2>
          <img src={success} alt='success' />
        </div>
      )}
    </div>
  );
};

export default BlockThree;
