// 1. Exportamos los estilos globales para que el otro proyecto los reciba
import './index.css';

// 2. Exportamos los componentes
export { default as NeoButton } from './components/NeoButton';
export { default as NeoCard } from './components/NeoCard';
export { default as NeoToggle } from './components/NeoToggle';
export { default as NeoProgressBar } from './components/NeoProgressBar';

// 3. Exportamos las funciones core (la red neuronal)
export { initNeural } from './core/neural';