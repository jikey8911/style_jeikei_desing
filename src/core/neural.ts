export function initNeural(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()
  window.addEventListener("resize", resize)

  const mouse = { x: 0, y: 0 }

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  // Ahora cada onda (ripple) guarda su propio color y velocidad
  const ripples: { x: number, y: number, radius: number, alpha: number, color: string, speed: number }[] = []

  // 🧠 FUNCIÓN INTELIGENTE: Detecta el color del botón o input
  const getInteractionColor = (element: Element | null) => {
    if (!element) return "0, 229, 255"; // Cian por defecto

    const html = element.outerHTML.toLowerCase();

    // Búsqueda ESTRICTA de códigos hexadecimales y clases exactas
    // (Evita confundirse con palabras aleatorias en el código)
    if (html.includes('#ff003c') || html.includes('text-glow-red') || html.includes('bg-[#ff003c]')) {
      return "255, 0, 60"; // Rojo (Solo alertas críticas)
    }

    if (html.includes('#ff6400') || html.includes('text-glow-orange') || html.includes('bg-[#ff6400]')) {
      return "255, 100, 0"; // Naranja (Warnings)
    }

    if (html.includes('#ff00ff') || html.includes('text-glow-magenta')) {
      return "255, 0, 255"; // Magenta
    }

    // Si no encuentra los códigos exactos de arriba, SIEMPRE será CIAN
    return "0, 229, 255";
  }

  // 🖱️ REACCIÓN AL CLIC
  window.addEventListener("click", (e) => {
    const target = e.target as Element;

    // EL FIX: Quitamos el 'div' genérico. Ahora solo escanea elementos interactivos reales.
    // Si haces clic en el fondo (canvas o body), 'clickable' será null.
    const clickable = target.closest('button, .glass-panel, input, textarea');

    const color = getInteractionColor(clickable);

    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 0,
      alpha: 1, // Onda fuerte para clics
      color: color,
      speed: 15 // Velocidad estándar
    })
  })

  // ⌨️ REACCIÓN AL TECLADO
  window.addEventListener("keydown", (e) => {
    // Ignoramos teclas de control para no spamear la red
    if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(e.key)) return;

    const active = document.activeElement;
    let x = Math.random() * canvas.width;
    let y = canvas.height;
    let color = "0, 229, 255";

    // Si estás escribiendo en un input, la onda sale de ahí
    if (active && active.getBoundingClientRect && active.tagName !== 'BODY') {
      const rect = active.getBoundingClientRect();
      // Hace que las ondas salgan de lugares aleatorios a lo largo de la caja de texto
      x = rect.left + (Math.random() * rect.width);
      y = rect.top + (rect.height / 2);
      color = getInteractionColor(active);
    }

    ripples.push({
      x,
      y,
      radius: 0,
      alpha: 0.4, // Ondas más suaves para el teclado (para no cegarte al escribir rápido)
      color: color,
      speed: 25 // Ondas más rápidas, estilo "transmisión de datos"
    })
  })

  // Generamos los nodos
  const nodes = Array.from({ length: 200 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  }))

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 1. Expandir ondas
    ripples.forEach((r) => {
      r.radius += r.speed
      r.alpha -= r.speed * 0.0012 // Se desvanecen gradualmente
    })

    // Limpiar ondas muertas
    for (let i = ripples.length - 1; i >= 0; i--) {
      if (ripples[i].alpha <= 0) ripples.splice(i, 1)
    }

    // 2. Dibujar red neuronal
    nodes.forEach((n) => {
      n.x += n.vx
      n.y += n.vy

      if (n.x < 0 || n.x > canvas.width) n.vx *= -1
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1

      let highlight = 0
      let nodeColor = "0, 229, 255" // Color base del nodo

      // Verificar si alguna onda está golpeando este nodo
      ripples.forEach(r => {
        const dist = Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2))
        const distanceToWaveFront = Math.abs(dist - r.radius)

        if (distanceToWaveFront < 80) {
          const waveIntensity = 1 - (distanceToWaveFront / 80)
          const impact = waveIntensity * r.alpha

          // Si el impacto es fuerte, el nodo ABSORBE el color de esa onda
          if (impact > highlight) {
            highlight = impact
            nodeColor = r.color
          }
        }
      })

      // Conexiones entre nodos
      nodes.forEach((m) => {
        const dx = n.x - m.x
        const dy = n.y - m.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 140) {
          const distanceFade = 1 - dist / 140
          const baseAlpha = distanceFade * 0.15
          const finalAlpha = baseAlpha + (highlight * 0.8)

          // La línea brilla con el color de la onda
          ctx.strokeStyle = `rgba(${nodeColor}, ${finalAlpha})`
          ctx.lineWidth = highlight > 0.1 ? 1.5 : 0.8

          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(m.x, m.y)
          ctx.stroke()
        }
      })

      // Conexión con el mouse (mantiene el color base suave)
      const dxMouse = n.x - mouse.x
      const dyMouse = n.y - mouse.y
      const distToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

      if (distToMouse < 160) {
        ctx.strokeStyle = `rgba(0, 229, 255, ${0.4 * (1 - distToMouse / 160)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(n.x, n.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()
      }

      // Dibujar el punto brillante (Nodo)
      const nodeRadius = 2 + (highlight * 3)
      const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, nodeRadius * 4)

      gradient.addColorStop(0, `rgba(${nodeColor}, ${0.6 + highlight})`)
      gradient.addColorStop(1, `rgba(${nodeColor}, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(n.x, n.y, nodeRadius, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(draw)
  }

  draw()
}