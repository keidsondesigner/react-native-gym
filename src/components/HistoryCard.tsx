import { Text, Heading, HStack, VStack } from '@gluestack-ui/themed';
type HistoryCardProps = {
  exercise: {
    data: string[];
  };
};

export function HistoryCard({ exercise }: HistoryCardProps) {
  return (
    <HStack bg="$gray600" p="$4" rounded="$md" mb="$6" alignItems="center">
      <VStack flex={1}>
        <Heading size="sm" fontWeight="bold">
          {exercise.data[0]}
        </Heading>
        <Text color="$gray200">
          {exercise.data[1]}
        </Text>
      </VStack>
      <Text color="$gray200">
        {exercise.data[2]}
      </Text>
    </HStack>
  );
}