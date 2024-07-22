import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import Button from "./components/button";
import Card from "./components/card";
import radii from "./foundations/radius";
import Input from "./components/input";

const colors = {
  lightpurple: "#8D5CE5",
  purple: "#371687",
  darkpurple: "#1B004C",
  pink: "#FF2498"
}

const fonts = {
  body: "Roboto, sans-serif",
  heading: "Roboto, sans-serif"
}

const styles = {
  global: {
    "html, body": {
      color: "white",
      bg: colors.darkpurple,
    },
    "#body": {
      m: 0,
      p: 0,
      color: "#fff",
      position: "relative",
      minHeight: "100vh",
    }
  },
};

const theme = extendTheme({
  components: {
    Button,
    Card,
    Input
  },
  fonts,
  colors,
  radii,
  styles
});

export default theme;