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


// Busco o User no AsyncStorage[Storage Local]
export async function storageUserGet(): Promise<UserDTO> {
  try {
    const storage = await AsyncStorage.getItem(USER_STORAGE);
    // Se não tiver nada no storage, retorno um objeto vazio
    // Se tiver, converto o storage que é uma string em um objeto
    // e retorno o objeto do tipo UserDTO
    const user: UserDTO = storage ? JSON.parse(storage) : {};
    return user;
  } catch (error) {
    throw error;
  }
}