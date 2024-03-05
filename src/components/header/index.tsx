import Button from '../button';

import logo from '../../assest/images/Logo.png';

import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt='logo' />
      <div className={style.buttons}>
        <Button text='Users' link='users' />
        <Button text='Sing up' link='sing_up' />
      </div>
    </header>
  );
};

export default Header;
