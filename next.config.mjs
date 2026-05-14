const isProd = true;
const useCustomDomain = true; // set false if no custom domain

const nextConfig = {
  output: "export",
  basePath: !useCustomDomain && isProd ? "/portfolio" : "",
  assetPrefix: !useCustomDomain && isProd ? "/portfolio/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
