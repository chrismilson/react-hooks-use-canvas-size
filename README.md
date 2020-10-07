# Use Canvas Size

Often when using canvases it is important to know the dimensions of the actual
box in the dom.

This hook will give you the dimensions when supplied with a ref to the canvas.

## Installation

```bash
yarn add react-hooks-use-canvas-size
```

## Usage

To find the size of a canvas.

```jsx
import React, { useRef, useEffect } from 'react'
import useCanvasSize from 'react-hooks-use-canvas-size'

const BigOlSquare = () => {
  const canvasRef = useRef()
  const { width, height } = useCanvasSize(canvasRef)

  useEffect(() => {})
}
```
