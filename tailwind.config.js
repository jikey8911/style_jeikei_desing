/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: "#1c1c1c",      /* Gris muy oscuro (Fondo) */
          card: "#2c3e50",    /* Gris azulado (Tarjetas) */
          online: "#2596be",  /* Azul/Cian (ONLINE) */
          offline: "#e74c3c", /* Rojo intenso (OFFLINE/Error) */
          running: "#2ecc71"  /* Verde vibrante (RUNNING) */
        }
      }
    }
  },
  plugins: [],
}