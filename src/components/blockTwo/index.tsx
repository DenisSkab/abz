import { useEffect, useState } from 'react';

import { getUsers } from '../../api/request';
import { User } from '../../utils/types';

import Card from './card';
import Button from '../button';
import Loader from '../loader';

import style from './blockTwo.module.scss';

const BlockTwo = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(6);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (count < 100) {
      getUsers(count).then((result: any) => {
        setUsers(result);
        setLoader(false);
      });
    }
  }, [count]);

  const addUsers = () => {
    setCount((prevProps) => (prevProps + 6 < 100 ? prevProps + 6 : 100));
    if (!loader && count < 100) {
      setLoader(true);
    }
  };

  return (
    <div className={style.block} id='users'>
      <h2 className={style.title}>Working with GET request</h2>
      <div className={style.cardsWrapper}>
        {users.map((user: User) => (
          <Card
            photo={user.photo}
            name={user.name}
            post={user.position}
            email={user.email}
            number={user.phone}
            key={user.id}
          />
        ))}
      </div>
      {loader && <Loader />}
      <Button text='Show more' func={addUsers} disabled={count === 100} />
    </div>
  );
};

export default BlockTwo;
