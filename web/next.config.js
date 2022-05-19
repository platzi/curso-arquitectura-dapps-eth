/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STAGING_ALCHEMY_KEY:
      "https://eth-rinkeby.alchemyapi.io/v2/ks7SwBk6lvEY1uGuX2NOMl1n9XgqgMkk",
  },
};

module.exports = nextConfig;
