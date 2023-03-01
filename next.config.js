/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  pwa: {
    dest: "public",
    disable: prod ? false : true,
  },
});
