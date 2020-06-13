const products = require("./input.json").products;

const bestDeal = products
  .map((p) => {
    return {
      amount: parseInt(p.name.split("INR")[1].trim()),
      id: p.id,
      name: p.name,
      points: parseInt(p.cost),
      bestDealRatio: parseInt(p.cost) / parseInt(p.name.split("INR")[1].trim()),
    };
  })
  .sort((a, b) => a.bestDealRatio - b.bestDealRatio);

console.table(bestDeal);
