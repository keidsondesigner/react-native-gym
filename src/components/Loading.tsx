import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center>
      <Spinner color="$green500" size="large" ></Spinner>
    </Center>
  )
}