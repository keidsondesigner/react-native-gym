import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { LogOut } from "lucide-react-native";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap={"$4"}>
      <UserPhoto source={{ uri: 'https://github.com/keidsondesigner.png' }} size="sm" />

      <VStack flex={1}>
        <Text fontSize="$md" color="$gray100">Olá</Text>
        <Heading fontSize="$sm" color="$white">Keidson Roby</Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  );
}