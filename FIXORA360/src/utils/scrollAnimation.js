// Scroll animation utility
const ANIMATION_SELECTORS = ['.fade-in-up', '.fade-in', '.slide-in-right', '.scale-in', '.slide-up-fade']

export const observeElements = () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(ANIMATION_SELECTORS.join(','))
  animatedElements.forEach(el => {
    el.classList.remove('animate-in')
    observer.observe(el)
  })

  return observer
}

