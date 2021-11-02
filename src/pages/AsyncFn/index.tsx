import {useAsyncFn} from 'react-use';

const AsyncFn = () => {
  const [state, doFetch] = useAsyncFn(async () => {
    const url = 'https://random-data-api.com/api/name/random_name';
    const response = await fetch(url);
    const result = await response.json();
    return result.first_name
  }, []);

  return (
    <div>
      {state.loading
        ? <div>Loading...</div>
        : state.error
          ? <div>Error: {state.error.message}</div>
          : <div>Value: {state.value}</div>
      }
      <button onClick={() => doFetch()}>Start loading</button>
    </div>
  );
};

export default AsyncFn;