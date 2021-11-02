import { createContext, FC } from 'react';
import { ITrueContext } from './TrueContext';

export const FakeContext = createContext<ITrueContext>({
  thingy: 'initial',
});

export const FakeContextProvider: FC = ({ children }) => {
  return (
    <FakeContext.Provider value={{ thingy: 'fake thingy' }}>
      {children}
    </FakeContext.Provider>
  );
};
