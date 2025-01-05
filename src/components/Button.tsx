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
            bg={variant === 'outline' ? "transparent" : "$amber400"}
            borderWidth="$1"
            borderColor={variant === 'outline' ? "$amber500" : "transparent"}
            borderRadius="$md"
            $active={{
                bg: variant === 'outline' ? "transparent" : "$amber500",
            }}
        >
            {isLoading 
                ? ( <ButtonSpinner color="$textDark900" /> ) 
                : (
                    <Text 
                        color={variant === 'outline' ? "$amber500" : "$textDark900"}
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