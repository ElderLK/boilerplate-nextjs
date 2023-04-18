// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWAInit = require("next-pwa");
const isProd = process.env.NODE_ENV === 'production';

const withPWA = withPWAInit({
    dest: 'public',
    disable: !isProd,
    styledComponents: true,
    exclude: [
      // add buildExcludes here
      ({ asset }) => {
        if (
          asset.name.startsWith("server/") ||
          asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
        ) {
          return true;
        }
        if (isDev && !asset.name.startsWith("static/runtime/")) {
          return true;
        }
        return false;
      }
    ],
});

const nextConfig = {
  swcMinify: true,
  // experimental: {
  //   appDir: true
  // }
}

module.exports = withPWA(nextConfig);
