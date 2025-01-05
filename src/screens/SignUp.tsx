import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/input";
import { Button } from "@components/Button";

export function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} bg="$gray700" alignItems="center">
                <Image 
                    source={BackgroundImage}
                    defaultSource={BackgroundImage}
                    alt="Pessoas treinando"
                    position="absolute"
                    w="$full"
                    h={624}
                />

                <VStack flex={1} px="$5" w="$full">
                    <Center my="$24">
                        <Logo />
                        <Text color="$gray200" fontSize="$sm">
                            Treine sua mente e o seu corpo
                        </Text>
                    </Center>

                    <Center gap="$2" flex={1}>
                        <Heading color="$gray100">
                            Crie sua conta
                        </Heading>

                        <Input placeholder="Nome" />

                        <Input 
                            placeholder="E-mail" 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                        />

                        <Input placeholder="Senha" secureTextEntry />

                        <Button title="Criar e Acessar"  />
                    </Center>

                    <Button title="Voltar para o login" variant="outline" mt="$12" mb="$12"  onPress={handleGoBack}/>

                </VStack>

            </VStack>
        </ScrollView>
    )
}