"use client";

import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";

import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/5.jpg";


const PROJECTS = [
  {
    id: 1,
    title: "Бронирование пленкой Mercedes",
    text: "mercedes s класса",
    href: "/services/optic",
    image_url: image1,
  },
  {
    id: 2,
    title: "Бронирование кузова пленкой",
    text: "audi",
    href: "/services/optic",
    image_url: image2,
  },
  {
    id: 3,
    title: "Виниловая пленка KIA",
    text: "kia",
    href: "/services/optic",
    image_url: image3,
  },
];


const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <Container>
          <div className="wrapper">
            <h2 className="heading">Наши проекты</h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="projects-content">
        <div className="cards">
          {PROJECTS.map((project, index) => {
            return (
              <div className="card" key={project.id}>
                <h3>{project.title}</h3>
                <Link href="https://avavion.ru" target="_blank">
                  <p className="card-p">{project.text} </p>
                </Link>
                <Image
                  src={project.image_url}
                  alt={project.title}
                  className="card__image"
                />
              </div>
            );
          })}
        </div>
        <Link href="/works">
          <span>Смотреть все проекты</span>
        </Link>
        </div>
      </Container>
    </section>
  );
};
export default Projects;
