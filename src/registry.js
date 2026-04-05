const imageBasePath = "/images";

export function createItemRegistry(phoneNumber) {
  return [
    {
      name: "Evil Eye Wall Decor",
      description:
        "Handcrafted evil eye wall decor made with soft crochet yarn, designed to protect your space from negative energy while adding a calm, aesthetic vibe.",
      price: "Rs.349",
      originalPrice: "Rs.549",
      imageUrl: `${imageBasePath}/nazar1.png`,
      imageAlt: "Evil eye wall decor",
      orderUrl:
        `https://wa.me/${phoneNumber}?text=Hi%2C%20I%27m%20interested%20in%20buying%20the%20Evil%20Eye%20Wall%20Decor%20from%20your%20crochet%20store`,
    },
    {
      name: "Cute Chick Key Chain",
      description:
        "A cute little chicken to accompany your keys and make sure you never lose them.",
      price: "Rs.349",
      originalPrice: "Rs.350",
      imageUrl: `${imageBasePath}/chicken_keychain1.png`,
      imageAlt: "Cute chick key chain",
      orderUrl:
        `https://wa.me/${phoneNumber}?text=Hi%20I%27d%20like%20to%20order%20the%20*Cute%20Chicken%20Keychain*%20from%20your%20crochet%20Store`,
    },
    {
      name: "Chai Sutta Keychain",
      description:
        "Cute keychain with a tiny cigarette and tea cup crochet set that leans into a playful desi vibe.",
      price: "Rs.199",
      originalPrice: "Rs.399",
      imageUrl: `${imageBasePath}/sutta_keychain.png`,
      imageAlt: "Chai sutta keychain",
      orderUrl:
        `https://wa.me/${phoneNumber}?text=Hi%2C%20I'm%20interested%20in%20the%20*chai%20sutta%20keychain*%20form%20your%20crochet%20store.`,
      tag: "New",
    },
    {
      name: "Crochet Bouquet",
      description:
        "Crochet bouquets made for gifting and special moments. DM to customize.",
      price: "Rs.799",
      originalPrice: "Rs.999",
      imageUrl: `${imageBasePath}/bouquet1.png`,
      imageAlt: "Crochet bouquet",
      orderUrl:
        `https://wa.me/${phoneNumber}?text=Hi%2C%20I%20would%20like%20to%20order%20a%20custom%20bouquet%20form%20your%20crochet%20store.`,
      tag: "Custom",
    },
    {
      name: "Custom Scarfs",
      description:
        "What's better than a scarf made exactly to your liking? DM to customize.",
      price: "Rs.699-Rs.1499",
      imageUrl: `${imageBasePath}/scarf1.png`,
      imageAlt: "Custom crochet scarf",
      orderUrl:
        `https://wa.me/${phoneNumber}?text=Hi%2C%20I'm%20interested%20in%20the%20*custom%20scarf*%20form%20your%20crochet%20store.`,
      tag: "Custom",
    },
    {
      name: "Custom Crochet Phone Covers",
      description:
        "A personalised crochet phone cover that suits your personality.",
      price: "Rs.449",
      originalPrice: "Rs.399",
      imageUrl: `${imageBasePath}/phone_cover1.png`,
      imageAlt: "Custom crochet phone cover",
      orderUrl:
        `https://wa.me/${phoneNumber}?text=Hi%2C%20I'm%20interested%20in%20a%20*Custom%20Phone%20Cover*%20form%20your%20crochet%20store.`,
      tag: "Custom",
    },
  ];
}
