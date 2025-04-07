import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { FlatList } from "react-native";
import { GroupTabs } from "@components/GroupTabs";
import { HomeHeader } from "@components/HomeHeader";
import { Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groupSelected, setgroupSelected] = useState("Costas");
  const [groups, setGroups] = useState(["Costas", "Ombros", "Peito", "Braços", "Pernas", "Abdômen",]);
  const [exercises, setExercises] = useState([
    { group: "Costas", name: "Puxada frontal", description: "3 series x 12 repetições", id: "1", image: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Puxada-Alta-Aberta.gif" },
    { group: "Costas", name: "Remada curvada", description: "3 series x 12 repetições", id: "2", image: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Remada-Curvada-com-Barra-Pronada.gif" },
    { group: "Ombro", name: "Encolhimenoto", description: "3 series x 12 repetições", id:"3", image: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Encolhimento-de-ombros-na-Maquina.gif" },
    { group: "Bíceps", name: "Rosca direta", description: "3 series x 12 repetições", id: "5", image: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Rosca-Direta-Aberta-com-Barra.gif" },
    { group: "Triceps", name: "Agachamento sumô", description: "3 series x 12 repetições", id: "6", image: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Agachamento-sumor-com-Halter.gif" },
    { group: "Ombro", name: "Elevação frontal", description: "3 series x 12 repetições", id: "7", image: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Frontal-com-Halteres.gif" },
  ]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    console.log('Navegando para a tela de exercícios');
    navigation.navigate('exercise');
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupTabs
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setgroupSelected(item)}
            marginRight={16}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ marginVertical: 16, maxHeight: 50, minHeight: 50 }}
      />

      <VStack px="$8">
        <HStack justifyContent="space-between" alignItems="center" mb="$4">
          <Heading color="$gray200" fontSize="$md">Exercicios</Heading>
          <Text color="$gray200" fontSize="$sm">{exercises.length}</Text>
        </HStack>
      </VStack>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExerciseCard
            data={item}
            onPress={() => handleOpenExerciseDetails()}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ paddingHorizontal: 24 }}
      />

    </VStack>
  );
}