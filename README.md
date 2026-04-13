# 💎 JEIKEI-UI: HUD Kit
**Versión:** 1.0.0  
**Estética:** Hard Sci-Fi / Crystalline HUD  
**Arquitecto:** Juan Guzman (JeiKei)

`JEIKEI-UI` es una librería de componentes tácticos de alta fidelidad visual, diseñada específicamente para interfaces de supervisión de agentes de IA y estaciones de misión control. Basada en **React**, **Tailwind CSS v3** y **Física de Partículas**.

---

## 🚀 Instalación Rápida

1. **Instalar el paquete:**
   ```bash
   pnpm add @tu-usuario/jeikei-ui
   ```

2. **Importar Estilos Globales:**
   En tu archivo de entrada principal (`main.tsx` o `App.tsx`):
   ```typescript
   import '@tu-usuario/jeikei-ui/style.css';
   ```

3. **Configurar Tailwind (Indispensable):**
   Añade la ruta de la librería en tu `tailwind.config.js` para que los estilos se apliquen a los componentes importados:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
       "./node_modules/@tu-usuario/jeikei-ui/dist/**/*.js" // <--- Añade esto
     ],
     theme: {
       extend: {
         colors: {
           neo: {
             cyan: "#00ffe0",
             magenta: "#ff007f",
             amber: "#ffb000",
             bg: "#020202"
           }
         }
       }
     }
   }
   ```

---

## 🧩 Componentes Disponibles

### 1. NeoCard (Panel de Cristal)
Panel holográfico con refracción de luz, efecto de scanlines y bordes reactivos.

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | `string` | Título técnico del módulo. |
| `value` | `string`\|`number` | Dato principal a resaltar. |
| `status` | `string` | Texto de estado inferior (ej: "SYNCED"). |
| `variant` | `'cyan'`\|`'magenta'` | Color del destello de cristal y texto LED. |

### 2. NeoButton (Botón Táctico)
Botones con efecto neón, sombreado LCD y animación de barrido de luz.

| Variante | Uso Recomendado |
| :--- | :--- |
| `cyan` | Acciones estándar. |
| `magenta` | Acciones de sistema. |
| `danger` | Acciones críticas (Kill/Stop). |
| `outline` | Navegación o secundaria. |
| `tag-*` | Etiquetas de texto pequeñas (INFO, ALERT, ERROR). |

### 3. NeoTable (Data Stream)
Tabla de datos estructurados con efecto de escaneo dinámico en filas al pasar el ratón.
- **Props**: `headers: string[]`, `data: any[]`, `color: 'cyan' | 'orange' | 'red'`.

### 4. NeoModal (Crystalline Overlay)
Ventana de superposición con desenfoque de fondo y bordes de cristal.
- **Props**: `isOpen: boolean`, `onClose: () => void`, `title: string`, `variant: 'cyan' | 'magenta'`.

### 5. NeoInput / NeoTextArea
Campos de entrada con etiquetas flotantes y estados de error "Glow".
- **Props**: `label: string`, `error?: string`, `variant: 'cyan' | 'magenta'`.

### 6. NeoProgressBar / NeoLoader
Indicadores de progreso segmentados y spinners de carga con tipografía táctica.
- **Props**: `value: number (0-100)`, `label?: string`, `variant: 'cyan' | 'magenta'`.

### 7. NeoToggle (Energy Switch)
Interruptor de energía con retroiluminación para control de módulos.
- **Props**: `label: string`, `checked: boolean`, `onChange: (val: boolean) => void`.

### 8. NeoTabs / NeoTooltip
Componentes de navegación y ayuda contextual con estética HUD.
- **Tabs**: `tabs: {id, label, content}[]`, `activeTab: string`.
- **Tooltip**: `content: string`, `position: 'top' | 'bottom' | 'left' | 'right'`.

### 9. NeuralBackground (initNeural)
Sistema de red neuronal reactiva al puntero y ondas expansivas al hacer clic.

**Uso:**
```typescript
import { useEffect } from 'react';
import { initNeural } from '@tu-usuario/jeikei-ui';

function HUD() {
  useEffect(() => {
    const canvas = document.getElementById("neural") as HTMLCanvasElement;
    if (canvas) initNeural(canvas);
  }, []);

  return <canvas id="neural" className="fixed inset-0 z-0 opacity-40 pointer-events-none" />;
}
```

---

## 🎨 Utilidades de Estilo (CSS)
- `.text-glow-cyan/magenta/amber`: Efecto de resplandor LED.
- `.glass-panel`: Fondo de cristal con desenfoque.
- `.glow-cyan/magenta`: Sombra externa de neón.

---

## 🏗 Desarrollo y Construcción
- `pnpm dev`: Servidor de desarrollo con HMR.
- `pnpm build`: Compila la librería en formatos ES y UMD dentro de `/dist`.