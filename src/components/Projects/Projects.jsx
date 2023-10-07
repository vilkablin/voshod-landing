import Link from "next/link";
import Container from "../Container/Container";

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
        <div className="cards">
          <div className="card">
            <h3>Бронирование пленкой Mercedes</h3>
            <Link href="https://avavion.ru" target="_blank">
              <span> MERCEDES S КЛАССА </span>
            </Link>
            <img src="" alt="#" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Projects;
