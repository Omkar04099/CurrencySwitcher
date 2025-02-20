import React, { useEffect, useState } from 'react';

const languages = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  zh: 'Chinese',
  ja: 'Japanese',
  ar: 'Arabic',
  ru: 'Russian',
  pt: 'Portuguese',
  hi: 'Hindi',
  ko: 'Korean',
  it: 'Italian'
};


const LanguageSwitcher = ({ selectedLang, setSelectedLang }) => {
  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setSelectedLang(newLang);
    localStorage.setItem('language', newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setSelectedLang(savedLang);
  }, [setSelectedLang]);

  return (
    <select
      value={selectedLang}
      onChange={handleLanguageChange}
      aria-label="Select Language"
      className="border p-2 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {Object.entries(languages).map(([key, label]) => (
        <option key={key} value={key} className="dark:bg-gray-800 dark:text-white ">
          {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
