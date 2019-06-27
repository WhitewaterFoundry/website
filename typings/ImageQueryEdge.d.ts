type ImageQueryEdge = {
  node: {
    id: string
    childImageSharp: {
      fluid: Fluid
    }
  }
}

type Fluid = {
  srcSet: string
  src: string
  sizes: string
  aspectRatio: number
}
