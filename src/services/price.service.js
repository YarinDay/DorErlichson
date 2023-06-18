export const priceService = {
  getPrices,
};

function getPrices() {
  return gPrices;
}
const gPrices = [
  {
    _id: "p101",
    price: "350",
    about: `מקבלים צמיד ו-10 כניסות חברים  \nמתאמנים באיזה סניף שרוצים עם תוכנית אימון אישית
נהנים מהטבות בבתי העסק ומהקפאות רפואיות`,
    color: `rgb(204,61,0)`,
  },
  {
    _id: "p102",
    price: "300",
    about:
      "מקבלים צמיד ו-10 כניסות חברים  \nמתאמנים באיזה סניף שרוצים עם תוכנית אימון אישית",
    color: `rgb(204,61,0)`,
  },
  {
    _id: "p103",
    price: "275",
    about:
      "נהנים מהטבות בבתי העסק ומהקפאות רפואיות",
    color: `rgb(204,61,0)`,
  },
];
