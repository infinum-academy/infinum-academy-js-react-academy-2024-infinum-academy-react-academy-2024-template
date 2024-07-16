import { chakra, Flex, Spinner } from "@chakra-ui/react";

export default function LoadingSpinner() {
  return (
    <chakra.div
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Flex alignItems="center" gap="10px">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        Loading...
      </Flex>
    </chakra.div>
  );
}
