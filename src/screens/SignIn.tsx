import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useForm, Controller } from "react-hook-form";

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";


type SignInFormDataProps = {
    email: string;
    password: string;
}

export function SignIn() {

    const { control, handleSubmit, formState: { errors } } = useForm<SignInFormDataProps>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount() {
        navigation.navigate("SignUp");
    }

    function handleSignIn(data: SignInFormDataProps) {
        console.log(data);
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

                    <Center gap="$2">
                        <Heading color="$gray100">
                            Acesse sua conta
                        </Heading>

                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value }}) => (
                                <Input
                                    placeholder="E-mail"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                            rules={{
                                required: 'Informe o e-mail',
                                pattern: {
                                    value: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/i,
                                    message: 'E-mail inválido'
                                }
                            }}
                        />

                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value }}) => (
                                <Input
                                    placeholder="Senha"
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                            rules={{
                                required: 'Informe a senha',
                                minLength: {
                                    value: 6,
                                    message: 'Senha deve ter pelo menos 6 caracteres'
                                }
                            }}
                        />

                        <Button
                            title="Acessar"
                            onPress={handleSubmit(handleSignIn)}
                        />

                    </Center>

                    <Center flex={1} justifyContent="flex-end" gap="$4" mb="$12" mt="$4">
                        <Text color="$gray200" fontSize="$sm">
                            Ainda não tem acesso?
                        </Text>

                        <Button title="Criar Conta" variant="outline" onPress={handleNewAccount} />
                    </Center>

                </VStack>

            </VStack>
        </ScrollView>
    )
}