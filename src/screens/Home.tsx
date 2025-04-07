import { useState } from "react";

import { GroupTabs } from "@components/GroupTabs";
import { HomeHeader } from "@components/HomeHeader";
import { Center, HStack, Text, VStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native";

export function Home() {
  const [groupSelected, setgroupSelected] = useState("Costas");

  const [groups, setGroups] = useState([
    "Costas", "Ombros", "Peito", "Braços", "Pernas", "Abdômen",
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupTabs
            name={item}
            isActive={groupSelected === item}
            onPress={() => setgroupSelected(item)}
            marginRight={16}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ marginVertical: 16, maxHeight: 50, minHeight: 50 }}
      />

    </VStack>
  );
}