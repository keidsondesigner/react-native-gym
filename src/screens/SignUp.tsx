import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
// import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type SignUpFormDataProps = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export function SignUp() {
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
    const { control, handleSubmit, formState: { errors }} = useForm<SignUpFormDataProps>({
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

    function handleSignUp(data: SignUpFormDataProps) {
        // Criando conta de usuário, usando Input com Estados(useState)
        // console.log({ name, email, password, confirmPassword });

        // Criando conta de usuário, usando React Hook Form
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
                                />
                            )}
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
                                />
                            )}
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
                                />
                            )}
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
                                />
                            )}
                        />

                        <Button
                            title="Criar e Acessar"
                            onPress={handleSubmit(handleSignUp)}
                        />
                    </Center>

                    <Button title="Voltar para o login" variant="outline" mt="$12" mb="$12"  onPress={handleGoBack}/>

                </VStack>

            </VStack>
        </ScrollView>
    )
}