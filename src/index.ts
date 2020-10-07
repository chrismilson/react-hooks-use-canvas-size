import { useEffect, useState, MutableRefObject } from 'react'

/**
 * Provides the width and height of a referenced canvas in the dom.
 *
 * ***Note:*** this method assumes the width and height of the canvas will not
 * change unless the window width has changed.
 *
 * @param canvasRef A reference to the canvas element.
 */
export default function useCanvasSize(
  canvasRef: MutableRefObject<HTMLCanvasElement>
) {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!canvasRef.current) return
    const getSize = () => {
      const width = canvasRef.current.offsetWidth
      const height = canvasRef.current.offsetHeight
      setSize({ width, height })
    }
    getSize()
    window.addEventListener('resize', getSize)
    return () => window.removeEventListener('resize', getSize)
  }, [canvasRef])

  return size
}
