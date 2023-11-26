"use client";
import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";

import image1 from "../../assets/images/inst.svg";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <Container>
          <div className="wrapper">
            <div className="wrapper-item">
              <h3>Мойка</h3>
              <Link href="/price" target="_blank">
                <span>Комплексная мойка</span>
              </Link>
              <Link href="/price" target="_blank">
                <span>Детейлинг мойка автомобиля</span>
              </Link>
              <Link href="/price" target="_blank">
                <span>Детейлинг мойка двигателя</span>
              </Link>
            </div>

            <div className="wrapper-item">
              <h3>Полировка</h3>
              <Link href="/price" target="_blank">
                <span>Полировка кузова</span>
              </Link>
              <Link href="/price" target="_blank">
                <span>Ремонт вмятин без покраски</span>
              </Link>
              <Link href="/price" target="_blank">
                <span>Полировка лаковых вставок в салоне</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Полировка лобового стекла</span>{" "}
              </Link>
            </div>

            <div className="wrapper-item">
              <h3>Оклейка</h3>
              <Link href="/price" target="_blank">
                <span>Оклейка атермальной пленкой</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Бронирование обовых стекол</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Оклейка виниловой пленкой</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Оклейка антигравийной пленкой</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Тонировка передних фонарей</span>{" "}
              </Link>
            </div>

            <div className="wrapper-item">
              <h3>Химчистка</h3>
              <Link href="/price" target="_blank">
                <span>Химчистка салона автомобиля</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Химчистка сидений автомобиля</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Защитный состав для кожи</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Защитный состав для текстиля</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Защитный состав для пластика</span>{" "}
              </Link>
            </div>

            <div className="wrapper-item">
              <h3>Тюнинг</h3>
              <Link href="/price" target="_blank">
                <span>Реставрация салона</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>перетяжка руля автомобиля</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Кованные диски</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Установка Android-мультимедиа</span>{" "}
              </Link>
              <Link href="/price" target="_blank">
                <span>Вибро-шумоизоляция автомобиля</span>{" "}
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="footer-socials">
          <div className="footer-subscribe">
            <Image src={image1} alt="instagram" objectFit="cover" />
            <Link href="/" target="_blank">
              <span>Подпишись на нас в Instagram*</span>
              <div className="footer-subtitle">
                <p>
                  *принадлежит Meta, которая признана экстремистской и запрещена
                  в России
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
