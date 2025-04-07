import { Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Image>;

export function UserPhoto({ ...rest }: Props) {
  return (
    <Image {...rest}
      h={"$12"}
      w={"$12"}
      rounded={"$full"}
      borderWidth={"$2"}
      borderColor={"$gray400"}
      backgroundColor="$gray500"
      alt="User Photo"
      resizeMode="cover"
    />
  );
}