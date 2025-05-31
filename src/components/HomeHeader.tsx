import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { LogOut } from "lucide-react-native";
import { useAuth } from "@hooks/useAuth";

import defaultUserImg from "@assets/userPhotoDefault.png";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap={"$4"}>
      <UserPhoto source={ user.avatar ? { uri: user.avatar } : defaultUserImg } size="sm" />

      <VStack flex={1}>
        <Text fontSize="$md" color="$gray100">Olá</Text>
        <Heading fontSize="$sm" color="$white">{ user.name }</Heading>
      </VStack>

      <TouchableOpacity
        onPress={signOut}
      >
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>

    </HStack>
  );
}