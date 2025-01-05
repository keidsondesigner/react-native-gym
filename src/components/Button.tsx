import { ComponentProps } from 'react'
import { Button as GluestackButton, Text, ButtonSpinner } from '@gluestack-ui/themed'

type Props = ComponentProps<typeof GluestackButton> & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
        <GluestackButton 
            {...rest}
            disabled={isLoading}
            w="$full"
            h="$14"
            bg="$amber400"
            borderRadius="$md"
            $active={{
                bg: '$amber500'
            }}
        >
            {isLoading 
                ? ( <ButtonSpinner color="$textDark900" /> ) 
                : (
                    <Text 
                        color="$textDark900" 
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