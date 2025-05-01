// 3 - Acessando o conteúdo do contexto de autenticaçãoc com o hook useContext
import { useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box } from "@gluestack-ui/themed";
import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

// 4 - Contexto de autenticação, que serao utilizado para verificar se o usuário está autenticado ou não
import { useAuth } from '@hooks/useAuth'

export function Routes() {
    const theme = DefaultTheme;
    theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

    // 5 - Verifica se o usuário está autenticado ou não, e renderiza as rotas de acordo com o estado de autenticação
    const  { user } = useAuth();
    console.log('contextData - info do usuário', user);

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
                {/* <AuthRoutes /> */}
                <AppRoutes />
            </NavigationContainer>
        </Box>
    );
}