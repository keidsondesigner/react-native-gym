import { ComponentProps } from "react"
import { Input as GluestackInput, InputField } from "@gluestack-ui/themed"

// repasando as propriedades com props
type Props = ComponentProps<typeof InputField>

export function Input({...props}: Props) {
    return (
        <GluestackInput
            w="$full"
            h="$14"
            px="$4"
            bg="$gray700"
            borderWidth="$0"
            borderRadius="$md"
            $focus={{
                borderWidth: "$1",
                borderColor: "$amber500",
                bg: "$gray600",
            }}
        >
            <InputField
                {...props}
                color="$white"
            />
        </GluestackInput>
    )
}