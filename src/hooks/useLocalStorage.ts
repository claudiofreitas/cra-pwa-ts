import { useLocalStorage as nativeUseLocalStorage } from 'react-use';

const namespace = 'claudio:';

export function useLocalStorage<T>(
  key: string
): [T | undefined, (value: T | undefined) => void, () => void];

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | undefined) => void, () => void];

export function useLocalStorage<T>(
  key: string,
  initialValue?: T | undefined
): [T | undefined, (value: T | undefined) => void, () => void] {
  const [value, setValue, deleteValue] = nativeUseLocalStorage<T>(
    namespace + key,
    initialValue
  );
  return [value || initialValue, setValue, deleteValue];
}
