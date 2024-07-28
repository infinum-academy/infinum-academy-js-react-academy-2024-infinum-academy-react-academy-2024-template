export const localStorageMock = (() => {
    let store = {} as Storage;
  
    return {
      getItem(key: string) {
        return store[key];
      },
  
      setItem(key: string, value: string) {
        store[key] = value;
      },
  
      clear() {
        store = {} as Storage;
      },
    };
  })();
  