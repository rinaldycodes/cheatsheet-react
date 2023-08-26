import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_PREFIX = '@ISPWay_'; // Ganti 'MyApp' dengan nama aplikasi Anda

// Fungsi untuk menyimpan data dengan prefix kustom
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    console.log('Data stored successfully');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// Fungsi untuk mengambil data dengan prefix kustom
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_PREFIX + key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};

// Fungsi untuk menghapus data dengan prefix kustom
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(STORAGE_PREFIX + key);
    console.log('Data removed successfully');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};


// Fungsi untuk menghapus semua data dengan prefix kustom
export const removeAllData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const filteredKeys = keys.filter(key => key.startsWith(STORAGE_PREFIX));
      
      await AsyncStorage.multiRemove(filteredKeys);
      
      console.log('All data with the custom prefix removed successfully');
    } catch (error) {
      console.error('Error removing all data:', error);
    }
  };
  
