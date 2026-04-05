import { ItemCard } from "./item-class.js";
import { createItemRegistry } from "./registry.js";
import { getProtectedText } from "./decrypt.js";

const productsGrid = document.querySelector("#products-grid");
const orderNowLink = document.querySelector("#order-now-link");
const whatsappLink = document.querySelector("#whatsapp-link");

function renderProducts(items) {
  if (!productsGrid) {
    return;
  }

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const itemCard = new ItemCard(item);
    fragment.append(itemCard.createElement());
  });

  productsGrid.replaceChildren(fragment);
}

async function init() {
  const number = await getProtectedText();

  renderProducts(createItemRegistry(number));

  if (orderNowLink) {
    const orderUrl = `https://wa.me/${number}?text=Hi%2C%20i%20would%20like%20to%20place%20a%20custom%20order%20from%20your%20crochet%20store.`;
    orderNowLink.href = orderUrl;
  }

  if (whatsappLink) {
    const whatsappUrl = `https://wa.me/${number}?text=Hi%2C%20I%20would%20like%20to%20make%20a%20custom%20order%20from%20your%20crochet%20store.`;
    whatsappLink.href = whatsappUrl;
  }
}

init().catch((error) => {
  console.error("Failed to initialize protected links.", error);
});
