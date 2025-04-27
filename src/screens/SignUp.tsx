import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSignUp() {
        // Criando conta de usuário, usando Input com Estados(useState)
        console.log({ name, email, password, confirmPassword });
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

                        <Input 
                            placeholder="Nome"
                            onChangeText={setName}
                        />

                        <Input 
                            placeholder="E-mail" 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                            onChangeText={setEmail}
                        />

                        <Input
                            placeholder="Senha"
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                        <Input
                            placeholder="Confirme sua senha"
                            secureTextEntry
                            onChangeText={setConfirmPassword}
                        />

                        <Button
                            title="Criar e Acessar"
                            onPress={handleSignUp}
                        />
                    </Center>

                    <Button title="Voltar para o login" variant="outline" mt="$12" mb="$12"  onPress={handleGoBack}/>

                </VStack>

            </VStack>
        </ScrollView>
    )
}