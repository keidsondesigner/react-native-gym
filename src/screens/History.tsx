import { useState } from 'react';
import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Box, Heading, Text, VStack } from '@gluestack-ui/themed';
import { SectionList } from 'react-native';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '22/10/2025',
      data: [
        { group: 'Costas', description: 'Remada unilateral', hour: '18:00' },
        { group: 'Bíceps', description: 'Rosca direta', hour: '19:00' }
      ]
    },
    {
      title: '21/10/2025',
      data: [
        { group: 'Peito', description: 'Supino reto', hour: '18:30' },
        { group: 'Tríceps', description: 'Tríceps corda', hour: '19:30' }
      ]
    },
    {
      title: '20/10/2025',
      data: [
        { group: 'Pernas', description: 'Agachamento', hour: '17:00' },
        { group: 'Ombros', description: 'Desenvolvimento', hour: '18:00' }
      ]
    }
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item, index) => item.description + index}
        renderItem={({ item }) => (
          <HistoryCard
            exercise={{
              data: [item.group, item.description, item.hour]
            }}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Heading mb="$4" mt="$6" color="$green500" fontSize="$md">
            {section.title}
          </Heading>
        )}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 24 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Box>
            <Heading color="$gray300" fontSize="$md">
              Nenhum exercício registrado.
            </Heading>
            <Text color="$gray300" fontSize="$md">
              Vamos lá, registre seu primeiro exercício!
            </Text>
          </Box>
        )}
      />

    </VStack>
  );
}