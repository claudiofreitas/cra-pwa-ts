import React from 'react';

export const LongList: React.FC<{ type: string }> = ({ type }) => {
  return (
    <ul>
      {Array<string>(37)
        .fill('a')
        .map((e, i) => {
          return (
            <li key={i}>
              {type} {i}
            </li>
          );
        })}
    </ul>
  );
};
