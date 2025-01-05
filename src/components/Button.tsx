import { ComponentProps } from 'react'
import { Button as GluestackButton, Text } from '@gluestack-ui/themed'

type Props = ComponentProps<typeof GluestackButton> & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
        <GluestackButton 
            {...rest}
            w="$full"
            h="$14"
            bg="$amber400"
            borderRadius="$md"
            $active={{
                bg: '$amber500'
            }}
            disabled={isLoading}
        >
            <Text 
                color="$textDark900" 
                fontWeight="$bold" 
                fontFamily="$body" 
                fontSize="$md"
            >
                {title}
            </Text>
        </GluestackButton>
    )
}