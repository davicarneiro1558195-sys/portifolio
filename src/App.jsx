
import './App.css';

export default function App() {
  return (
    <main>
      <header>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencias">Experiências</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <section className="inicio" id="inicio">
        <div className="intro">
          <p className="etiqueta">OLÁ, EU SOU</p>

          <h1>
            Davi Lavalle
            <br />
            <span>Carneiro</span>
          </h1>

          <h2> Técnico de TI | Estudante do curso de Engenharia de Software</h2>

          <p>
            Sou uma pessoa dedicada, comprometida e sempre disposta a aprender.
            Sou formado como Técnico em Informática pelo Colégio Cotemig e
            atualmente curso Engenharia de Software na PUC Minas.
            Também tive a oportunidade de realizar um estágio de quatro meses
            no Conselho Regional de Medicina Veterinária de Minas Gerais, onde pude adquirir
            experiência no ambiente profissional.
          </p>

          <div className="acoes">
            <a className="btn principal" href="#projetos">
              Conheça meus projetos
            </a>

            <a className="btn" href="#contato">
              Entre em contato
            </a>
          </div>
        </div>

        <div className="foto-area">
          <img
            className="foto-perfil"
            src="/assets/foto.jpg"
            alt="Minha foto de perfil"
          />
        </div>
      </section>

      <section id="sobre">
        <h1>Sobre mim</h1>
      </section>

      <section id="projetos">
        <h1>Meus projetos</h1>
      </section>

      <section id="experiencias">
        <h1>Experiências</h1>
      </section>

      <section id="contato">
        <h1>Contato</h1>
      </section>
    </main>
  );
}
