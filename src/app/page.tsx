import { Inicio } from '../components/Inicio';
import { Sobre } from '../components/Sobre';
import { ComoAjudo } from '../components/ComoAjudo';
import { Avaliacao } from '../components/Avaliacao';
import { Atendimento } from '../components/Atendimento';
import { Espaco } from '../components/Espaco';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export default function Home() {
  return (
    <>
      <main>
        <Inicio />
        <Sobre />
        <ComoAjudo />
        <Avaliacao />
        <Atendimento />
        <Espaco />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
