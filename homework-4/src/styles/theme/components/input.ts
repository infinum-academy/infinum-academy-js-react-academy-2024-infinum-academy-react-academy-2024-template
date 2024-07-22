import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    py: 4,
    pl: 12,
    borderRadius: "inputRadius",
    _placeholder: {
      color: 'white',
    }
  },
  element:{
    ml: 3,
  }
})

const Input = defineMultiStyleConfig({ baseStyle })

export default Input;