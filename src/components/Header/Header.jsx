"use client";

import Image from "next/image";
import Link from "next/link";

import logotype from "../../assets/images/logo.png";

import styles from "./Header.module.scss";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";

const links = [
  {
    text: "Каталог",
    url: "/catalog",
    items: [
      {
        text: "Детейлинг мойка",
        url: "/catalog",
      },
      {
        text: "Ремонт вмятин без покраски",
        url: "/catalog",
      },
      {
        text: "Детейлинг мойка автомобиля",
        url: "/catalog",
      },
    ],
  },
  {
    text: "О центре",
    url: "/about",
    items: [],
  },
  {
    text: "Наши проекты",
    url: "/works",
    items: [],
  },
  {
    text: "Прайс-лист",
    url: "/price",
    items: [],
  },
  {
    text: "Контакты",
    url: "/contacts",
    items: [],
  },
];

const Logotype = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image
          width={90}
          src={logotype}
          alt="Логотип детейлинг сервиса VOSHOD"
          objectFit="cover"
        />
      </Link>
    </div>
  );
};

const HeaderMenu = ({ links }) => {
  return (
    <ul className={`${styles.menu} ${styles.headerMenu}`}>
      {links.map(({ text, url }, index) => {
        return (
          <li key={index}>
            <Link href={url} className={styles.link}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  const path = usePathname();

  const classNames = `${styles.header}${
    path === "/" ? " absolute t-0 r-0 l-0" : ""
  }`;

  return (
    <header className={classNames} id="header">
      <Container classNames={styles.wrapper}>
        <nav className={styles.nav}>
          <Logotype />
          <HeaderMenu links={links} />

          {links.map((link, index) => {
            if (!link.items.length) {
              return;
            }

            console.log();

            return (
              <div key={index} className="submenu">
                <h3 className="submenu__title">какой-то татйтл</h3>

                <div className="menu">
                  {link.items.map(({ text, url }, index) => {
                    return (
                      <div key={index} className="menu-item">
                        <Link href={url}>{text}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>

        <div className={styles.headerMenu}>
          <Link href="tel:+78432538242" className="header__action">
            +7 (843) 253-82-42
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
