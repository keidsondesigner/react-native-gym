import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState("https://github.com/keidsondesigner.png");

  async function handleUserPhotoSelect() {
    console.log("Selecionar foto do usuário");
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (photoSelected.canceled) {
      return;
    }

    const photoURI = photoSelected.assets[0].uri;

    if (photoURI) {
      const photoInfo = await FileSystem.getInfoAsync(photoURI);

      if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
        return alert("Essa imagem é muito grande. Escolha uma de até 5MB");
      }

      setUserPhoto(photoURI);
    }

  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Center flex={1} mt="$8" mb="$8" px="$8">
          <UserPhoto
            source={{ uri: userPhoto }}
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