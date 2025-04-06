import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box } from "@gluestack-ui/themed";
import { gluestackUIConfig } from "@gluestack-ui/config";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const theme = DefaultTheme;
    theme.colors.background = gluestackUIConfig.tokens.colors.coolGray800;

    return (
        <Box flex={1} bg="$gray700">
            <NavigationContainer theme={theme}>
                {/* <AuthRoutes /> */}
                <AppRoutes />
            </NavigationContainer>
        </Box>
    );
}