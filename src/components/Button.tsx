import { ComponentProps } from 'react'
import { Button as GluestackButton, Text, ButtonSpinner } from '@gluestack-ui/themed'

type Props = ComponentProps<typeof GluestackButton> & {
    title: string
    isLoading?: boolean
    variant?: 'solid' | 'outline'
}

export function Button({ title, isLoading = false, variant = 'solid', ...rest }: Props) {
    return (
        <GluestackButton 
            {...rest}
            disabled={isLoading}
            w="$full"
            h="$14"
            bg={variant === 'outline' ? "transparent" : "$green500"}
            borderWidth="$1"
            borderColor={variant === 'outline' ? "$green500" : "transparent"}
            borderRadius="$md"
            $active={{
                bg: variant === 'outline' ? "transparent" : "$green500",
            }}
        >
            {isLoading 
                ? ( <ButtonSpinner color="$textDark900" /> ) 
                : (
                    <Text 
                        color={variant === 'outline' ? "$green500" : "$textDark900"}
                        fontWeight="$bold" 
                        fontFamily="$body" 
                        fontSize="$md"
                    >
                        {title}
                    </Text>
                )
            }
        </GluestackButton>
    )
}