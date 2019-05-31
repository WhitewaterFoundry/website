import { useEffect, useState } from "react"
const THROTTLE = 20

export const useMediaQueries = (queries: Array<string[]>, setCurrentMedia: Function) => {
  const [windowSize, setWindowSize] = useState<number>(0)

  const windowListener = () => {
    if (window.innerWidth > windowSize + THROTTLE || window.innerWidth < windowSize - THROTTLE) {
      setWindowSize(window.innerWidth)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", windowListener)
    return () => window.removeEventListener("resize", windowListener)
  })

  useEffect(() => {
    setWindowSize(window.innerWidth)

    const querySet: Map<string, boolean> = new Map()

    queries.forEach(([key, query]) => {
      querySet.set(key, window.matchMedia(query).matches)
    })

    setCurrentMedia(getMedia(querySet))
  }, [windowSize, queries, setCurrentMedia])
}

const getMedia = (queries: Map<string, boolean>) => {
  let matchedQuery = ""
  queries.forEach((val, key) => {
    if (val) {
      matchedQuery = key
    }
  })
  return matchedQuery
}
