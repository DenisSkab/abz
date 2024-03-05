import Button from '../button';

import logo from '../../assest/images/Logo.svg';

import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt='logo' width={104} height={26} />
      <div className={style.buttons}>
        <Button text='Users' link='users' />
        <Button text='Sing up' link='sing_up' />
      </div>
    </header>
  );
};

export default Header;
