import AsyncStorage from "@react-native-async-storage/async-storage";
export const saveItem = (k: string, v: string) => AsyncStorage.setItem(k, v);
export const getItem = (k: string) => AsyncStorage.getItem(k);
export const getJSON = async <T>(k: string, fallback: T): Promise<T> => {
  const v = await getItem(k);
  if (!v) return fallback;
  try {
    return JSON.parse(v) as T;
  } catch {
    return fallback;
  }
};
export const saveJSON = (k: string, v: unknown) =>
  saveItem(k, JSON.stringify(v));
