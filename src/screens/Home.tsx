import { GroupTabs } from "@components/GroupTabs";
import { HomeHeader } from "@components/HomeHeader";
import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack alignItems="center" justifyContent="center" gap={"$4"}>
        <GroupTabs name="Exercícios"/>
        <GroupTabs name="Exercícios" isActive/>
        <GroupTabs name="Exercícios"/>
      </HStack>
    </VStack>
  );
}