import { useState } from "react";
import { VStack, Image, Center, Text, Heading, ScrollView, useToast, Toast, ToastTitle, ToastDescription } from "@gluestack-ui/themed";

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useForm, Controller } from "react-hook-form";

import { api } from "@services/api";
import { AppError } from "@utils/AppError";

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type SignUpFormDataProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export function SignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // Com React Hook Form, não é necessário criar estados para cada Input
    // o 'control' é o que controla os Inputs
    // o 'Controller' é o que controla o estado do Input
    // o 'name' é o nome do Input
    // o 'render' é o que renderiza o Input
    // o 'onChange' é o que atualiza o estado do Input
    // o 'value' é o valor do Input
    // o 'defaultValues' é o valor padrão do Input
    // o 'handleSubmit' é o que envia o formulário
    // o 'handleSubmit' também passa o 'data' para a função que você passar
    // o 'data' é o que contém os dados do formulário
    // o 'formState' é o estado do formulário
    // o 'errors' é o que contém os erros do formulário
    // o 'watch' é o que observa o estado do Input
    const { control, handleSubmit, formState: { errors }, watch } = useForm<SignUpFormDataProps>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    });

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleSignUp({ name, email, password }: Omit<SignUpFormDataProps, 'confirmPassword'>) {
        // Criando conta de usuário, usando Input com Estados(useState)
        // console.log({ name, email, password, confirmPassword });

        // Criando conta de usuário, usando React Hook Form
        // console.log(data);

        // usando Axios
        try {
            setIsLoading(true);
            const response = await api.post('/users', { name, email, password });
            console.log(response.data);
        } catch (error) {
            // Se o erro for uma instância da classe AppError, retorna true;
            const isAppError = error instanceof AppError;
            console.log('isAppError: ', isAppError);

            const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde';
            console.log('title: ', title);

            toast.show({
                id: 'error-toast',
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
        } finally {
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

                    <Center gap="$2" flex={1}>
                        <Heading color="$gray100">
                            Crie sua conta
                        </Heading>

                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, value }}) => (
                                <Input
                                    placeholder="Nome"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.name?.message}
                                />
                            )}
                            rules={{
                                required: 'Informe o nome',
                                minLength: {
                                    value: 3,
                                    message: 'Nome deve ter pelo menos 3 caracteres'
                                }
                            }}
                        />

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

                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field: { onChange, value }}) => (
                                <Input
                                    placeholder="Confirme sua senha"
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    onSubmitEditing={handleSubmit(handleSignUp)}
                                    returnKeyType="send"
                                    errorMessage={errors.confirmPassword?.message}
                                />
                            )}
                            rules={{
                                required: 'Confirme a senha',
                                minLength: {
                                    value: 6,
                                    message: 'Senha deve ter pelo menos 6 caracteres'
                                },
                                validate: (value) => {
                                    if (value !== watch('password')) {
                                        return 'As senhas não conferem';
                                    }
                                }
                            }}
                        />

                        <Button
                            title="Criar e Acessar"
                            onPress={handleSubmit(handleSignUp)}
                            isLoading={isLoading}
                        />
                    </Center>

                    <Button title="Voltar para o login" variant="outline" mt="$12" mb="$12"  onPress={handleGoBack}/>

                </VStack>

            </VStack>
        </ScrollView>
    )
}