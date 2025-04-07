import { Heading, HStack, VStack, Text, Image, Icon } from "@gluestack-ui/themed";
import { Pressable, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {
  data: {
    name: string;
    description: string;
    image: string;
  };
};

export function ExerciseCard({ data: { name, description, image } }: Props) {
  return (
    <TouchableOpacity>
      <HStack
        bg="$gray600"
        p="$4"
        rounded="$md"
        mb="$4"
        alignItems="center"
      >

        <Image
          source={{ uri: image }}
          alt="Pessoa treinando"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
        />

        <VStack flex={1}>
          <Heading color="$white" fontSize="$lg" mb="$2">
            {name}
          </Heading>
          <Text color="$gray200" fontSize="$sm" numberOfLines={2}>
            {description}
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray200" size="xl" />
      </HStack>
    </TouchableOpacity>
  );
}