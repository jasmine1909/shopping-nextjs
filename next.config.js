module.exports = {
  images: {
    domains: ["fakestoreapi.com", "images.unsplash.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
