"use client";

import Link from "next/link";
import Container from "../Container/Container";

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="rewiews-header">
        <Container>
          <div className="wrapper">
            <h2 className="heading">Яндекс отзывы</h2>
            <hr />
          </div>
        </Container>
      </div>

      <Container>
        <div className="reviews-content">
          <div className="reviews-inner">
            <iframe
            src="https://yandex.ru/maps-reviews-widget/231992007575?comments"
            ></iframe>
            <Link
              href="https://yandex.ru/maps/org/voskhod/231992007575/"
              target="_blank"
            >
              Восход на карте Казани — Яндекс Карты
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
