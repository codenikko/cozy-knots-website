export class ItemCard {
  constructor(item) {
    this.item = item;
  }

  createElement() {
    const article = document.createElement("article");
    article.className = "product-card";

    const { description, imageAlt, imageUrl, name, orderUrl, originalPrice, price, tag } = this.item;

    article.innerHTML = `
      <div class="product-img">
        <div class="product-placeholder">
          <img src="${imageUrl}" alt="${imageAlt}">
        </div>
        ${tag ? `<span class="product-tag">${tag}</span>` : ""}
      </div>
      <div class="product-body">
        <div class="product-name">${name}</div>
        <div class="product-desc">${description}</div>
        <div class="product-meta">
          <div class="product-price">
            ${price}
            ${originalPrice ? `<span class="original">${originalPrice}</span>` : ""}
          </div>
          <a href="${orderUrl}" target="_blank" rel="noreferrer" class="buy-btn">Buy Now</a>
        </div>
      </div>
    `;

    return article;
  }
}
