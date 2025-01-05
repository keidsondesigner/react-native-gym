import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center>
      <Spinner color="$red500" size="large" ></Spinner>
    </Center>
  )
}