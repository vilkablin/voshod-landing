"use client";

import Link from "next/link";
import Container from "../Container/Container";

import image1 from "../../assets/images/16.jpg";
import image2 from "../../assets/images/19.jpg";

const POPULARS = [
  {
    id: 1,
    title: "Полировка кузова",
    text: "Профессиональная полировка кузова автомобиля от царапин",
    image_url: image1.src,
  },
  {
    id: 2,
    title: "Оклейка антигравийной пленкой",
    text: "Профессиональное бронирование автомобиля",
    image_url: image2.src,
  },
];

const Popular = () => {
  return (
    <section className="popular" id="popular">
      <div className="popular-header">
        <Container>
          <div className="wrapper">
            <h2>Популярно</h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="cards">
          {POPULARS.map((card, index) => {
            return (
              <div
                className="card"
                style={{
                  backgroundImage: `url(${card.image_url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="card-info">
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <Link href="/catalog" target="_blank">
                    <span>Смотреть</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Popular;
