# 🌍 Currency & Language Switcher App

A React-based multi-currency and multi-language product listing app with live currency conversion and language localization.

## 🚀 Features

✅ **Multi-Currency Support**: USD, EUR, GBP, JPY, INR, AUD, CAD, CHF, CNY, RUB, KRW, BRL  
✅ **Multi-Language Support**: English, Spanish, French, German, Chinese, Japanese, Arabic, Russian, Portuguese, Hindi, Korean, Italian  
✅ **Real-Time Price Conversion**: Uses predefined exchange rates for currency conversion  
✅ **Dark Mode**: Toggle between light & dark themes  
✅ **Recommended Products Section**: Displays AI-powered product recommendations  
✅ **Localization Support**: Fetches translations from `products.json` instead of static locale files  

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite) ⚡  
- **State Management**: React Hooks (useState, useEffect)  
- **Styling**: TailwindCSS 🎨  
- **Animations**: Framer Motion 🌀  
- **Internationalization**: `react-intl` 🌐  

---

## 📂 Project Structure

📦 currency-switcher-app ┣ 📂 src ┃ ┣ 📂 assets ┃ ┣ 📂 components ┃ ┃ ┣ 📜 LanguageSwitcher.jsx ┃ ┃ ┣ 📜 CurrencySwitcher.jsx ┃ ┃ ┣ 📜 ProductPage.jsx ┃ ┃ ┣ 📜 RecommendedProducts.jsx ┃ ┣ 📂 data ┃ ┃ ┣ 📜 products.json ┃ ┣ 📜 App.jsx ┃ ┣ 📜 main.jsx ┣ 📜 package.json ┣ 📜 README.md

---

## 📦 Installation & Setup

### 🔹 1. Clone the Repository  
git clone https://github.com/yourusername/currency-switcher-app.git
cd currency-switcher-app

🔹 2. Install Dependencies
npm install

🔹 3. Start the Development Server
npm run dev
The app will be available at http://localhost:5173/ 🚀

🎨 UI Components
🌐 Language Switcher
Allows users to switch between 12 languages, storing the preference in localStorage.

💰 Currency Switcher
Dynamically converts product prices into the selected currency using predefined exchange rates.

🛍️ Product Listing
Displays localized product names & prices, fetching translations directly from products.json.

🎯 Recommended Products
An AI-powered section suggesting related products based on user preferences.

🌙 Dark Mode
Persisted in localStorage, allowing users to toggle between light & dark mode.

🛠️ Configuration
1️⃣ Update Exchange Rates (Optional)
Edit products.json in /src/data/ to adjust currency values manually.

{
  "exchangeRates": {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75,
    "INR": 75
  }
}
2️⃣ Adding More Languages
Modify products.json to include translations for new languages.

🚀 Deployment
Deploy to Vercel
vercel
Deploy to Netlify
netlify deploy
🛠️ Future Improvements
✅ Auto-update exchange rates using an API
✅ User preference settings for default language & currency
✅ Lazy loading for better performance

🤝 Contributing
Feel free to submit a PR if you’d like to improve the project! 🚀

📧 Contact: omkarwaikar72@gmail.com
🌐 Live Demo: [your-live-demo-link.com](https://marvelous-platypus-bafdbf.netlify.app/)

