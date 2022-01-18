import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w={"100%"} my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} >
          <Heading size={"lg"} fontWeight={"normal"}>Ciar Usuário</Heading>

          <Divider my={"6"} borderColor={"gray.700"} />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid
              minChildWidth={"240px"}
              spacing={["6", "8"]}
              width={"100%"}
            >
              <Input name="name" label="Nome Completo" />
              <Input name="email" type={"email"} label="E-mail" />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth={"240px"}
              spacing={"8"}
              width={"100%"}
            >
              <Input name="password" type={"password"} label="Senha" />
              <Input name="password_confirmation" type={"password"} label="Confirme sua senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt={"8"} justify={"flex-end"}>
            <HStack spacing={"4"}>
              <Link href={"/users"} passHref>
                <Button as="a" colorScheme={"whiteAlpha"}>Cancelar</Button>
              </Link>
              <Button colorScheme={"pink"}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}