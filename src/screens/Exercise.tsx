import { ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Center, Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { ArrowLeft } from "lucide-react-native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import RepetitionSvg from "@assets/repetitions.svg";
import SeriesSvg from "@assets/series.svg";
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px="$8" py="$12" bg="$gray600">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green" size="xl" />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt="$4">
          <Heading color="$gray100" fontFamily="heading" fontSize="$lg" flexShrink={1}>
            Puxada frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml="$2">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack flex={1} px="$8" py="$8" bg="$gray700">
          <Image
            source={{ uri: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Puxada-Alta-Aberta.gif" }}
            alt="Puxada frontal"
            w="$full"
            h="$80"
            resizeMode="cover"
            rounded="$lg"
            mb="$3"
          />
          <HStack justifyContent="space-between" mb="$8">

            <HStack alignItems="center" gap="$4">
              <SeriesSvg />
              <VStack>
              <Heading color="$gray100" fontFamily="heading" fontSize="$lg">
                4x10
              </Heading>
              <Text color="$gray200">Repetições</Text>
              </VStack>
            </HStack>

            <HStack alignItems="center" gap="$4">
              <RepetitionSvg />
              <VStack>
                <Heading color="$gray100" fontFamily="heading" fontSize="$lg">
                  60s
                </Heading>
                <Text color="$gray200">Descanso</Text>
              </VStack>
            </HStack>
          </HStack>

          <Button title="Marcar como feito" />
        </VStack>
      </ScrollView>

    </VStack>
  );
}