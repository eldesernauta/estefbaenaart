/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //useFileSystemPublicRoutes: false,
}

module.exports = nextConfig

// module.exports = {
//   // Habilita la exportación de HTML estático
//   output: {
//     exportPathMap: function () {
//       return {
//         '/': { page: '/' },

//       };
//     },
//   },

// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// const path = require('path');

// module.exports = {
//   images: {
//     domains: [],
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(jpe?g|png|svg)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next',
//             name: 'static/images/[name].[hash].[ext]',
//           },
//         },
//       ],
//     });

//     config.module.rules.push({
//       test: /\.(js|jsx)$/i,
//       include: [path.resolve(__dirname, 'src')],
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['next/babel'],
//         },
//       },
//     });

//     return config;
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// module.exports = nextConfig
