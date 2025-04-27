import { ComponentProps } from "react"
import {
    Input as GluestackInput,
    InputField,
    FormControl,
    FormControlError,
    FormControlErrorText,
} from "@gluestack-ui/themed";


// repasando as propriedades com props
type InputProps = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean;
    errorMessage?: string | null;
    isInvalid?: boolean;
}

export function Input({isReadOnly = false, errorMessage = null, isInvalid = false, ...props}: InputProps) {

    const invalid = isInvalid || !!errorMessage;

    return (
        <FormControl isInvalid={invalid} mb="$4">
            <GluestackInput
                isInvalid={invalid}
                w="$full"
                h="$14"
                px="$4"
                bg="$gray600"
                borderWidth="$0"
                borderRadius="$md"
                $focus={{
                    borderWidth: "$1",
                    borderColor: invalid ? "$red500" : "$green500",
                    bg: "$gray600",
                }}
                $invalid={{
                    borderWidth: "$1",
                    borderColor: "$red500",
                }}
                isReadOnly={isReadOnly}
                opacity={isReadOnly ? 0.5 : 1}
            >
                <InputField
                    {...props}
                    color="$white"
                />
            </GluestackInput>

            <FormControlError>
                <FormControlErrorText color="$red500">
                    {errorMessage}
                </FormControlErrorText>
            </FormControlError>

        </FormControl>
    )
}
