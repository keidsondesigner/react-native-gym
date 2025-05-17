import { useState } from "react";
import { VStack, Image, Center, Text, Heading, ScrollView, useToast, Toast, ToastTitle, ToastDescription } from "@gluestack-ui/themed";

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useForm, Controller } from "react-hook-form";

import { useAuth } from "@hooks/useAuth";

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";


type SignInFormDataProps = {
    email: string;
    password: string;
}

export function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const { signIn } = useAuth();

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

    async function handleSignIn(data: SignInFormDataProps) {
        try {
            console.log('handleSignIn', data);
            await signIn(data.email, data.password);
        } catch (error) {
            console.log('error', error);
            // 1 - verifico se o erro é tratavel, se true, significa que é uma instancia de AppError;
            const isAppError = error instanceof AppError;
            // 2 - se for um erro tratável, passo a mensagem personalizada do erro;
            const title = isAppError ? error.message : 'Não foi possível acessar. Tente novamente mais tarde.';

            toast.show({
                id: 'signin-error-toast',
                placement: "top",
                duration: 5000,
                render: ({ id }) => {
                    return (
                        <Toast
                            nativeID={`toast-${id}`}
                            action="error"
                            variant="solid"
                            mt="$14"
                            bg="$red500"
                            width={343}
                        >
                            <VStack>
                                <ToastTitle color="$textDark900" fontSize="$lg" fontWeight="bold">
                                    Error!
                                </ToastTitle>
                                <ToastDescription color="$textDark900" size="md">
                                    {title}
                                </ToastDescription>
                            </VStack>
                        </Toast>
                    )
                },
            });
        }finally {
            setIsLoading(false);
        }
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