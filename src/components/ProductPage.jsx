import React, { useEffect, useState } from "react";
import { FormattedNumber } from "react-intl";
import { motion } from "framer-motion";
import productsData from "../data/products.json";

import smartphoneImg from "../assets/smartphone.png";
import tabletImg from "../assets/tablet.png";
import laptopImg from "../assets/laptop.png";
import smartwatchImg from "../assets/smartwatch.png";
import earbudsImg from "../assets/Earbuds.png";

const imageMap = {
  1: smartphoneImg,
  2: tabletImg,
  3: laptopImg,
  4: smartwatchImg,
  5: earbudsImg,
};

const ProductPage = ({ selectedLang, selectedCurrency, exchangeRates }) => {
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
    setRecommendedProducts(productsData.recommendedProducts);
  }, []);

  const recommendedLabel =
    productsData.translations?.recommended?.[selectedLang] ||
    productsData.translations?.recommended?.en ||
    "Recommended Products";

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border p-4 rounded shadow mb-6"
      >
        {products.map((product) => {
          const price = (
            product.price * (exchangeRates[selectedCurrency] || 1)
          ).toFixed(2);

          return (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="flex items-center border-b py-4"
            >
              <img
                src={imageMap[product.id]} 
                alt={product.name[selectedLang] || product.name.en}
                className="w-40 h-40 object-contain rounded mr-4"
              />
              <div>
                <h4 className="text-lg">
                  {product.name[selectedLang] || product.name.en}
                </h4>
                <p className="text-sm font-bold ">
                  <FormattedNumber
                    value={price}
                    style="currency"
                    currency={selectedCurrency}
                  />
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border p-4 rounded shadow"
      >
        <h3 className="text-xl mb-4">{recommendedLabel}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recommendedProducts.map((item) => {
            const price = (
              item.price * (exchangeRates[selectedCurrency] || 1)
            ).toFixed(2);

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="flex items-center border-b py-4"
              >
                <img
                  src={imageMap[item.id]} 
                  alt={item.name[selectedLang] || item.name.en}
                  className="w-40 h-40 object-contain rounded mr-4"
                />
                <div>
                  <h4 className="text-lg">
                    {item.name[selectedLang] || item.name.en}
                  </h4>
                  <p className="text-sm font-bold ">
                    <FormattedNumber
                      value={price}
                      style="currency"
                      currency={selectedCurrency}
                    />
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;
