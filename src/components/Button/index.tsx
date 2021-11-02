import { FC } from 'react';

const Button: FC<{ onClick: () => {} }> = ({ onClick, children }) => {
  return <p onClick={onClick}>{children}</p>;
};

export default Button;

// scaffolding (unit test)

// Button -> image test
// PrimaryButton ->
