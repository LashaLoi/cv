import { useState, useEffect, useRef } from "react"

export const useHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const height = headerRef.current?.clientHeight

    height && setHeaderHeight(height)
  }, [headerRef])

  return { headerRef, headerHeight }
}
