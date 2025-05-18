import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserDTO } from '@dtos/UserDTO';
import { USER_STORAGE } from '@storage/storageConfig';

// Salvo um User do tipo UserDTO no AsyncStorage[Storage Local] que é um objeto
export async function storageUserSave(user: UserDTO): Promise<void> {
  try {
    const storage = JSON.stringify(user);
    await AsyncStorage.setItem(USER_STORAGE, storage);
  } catch (error) {
    throw error;
  }
}

