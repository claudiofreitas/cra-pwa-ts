import { FC, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { CartContext } from '../../context/CartContext';

// From: https://codesandbox.io/s/github/btholt/react-hooks-examples-v3/tree/master/?module=/src/Memo.js&file=/src/Memo.js:273-322
const fibonacci = (n: number): number => {
  if (n <= 1) {
    return 1;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const Shopping: FC = () => {
  const { addToCart } = useContext(CartContext);

  const [num, setNum] = useState(1);
  // const fib = useMemo(() => fibonacci(num), [num]);
  const fib = fibonacci(num);

  return (
    <>
      <button
        onClick={() => {
          const id = 'djksfhdis';
          addToCart(id);
        }}
      >
        Add
      </button> <br /><br /><br />
      Fibonacci of {num} is {fib}. <br />
      <button onClick={() => setNum(num + 1)}>Incr num</button>
    </>
  );
};

export default Shopping;
