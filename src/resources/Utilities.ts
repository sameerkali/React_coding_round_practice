import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

// Utility function for getting data from AsyncStorage
export const getDataFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Data retrieved successfully
      return value;
    } else {
      // Key doesn't exist in AsyncStorage
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.error('Error retrieving data from AsyncStorage:', error);
    return null;
  }
};

// Utility function for setting data in AsyncStorage
export const setDataInStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved successfully in AsyncStorage');
  } catch (error) {
    // Error saving data
    console.error('Error saving data in AsyncStorage:', error);
  }
};

export const getDataFromEncriptedStorage = async (key: string) => {
  try {
    const value = await EncryptedStorage.getItem(key);
    if (value !== null) {
      // Data retrieved successfully
      return value;
    } else {
      // Key doesn't exist in AsyncStorage
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.error('Error retrieving data from EncryptedStorage:', error);
    return null;
  }
};

// Utility function for setting data in AsyncStorage
export const setDataInEncriptedStorage = async (key: string, value: any) => {
  try {
    await EncryptedStorage.setItem(key, value);
    console.log('Data saved successfully in AsyncStorage');
  } catch (error) {
    // Error saving data
    console.error('Error saving data in EncryptedStorage:', error);
  }
};

export const clearEncryptedStorage = async () => {
  try {
    await EncryptedStorage.clear();
    console.log('Data saved successfully in AsyncStorage');
  } catch (error) {
    // Error saving data
    console.error('Error saving data in EncryptedStorage:', error);
  }
};
