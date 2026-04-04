import { ItemCard } from "./item-class.js";
import { itemRegistry } from "./registry.js";

const productsGrid = document.querySelector("#products-grid");

if (productsGrid) {
  const fragment = document.createDocumentFragment();

  itemRegistry.forEach((item) => {
    const itemCard = new ItemCard(item);
    fragment.append(itemCard.createElement());
  });

  productsGrid.replaceChildren(fragment);
}
