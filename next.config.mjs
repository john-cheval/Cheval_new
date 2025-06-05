/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d331b20430.nxcli.net",
      },
      {
        protocol: "https",
        hostname: "bunny-wp-pullzone-1uo9uvm3si.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
