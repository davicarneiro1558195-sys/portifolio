import './A'

export default function App() {
  return (
    <main>
      <section className="inicio" id="inicio">
        <div className="intro">
          <p className="etiqueta">OLÁ, EU SOU</p>

          <h1>
            Davi Lavalle
            <br />
            <span>Carneiro</span>
          </h1>

          <h2>
            técnico de TI (Tecnologia da Informação) | Engenharia de Software
          </h2>

          <p>
            Estou construindo minha trajetória na tecnologia,
            aprendendo desenvolvimento web e criando projetos
            que transformam ideias em soluções.
          </p>

          <div className="acoes">
            <a className="btn principal" href="#projetos">
              Conheça meus projetos ↗
            </a>

            <a className="btn" href="#contato">
              Entre em contato
            </a>
          </div>
        </div>

        <div className="foto-area">
          <div className="halo"></div>

          <img
            className="foto-perfil"
            src="/assets/foto.jpg"
            alt="Foto de Davi Lavalle Carneiro"
          />

          <span className="selo">
            Desenvolvedor em formação
          </span>
        </div>
      </section>
    </main>
  );
}
