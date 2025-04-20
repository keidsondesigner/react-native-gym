import { ComponentProps } from "react"
import { Input as GluestackInput, InputField } from "@gluestack-ui/themed"

// repasando as propriedades com props
type InputProps = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean;
}

export function Input({isReadOnly = false, ...props}: InputProps) {
    return (
        <GluestackInput
            w="$full"
            h="$14"
            px="$4"
            bg="$gray600"
            borderWidth="$0"
            borderRadius="$md"
            $focus={{
                borderWidth: "$1",
                borderColor: "$green500",
                bg: "$gray600",
            }}
            isReadOnly={isReadOnly}
            opacity={isReadOnly ? 0.5 : 1}
        >
            <InputField
                {...props}
                color="$white"
            />
        </GluestackInput>
    )
}