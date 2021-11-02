import { FC, useContext } from 'react';
import { TrueContext, TrueContextProvider } from './TrueContext';

const MultiContexts: FC = () => {
  // get config


  return (
    <div>
      <TrueContextProvider useReal={true}>
        <InnerPage />
      </TrueContextProvider>
    </div>
  );
};

const InnerPage: FC = () => {
  const { thingy } = useContext(TrueContext);
  return <>Hi, the thingy from the context is: {thingy}</>;
};

export default MultiContexts;
