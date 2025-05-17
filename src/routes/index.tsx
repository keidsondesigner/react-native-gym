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

    // 6 - Se o usuário estiver autenticado, renderiza as rotas do aplicativo, caso contrário, renderiza as rotas de autenticação
    // se não exibi as rotas para autenticação
    // {user.id ? <AppRoutes /> : <AuthRoutes />}

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
                {user.id ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </Box>
    );
}