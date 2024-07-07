"use client";

import { Button } from "@chakra-ui/react";

export const StyledButton = ({
  label,
  type = "button",
}: {
  label: string;
  type?: "button" | "submit";
}) => (
  <Button
    borderRadius="3xl"
    mb={4}
    variant="solid"
    type={type}
    sx={{
      bg: "white",
      color: "black",
      border: "1px solid white",
      _hover: {
        bg: "purple.700",
        border: "1px solid white",
        color: "white",
      },
    }}
  >
    {label}
  </Button>
);
