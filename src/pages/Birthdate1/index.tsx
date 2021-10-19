import { FC } from 'react';
import { DatePicker } from 'antd';

const Birthdate1: FC = () => {
  return (
    <>
      <DatePicker picker="month" mode="month" /> <br />
      <DatePicker picker="year" mode="year" /> <br />
    </>
  );
};

export default Birthdate1;

// modes = time | date | month | year | decade
