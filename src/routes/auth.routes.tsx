import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

// Tipagem das Rotas sem parametros
type AuthRoutes = {
    SignIn: undefined;
    SignUp: undefined;
}

// Tipagem das Rotas
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

// Rotas Públicas
export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn} options={{ }}/>
            <Screen name="SignUp" component={SignUp} />
        </Navigator>
    );
}