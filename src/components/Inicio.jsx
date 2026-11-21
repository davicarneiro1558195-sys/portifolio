export default function Inicio() {
    return (
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
                    src="/perfil.png"
                    alt="Minha foto de perfil"
                />
            </div>
        </section>
    );
}