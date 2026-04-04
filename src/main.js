import { ItemCard } from "./item-class.js";
import { itemRegistry } from "./registry.js";
import { getProtectedText } from "./decrypt.js";

const productsGrid = document.querySelector("#products-grid");
const orderNowLink = document.querySelector("#order-now-link");
const whatsappLink = document.querySelector("#whatsapp-link");

if (productsGrid) {
  const fragment = document.createDocumentFragment();

  itemRegistry.forEach((item) => {
    const itemCard = new ItemCard(item);
    fragment.append(itemCard.createElement());
  });

  productsGrid.replaceChildren(fragment);
}

if(orderNowLink) {
  getProtectedText().then(number => {
    const orderUrl = `https://wa.me/${number}?text=Hi%2C%20i%20would%20like%20to%20place%20a%20custom%20order%20from%20your%20crochet%20store.`;
    orderNowLink.href = orderUrl;
  });
}

if(whatsappLink) {
  getProtectedText().then(number => {
    const whatsappUrl = `https://wa.me/${number}?text=Hi%2C%20I%20would%20like%20to%20make%20a%20custom%20order%20from%20your%20crochet%20store.`;
    whatsappLink.href = whatsappUrl;
  });
}

export function decryptedNumber() {
  return getProtectedText();
}
