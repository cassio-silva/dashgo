import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function Profile() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      align={"center"}
    >
      {
        isWideVersion && (
          <Box>
            <Text>Cássio Silva</Text>
            <Text color="gray.300" fontSize={"small"}>cassioglopesdasilva@hotmail.com</Text>
          </Box>
        )
      }
      <Avatar
        size="md"
        name="Cassio Silva"
        src="https://github.com/cassio-silva.png"
      />
    </Flex>
  )
}