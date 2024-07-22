import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const cardStyle = {
  baseStyle: definePartsStyle({
    container: {
      borderRadius: "cardRadius",
      h: "auto",
      boxShadow: "0px 0px 9px 0px #000000B2",
    }
  }),
  variants: {
    primary: {
      container: {
        bg: 'purple',
        color: '#fff',
        w: "500px",
        p: 14
      }
    },
    secondary: {
      container: {
        bg: '#fff',
        color: 'purple',
        w: "240px"
      }
    }
  }
}
const Card = defineMultiStyleConfig(cardStyle)
export default Card;
