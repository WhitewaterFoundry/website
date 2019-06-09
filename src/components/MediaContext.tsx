import React from "react"
export const MediaContext = React.createContext<{ media: string | null; portrait: boolean }>({
  media: null,
  portrait: false,
})
