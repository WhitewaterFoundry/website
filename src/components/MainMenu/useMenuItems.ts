import { useStaticQuery, graphql } from "gatsby"
import MenuItem from "./MenuItem"

type MenuItemsQueryData = {
  allMenuItemsJson: {
    edges: {
      node: MenuItem
    }[]
  }
}

const getMenuItems = (data: MenuItemsQueryData) =>
  data.allMenuItemsJson.edges.map(edge => edge.node)

export const useMenuItems = () => {
  const data = useStaticQuery(graphql`
    query menuItemsQuery {
      allMenuItemsJson {
        edges {
          node {
            link
            title
            id
          }
        }
      }
    }
  `)

  return getMenuItems(data)
}
