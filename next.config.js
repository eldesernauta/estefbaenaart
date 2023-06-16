/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = ({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next',
                    outputPath: 'static/videos',
                    name: '[name].[ext]',
                },
            },
        });


        return config;
    },
});