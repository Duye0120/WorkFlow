/** @type {import('next').NextConfig} */
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;'
  },
  styledComponents: true
}


module.exports = nextConfig
module.exports = semi({
  // your custom Next.js configuration
})
