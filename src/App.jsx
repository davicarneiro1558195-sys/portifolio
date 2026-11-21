import Header from './components/Header';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Experiencias from './components/Experiencias';
import Contato from './components/Contato';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <Sobre />
        <Projetos />
        <Experiencias />
        <Contato />
      </main>
    </>
  );
}