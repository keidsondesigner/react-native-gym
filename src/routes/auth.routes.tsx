import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

// Rotas Públicas
export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn} options={{ }}/>
            <Screen name="SignUp" component={SignUp} />
        </Navigator>
    );
}