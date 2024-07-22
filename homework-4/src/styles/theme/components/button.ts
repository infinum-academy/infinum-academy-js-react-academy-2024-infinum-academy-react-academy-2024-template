import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
    textTransform: "uppercase"
  },
  sizes: {
    md: {
      fontSize: "md",
      px: 47,
      py: 19,
      h: "auto"
    }
  },
  variants: {
    solid: {
      bg: "#fff",
      color: "#371687",
      _hover: {
        bg: "lightgrey",
      },
    }
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

export default Button;