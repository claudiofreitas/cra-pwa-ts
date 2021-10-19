import { FC, useMemo, useState } from 'react';
import { Select } from 'antd';

const monthsEnglish = [
  { value: '1', name: 'January' },
  { value: '2', name: 'February' },
  { value: '3', name: 'March' },
  { value: '4', name: 'April' },
  { value: '5', name: 'May' },
  { value: '6', name: 'June' },
  { value: '7', name: 'July' },
  { value: '8', name: 'August' },
  { value: '9', name: 'September' },
  { value: '10', name: 'October' },
  { value: '11', name: 'November' },
  { value: '12', name: 'December' },
];

const monthsJapanese = [
  { value: '1', name: '1月' },
  { value: '2', name: '2月' },
  { value: '3', name: '3月' },
  { value: '4', name: '4月' },
  { value: '5', name: '5月' },
  { value: '6', name: '6月' },
  { value: '7', name: '7月' },
  { value: '8', name: '8月' },
  { value: '9', name: '9月' },
  { value: '10', name: '10月' },
  { value: '11', name: '11月' },
  { value: '12', name: '12月' },
];

const baseYears = (function () {
  const _years = [];
  for (let year = 1900; year <= 2021; year++) {
    _years.push(String(year));
  }
  return _years;
})();

const Birthdate2: FC = () => {
  const [language, setLanguage] = useState('en');
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    undefined
  );
  const [selectedYear, setSelectedYear] = useState<string | undefined>(
    undefined
  );

  const months = useMemo(() => {
    if (language === 'en') {
      return monthsEnglish;
    } else {
      return monthsJapanese;
    }
  }, [language]);

  const years = useMemo(() => {
    if (language === 'en') {
      return baseYears.map((y) => ({
        value: y,
        name: y,
      }));
    } else {
      return baseYears.map((y) => ({
        value: y,
        name: y + '年',
      }));
    }
  }, [language]);

  const ageError = useMemo(() => {
    if (!selectedMonth || !selectedYear) {
      return 'empty month or year';
    } else {
      const birthDate = new Date(`${selectedYear}-${selectedMonth}-01`);
      const thresholdDate = new Date('2011-10-15');
      if (birthDate > thresholdDate) {
        return 'Too young to register';
      }
    }

    return 'ok';
  }, [selectedMonth, selectedYear]);

  return (
    <>
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <p>Extra content</p><br />
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('ja')}>Japanese</button>

      <br />

      <Select
        showSearch
        style={{ width: 170 }}
        placeholder="Month"
        optionFilterProp="children"
        onChange={(value) => {
          setSelectedMonth(value as string);
        }}
        filterOption={(input, option) => {
          return (
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        }}
      >
        {months.map((month) => {
          return (
            <Select.Option key={month.value} value={month.value}>{month.name}</Select.Option>
          );
        })}
      </Select>

      <Select
        showSearch
        style={{ width: 170 }}
        placeholder="Year"
        onChange={(value) => {
          setSelectedYear(value as string);
        }}
        optionFilterProp="children"
        filterOption={(input, option) => {
          return (
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        }}
      >
        {years.map((year) => {
          return <Select.Option key={year.value} value={year.value}>{year.name}</Select.Option>;
        })}
      </Select>
      <br />
      <div>{ageError}</div>
    </>
  );
};

export default Birthdate2;
//time | date | month | year | decade
