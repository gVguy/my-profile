export class SpaceEffect {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private stars: Star[] = []
  private animationFrameId: number | null = null
  private isLightSpeed: boolean = false
  private transitionProgress: number = 0
  private transitionSpeed: number = 0.02
  private abortController: AbortController = new AbortController()

  private readonly STARS_PER_PX = 0.1
  private readonly SPEED_NORMAL = 0.2
  private readonly SPEED_LIGHT = 15
  
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    this.resizeCanvas()
    window.addEventListener('resize', () => this.resizeCanvas(), { signal: this.abortController.signal })
    this.initStars()
  }

  private resizeCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.initStars()
  }

  private initStars() {
    this.stars = []
    const starCount = this.canvas.width * this.STARS_PER_PX
    for (let i = 0; i < starCount; i++) {
      this.stars.push(new Star({
        x: Math.random() * this.canvas.width, 
        y: Math.random() * this.canvas.height,
        size: Math.random() * 1 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        speedFactor: Math.random() * 0.002 + 0.001,
      }))
    }
  }

  start() {
    if (this.animationFrameId !== null) return
    this.animate()
  }

  stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
    }
  }

  speedOfLight() {
    this.isLightSpeed = true
  }

  normalSpeed() {
    this.isLightSpeed = false
  }

  destroy() {
    this.stop()
    this.abortController.abort()
  }

  private animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate())
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
    if (this.isLightSpeed) {
      this.transitionProgress = Math.min(1, this.transitionProgress + this.transitionSpeed)
    } else {
      this.transitionProgress = Math.max(0, this.transitionProgress - this.transitionSpeed)
    }
    
    const currentSpeed = this.SPEED_NORMAL + (this.SPEED_LIGHT - this.SPEED_NORMAL) * this.transitionProgress
    const centerX = this.canvas.width / 2
    const centerY = this.canvas.height / 2

    this.stars.forEach(star => {
      const dx = star.x - centerX
      const dy = star.y - centerY
      
      star.x += dx * currentSpeed * star.speedFactor
      star.y += dy * currentSpeed * star.speedFactor
      
      if (star.opacity < star.maxOpacity) {
        star.opacity += this.isLightSpeed ? 0.05 : 0.001
      }
      
      if (Math.abs(star.x - centerX) > this.canvas.width / 2 || Math.abs(star.y - centerY) > this.canvas.height / 2) {
        star.x = Math.random() * this.canvas.width
        star.y = Math.random() * this.canvas.height
        star.opacity = 0
      }
      
      this.ctx.beginPath()
      if (this.transitionProgress > 0) {
        const streakLength = star.size * 10 * this.transitionProgress
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`
        this.ctx.lineWidth = star.size * (1 - this.transitionProgress * 0.5)
        this.ctx.moveTo(star.x, star.y)
        this.ctx.lineTo(star.x + dx * streakLength * 0.05, star.y + dy * streakLength * 0.05)
        this.ctx.stroke()
      } else {
        this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        this.ctx.fill()
      }
    })
  }
}

class Star {
  x: number
  y: number
  size: number
  opacity: number
  maxOpacity: number
  speedFactor: number
  
  constructor(opts: Omit<Star, 'maxOpacity'>) {
    this.x = opts.x
    this.y = opts.y
    this.size = opts.size
    this.opacity = opts.opacity
    this.maxOpacity = opts.opacity
    this.speedFactor = opts.speedFactor
  }
}
