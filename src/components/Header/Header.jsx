import Image from "next/image";
import Link from "next/link";

import logotype from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className='header' id='header'>
      <div className='container header__wrapper'>
        <div className='logo header-logo'>
          <Image
            width={90}
            src={logotype}
            alt='Логотип детейлинг сервиса VOSHOD'
            objectFit='cover'
          />
        </div>

        <nav className='header__nav'>
          <ul className='menu header__menu'>
            <li>
              <Link href='/' className='menu__link'>
                Каталог
              </Link>
            </li>
            <li>
              <Link href='/' className='menu__link'>
                О центре
              </Link>
            </li>
            <li>
              <Link href='/' className='menu__link'>
                Наши проекты
              </Link>
            </li>
            <li>
              <Link href='/' className='menu__link'>
                Прайс-лист
              </Link>
            </li>
            <li>
              <Link href='/' className='menu__link'>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className='header__menu'>
          <Link href='tel:+78432538242' className='header__action'>
            +7 (843) 253-82-42
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
