import { ComponentProps } from "react";
import { Button, Text } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof Button> & {
  name: string;
  isActive?: boolean;
};

export function GroupTabs({ name, isActive, ...rest}: Props) {
  return (
    <Button {...rest}
      bg="$gray500"
      borderWidth={isActive ? 1 : 0}
      borderColor="$green500"
      sx={{
        ":active": {
          borderWidth: 1,
        }
      }}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        textTransform="uppercase"
        fontSize="$xs"
      >
        {name}
      </Text>
    </Button>
  )
}