import { VStack, Image, Center, Text } from "@gluestack-ui/themed";

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';

export function SignIn() {
    return (
        <VStack flex={1} bg="$gray700" alignItems="center">
            <Image 
                source={BackgroundImage}
                defaultSource={BackgroundImage}
                alt="Pessoas treinando"
                position="absolute"
                w="$full"
                h={624}
            />

            <Center my="$24">
                <Logo />
                <Text color="$gray200" fontSize="$sm">
                    Treine sua mente e o seu corpo
                </Text>
            </Center>
        </VStack>
    );
}