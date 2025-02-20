import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import LanguageSwitcher from './components/LanguageSwitcher';
import CurrencySwitcher from './components/CurrencySwitcher';
import ProductPage from './components/ProductPage';
import productsData from './data/products.json'; 


const AVERAGE_EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  INR: 75,
  JPY: 110,
  AUD: 1.4,
  CAD: 1.3,
  CHF: 0.91,
  CNY: 6.4,
  RUB: 92,
  KRW: 1300,
  BRL: 5.2
};

const App = () => {
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem('language') || 'en');
  const [selectedCurrency, setSelectedCurrency] = useState(localStorage.getItem('currency') || 'USD');
  const [exchangeRates, setExchangeRates] = useState(AVERAGE_EXCHANGE_RATES); 
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', selectedLang);
    localStorage.setItem('currency', selectedCurrency);
  }, [selectedLang, selectedCurrency]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const messages = productsData.translations[selectedLang] || productsData.translations['en'];

  return (
    <IntlProvider locale={selectedLang} messages={messages}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} p-6`}>
        <div className="flex justify-between items-center mb-4">
          <LanguageSwitcher selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
          <CurrencySwitcher 
            selectedCurrency={selectedCurrency} 
            setSelectedCurrency={setSelectedCurrency} 
            setExchangeRates={() => {}} 
          />
          <button 
            onClick={toggleDarkMode} 
            className="border px-4 py-2 rounded transition hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <ProductPage 
          selectedLang={selectedLang} 
          selectedCurrency={selectedCurrency} 
          exchangeRates={exchangeRates} 
        />
      </div>
    </IntlProvider>
  );
};

export default App;
