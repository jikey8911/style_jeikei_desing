// 1. Exportamos los estilos globales
import './index.css';

// 2. Exportamos los componentes UI
export { default as NeoButton } from './components/NeoButton';
export { default as NeoCard } from './components/NeoCard';
export { default as NeoToggle } from './components/NeoToggle';
export { default as NeoProgressBar } from './components/NeoProgressBar';
export { default as NeoTable } from './components/NeoTable';
export { default as NeoModal } from './components/NeoModal';
export { default as NeoInput } from './components/NeoInput';
export { default as NeoTextArea } from './components/NeoTextArea';
export { default as NeoAlert } from './components/NeoAlert';
export { default as NeoLoader } from './components/NeoLoader';
export { default as NeoTabs } from './components/NeoTabs';
export { default as NeoTooltip } from './components/NeoTooltip';

// 3. Exportamos las funciones core
export { initNeural } from './core/neural';