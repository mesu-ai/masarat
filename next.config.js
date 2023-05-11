/** @type {import('next').NextConfig} */

// const withPlugins = require('next-plugins');

const nextConfig = {
  reactStrictMode: true,
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };

  //   return config;
  // },
  // plugins: [
  //   withPlugins([
  //     {
  //       // Load the fs module on the server side.
  //       server: {
  //         // Add the fs module to the list of modules to be loaded on the server side.
  //         modules: ['fs'],
  //       },
  //     },
  //   ]),
  // ],
}

module.exports = nextConfig
