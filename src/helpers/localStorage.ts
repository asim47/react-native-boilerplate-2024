import { MMKV } from 'react-native-mmkv';

export enum StoredKeys {
  colorMode = 'colorMode',
}

const storage = new MMKV({
  id: 'sitges-app',
  encryptionKey: 'sitges-app',
});

export const localStorage = {
  setItem: (key: StoredKeys, value: string) => {
    storage.set(key, value);
  },
  getItem: (key: StoredKeys) => {
    return storage.getString(key);
  },
};
