'use client';
import { useEffect, useState } from 'react';

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/davicarneiro1558195-sys/repos?sort=updated&per_page=100')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        return res.json();
      })
      .then((dados) => {
        setRepos(dados.filter((repo) => !repo.fork));
      })
      .catch((erro) => console.error(erro))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <section className="projetos" id="projetos">
      <h2>Meus projetos</h2>

      <p>
        Confira meus projetos desenvolvidos durante minha
        trajetória de aprendizado em programação.
      </p>

      {carregando ? (
        <p>Carregando projetos...</p>
      ) : (
        <div className="lista-projetos">
          {repos.map((repo) => (
            <div className="projeto" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description || 'Projeto sem descrição.'}</p>
              <p>
                <strong>Linguagem:</strong>{' '}
                {repo.language || 'Não informada'}
              </p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                Ver projeto no GitHub ↗
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
