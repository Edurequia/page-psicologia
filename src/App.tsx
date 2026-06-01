import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Inicio } from './components/Inicio';
import { Sobre } from './components/Sobre';
import { ComoAjudo } from './components/ComoAjudo';
import { Atendimento } from './components/Atendimento';
import { Footer } from './components/Footer';
import { Espaco } from './components/Espaco';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      
      <main>
        <Inicio />
        <Sobre />
        <ComoAjudo />
        <Atendimento />
        <Espaco />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;