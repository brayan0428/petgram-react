import { useRef, useState, useEffect } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const loadPolyfill = async () => {
      try {
        await import('intersection-observer')
      } catch (error) {
        console.error(error)
      }
    }
    !window.IntersectionObserver && loadPolyfill()

    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        observer.disconnect()
        setShow(true)
      }
    })

    observer.observe(element.current)
  }, [element])

  return [show, element]
}
