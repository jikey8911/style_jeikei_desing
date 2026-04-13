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

  // Sistema de destellos (ondas expansivas)
  const ripples: { x: number, y: number, radius: number, alpha: number }[] = []

  // Escuchar clics en cualquier parte de la ventana
  window.addEventListener("click", (e) => {
    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 0,       // Empieza en el punto del clic
      alpha: 1         // Máxima intensidad inicial
    })
  })

  // Mantenemos 200 nodos para tener densidad sin sacrificar rendimiento
  const nodes = Array.from({ length: 400 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  }))

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 1. Actualizar la expansión de los destellos
    ripples.forEach((r) => {
      r.radius += 15    // Velocidad de la onda a través de la red
      r.alpha -= 0.015  // Velocidad a la que se apaga
    })

    // Limpiar de la memoria los destellos que ya se apagaron
    for (let i = ripples.length - 1; i >= 0; i--) {
      if (ripples[i].alpha <= 0) ripples.splice(i, 1)
    }

    // 2. Dibujar nodos y conexiones
    nodes.forEach((n) => {
      n.x += n.vx
      n.y += n.vy

      // Rebote en los bordes
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1

      // Calcular cuánta luz (highlight) recibe este nodo de cualquier destello activo
      let highlight = 0
      ripples.forEach(r => {
        const distToClick = Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2))
        const distanceToWaveFront = Math.abs(distToClick - r.radius)

        // Si el nodo está a menos de 80px del frente de la onda, se ilumina
        if (distanceToWaveFront < 80) {
          const waveIntensity = 1 - (distanceToWaveFront / 80)
          highlight = Math.max(highlight, waveIntensity * r.alpha)
        }
      })

      // Conexiones entre nodos
      nodes.forEach((m) => {
        const dx = n.x - m.x
        const dy = n.y - m.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 140) {
          const distanceFade = 1 - dist / 140

          // Combinar la transparencia base con el brillo del clic
          const baseAlpha = distanceFade * 0.15
          const finalAlpha = baseAlpha + (highlight * 0.8)

          // Color Azul/Cian "ONLINE" (37, 150, 190)
          ctx.strokeStyle = `rgba(37, 150, 190, ${finalAlpha})`

          // La línea se hace un poco más gruesa cuando pasa el destello
          ctx.lineWidth = highlight > 0.1 ? 1.5 : 0.8

          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(m.x, m.y)
          ctx.stroke()
        }
      })

      // Conexión interactiva con el mouse (Mantiene su propio brillo)
      const dx = n.x - mouse.x
      const dy = n.y - mouse.y
      const distToMouse = Math.sqrt(dx * dx + dy * dy)

      if (distToMouse < 160) {
        ctx.strokeStyle = `rgba(37, 150, 190, ${1 - distToMouse / 160})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(n.x, n.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()
      }

      // Dibujar el punto del nodo
      const nodeRadius = 2 + (highlight * 3) // El nodo "palpita" creciendo cuando pasa la onda
      const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, nodeRadius * 4)

      // El centro del nodo es muy brillante, el borde se difumina
      gradient.addColorStop(0, `rgba(37, 150, 190, ${0.6 + highlight})`)
      gradient.addColorStop(1, "rgba(37, 150, 190, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(n.x, n.y, nodeRadius, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(draw)
  }

  draw()
}