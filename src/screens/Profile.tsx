import { ScrollView, TouchableOpacity } from "react-native";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import * as ImagePicker from 'expo-image-picker';

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export function Profile() {

  async function handleUserPhotoSelect() {
    console.log("Selecionar foto do usuário");
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
  }

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
          <TouchableOpacity
            onPress={handleUserPhotoSelect}
            activeOpacity={0.7}
          >
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