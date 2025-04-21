import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Center flex={1} mt="$8" mb="$8" px="$8">
          <UserPhoto
            source={{ uri: "https://github.com/keidsondesigner.png" }}
            alt="Foto do usuário"
            size="lg"
          />
          <TouchableOpacity>
            <Text fontSize="$md" fontWeight="bold" mt="$2" color="$green500">
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$4" mt="$8" mb="$6">
            <Heading
              alignSelf="flex-start"
              fontSize="$md"
              fontWeight="bold"
              color="$white"
            >
              Informações pessoais
            </Heading>
            <Input placeholder="Nome" />
            <Input
              placeholder="Email"
              value="keidsondev@gmail.com"
              isReadOnly
            />
          </Center>

          <Center w="$full" gap="$4" mb="$6">
            <Heading
              alignSelf="flex-start"
              fontSize="$md"
              fontWeight="bold"
              color="$white"
            >
              Alterar senha
            </Heading>
            <Input placeholder="Senha antiga" secureTextEntry />
            <Input placeholder="Senha nova" secureTextEntry />
            <Input placeholder="Confirmar senha" secureTextEntry />
            <Button title="Atualizar" w="$full" mt="$6" />
          </Center>

        </Center>
      </ScrollView>

    </VStack>
  );
}