import { createContext, FC } from 'react';

export interface ITrueContext {
  thingy: string;
}

export const TrueContext = createContext<ITrueContext>({
  thingy: 'initial',
});

export const TrueContextProvider: FC<{useReal: boolean}> = ({ children, useReal }) => {
  return useReal ? (
    <TrueContext.Provider value={{ thingy: 'true thingy' }}>
      {children}
    </TrueContext.Provider>
  ) : (
    <TrueContext.Provider value={{ thingy: 'fake thingy' }}>
      {children}
    </TrueContext.Provider>
  );
};
