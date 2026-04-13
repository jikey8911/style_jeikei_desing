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
     // ...
   }
   ```

---

## 🧩 Componentes Disponibles

### 1. NeoCard (Panel de Cristal)
Panel holográfico con refracción de luz, efecto de scanlines y bordes reactivos según el estado.

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | `string` | Título técnico del módulo. |
| `value` | `string`\|`number` | Dato principal a resaltar. |
| `status` | `string` | Texto de estado inferior (ej: "SYNCED"). |
| `variant` | `'cyan'`\|`'magenta'` | Color del destello de cristal y texto LED. |

**Uso:**
```typescript
<NeoCard title="CPU_USAGE" value="42%" status="OPTIMAL" variant="cyan" />
```

### 2. NeoButton (Botón Táctico)
Botones con efecto neón y respuesta visual táctica.

| Variante | Uso Recomendado |
| :--- | :--- |
| `cyan` | Acciones estándar o confirmaciones. |
| `magenta` | Acciones críticas o de sistema. |
| `outline` | Acciones secundarias o navegación. |

**Uso:**
```typescript
<NeoButton variant="cyan">OVERRIDE_PROTOCOL</NeoButton>
```

### 3. NeuralBackground (Fondo Vivo)
Sistema de red neuronal reactiva al puntero y ondas expansivas al hacer clic.

**Uso en App:**
```typescript
import { useEffect } from 'react';
import { initNeural } from './core/neural'; // O desde la librería

function HUD() {
  useEffect(() => {
    const canvas = document.getElementById("neural") as HTMLCanvasElement;
    if (canvas) initNeural(canvas);
  }, []);

  return <canvas id="neural" className="fixed inset-0 z-0 opacity-60" />;
}
```

---

## 🎨 Utilidades de Estilo (CSS)
La librería exporta clases de utilidad para aplicar el estilo "Glow" a cualquier texto:
- `.text-glow-cyan`: Resplandor azul técnico.
- `.text-glow-magenta`: Resplandor de error o acción crítica.
- `.glass-panel`: Clase base para convertir cualquier div en un panel de cristal.

---

## 🛠 Próximos Componentes (Roadmap)
- **NeoToggle**: Interruptor de energía para encender/apagar módulos.
- **NeoProgressBar**: Barra de carga segmentada (estilo bloques).
- **NeoModal**: Ventana de cristal de superposición para alertas críticas.
- **NeoInput**: Terminal de entrada de comandos con cursor parpadeante.
- **NeoTable**: Tabla de datos estructurados para logs y transacciones.

---

## 🏗 Desarrollo
Para añadir nuevos componentes o modificar el estilo:
1. Levantar servidor de diseño (Showroom): `pnpm dev`
2. Compilar librería para producción: `pnpm build`