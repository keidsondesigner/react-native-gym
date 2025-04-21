import {
  Toast,
  ToastTitle,
  ToastDescription,
  Pressable,
  Icon,
  VStack

} from "@gluestack-ui/themed";
import { X } from "lucide-react-native";

type ToastProps = {
  id: string;
  title: string;
  description: string;
  action?: "error" | "success";
  onClose: () => void;
};

export function ToastMsg({ id, title, description, action = "success", onClose }: ToastProps) {
  return (
      <Toast
        nativeID={`toast-${id}`}
        action={action}
        bgColor={action === "success" ? "$green500" : "$red500"}
      >
        <VStack space="xs" w="$full" >
          <Pressable onPress={onClose} alignSelf="flex-end">
            <Icon as={X} color="$textDark900" size="md" />
          </Pressable>

          <ToastTitle color="$textDark900" fontWeight={"bold"}>{title}</ToastTitle>
          <ToastDescription color="$textDark900">{description}</ToastDescription>
        </VStack>
      </Toast>
  );
}