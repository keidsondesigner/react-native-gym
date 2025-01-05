import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/input";
import { Button } from "@components/Button";

export function SignIn() {
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

                    <Center gap="$2">
                        <Heading color="$gray100">
                            Acesse sua conta
                        </Heading>

                        <Input 
                            placeholder="E-mail" 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                        />
                        <Input placeholder="Senha" secureTextEntry />

                        <Button title="Acessar"  />
                    </Center>

                    <Center flex={1} justifyContent="flex-end" gap="$4" mb="$12" mt="$4">
                        <Text color="$gray200" fontSize="$sm">
                            Ainda não tem acesso?
                        </Text>

                        <Button title="Criar Conta" variant="outline" />
                    </Center>

                </VStack>

            </VStack>
        </ScrollView>
    )
}