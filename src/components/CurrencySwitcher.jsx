import React, { useEffect, useState } from 'react';

const currencies = {
  USD: 'USD - $',
  EUR: 'EUR - €',
  GBP: 'GBP - £',
  JPY: 'JPY - ¥',
  INR: 'INR - ₹',
  AUD: 'AUD - A$',
  CAD: 'CAD - C$',
  CHF: 'CHF - Fr',
  CNY: 'CNY - ¥',
  RUB: 'RUB - ₽',
  KRW: 'KRW - ₩',
  BRL: 'BRL - R$'
};


const CurrencySwitcher = ({ selectedCurrency, setSelectedCurrency }) => {
  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency') || 'USD';
    setSelectedCurrency(savedCurrency);
  }, [setSelectedCurrency]);

  return (
    <select
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      aria-label="Select Currency"
      className="border p-2 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {Object.entries(currencies).map(([key, label]) => (
        <option key={key} value={key} className="dark:bg-gray-800 dark:text-white">
          {label}
        </option>
      ))}
    </select>
  );
};

export default CurrencySwitcher;
