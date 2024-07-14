/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/offers/offers.html',
        destination: '/offers',
        permanent: true,
      },
      {
        source: '/offers.html',
        destination: '/offers',
        permanent: true,
      },
      {
        source: '/services/other-services.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/interior-painting/interior-painting.html',
        destination: '/services/interior-painting-calgary',
        permanent: true,
      },
      {
        source: '/services/interior-painting.html',
        destination: '/services/interior-painting-calgary',
        permanent: true,
      },
      {
        source: '/services/spray-painting/spray-painting.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/spray-painting.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/cabinet-painting/cabinet-painting.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/cabinet-painting.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/exterior-painting/exterior-painting.html',
        destination: '/services/exterior-painting-calgary',
        permanent: true,
      },
      {
        source: '/services/exterior-painting.html',
        destination: '/services/exterior-painting-calgary',
        permanent: true,
      },
      {
        source: '/services/commercial-painting/commercial-painting.html',
        destination: '/services/commercial-painting-calgary',
        permanent: true,
      },
      {
        source: '/services/commercial-painting.html',
        destination: '/services/commercial-painting-calgary',
        permanent: true,
      },
      {
        source: '/services/drywall-and-mudding/drywall-and-mudding.html',
        destination: '/services/drywall-mud-&-tape-calgary',
        permanent: true,
      },
      {
        source: '/services/drywall-and-mudding.html',
        destination: '/services/drywall-mud-&-tape-calgary',
        permanent: true,
      },
      {
        source:
          '/services/texture-popcorn-removal/texture-popcorn-removal.html',
        destination: '/services/popcorn-ceiling-removal-calgary',
        permanent: true,
      },
      {
        source: '/services/texture-popcorn-removal.html',
        destination: '/services/popcorn-ceiling-removal-calgary',
        permanent: true,
      },
      {
        source: '/services/popcorn-removal-calgary',
        destination: '/services/popcorn-ceiling-removal-calgary',
        permanent: true,
      },
    ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/home.html',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/index.html',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/offers/offers.html',
  //       destination: '/offers',
  //       permanent: true,
  //     },
  //     {
  //       source: '/offers.html',
  //       destination: '/offers',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/other-services.html',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/interior-painting/interior-painting.html',
  //       destination: '/services/interior-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/interior-painting.html',
  //       destination: '/services/interior-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/spray-painting/spray-painting.html',
  //       destination: '/services/interior-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/spray-painting.html',
  //       destination: '/services/interior-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/cabinet-painting/cabinet-painting.html',
  //       destination: '/services/cabinet-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/cabinet-painting.html',
  //       destination: '/services/cabinet-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/exterior-painting/exterior-painting.html',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/exterior-painting.html',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/exterior-painting-calgary',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/commercial-painting/commercial-painting.html',
  //       destination: '/services/commercial-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/commercial-painting.html',
  //       destination: '/services/commercial-painting-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/drywall-and-mudding/drywall-and-mudding.html',
  //       destination: '/services/drywall-mud-&-tape-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/drywall-and-mudding.html',
  //       destination: '/services/drywall-mud-&-tape-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source:
  //         '/services/texture-popcorn-removal/texture-popcorn-removal.html',
  //       destination: '/services/popcorn-ceiling-removal-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/texture-popcorn-removal.html',
  //       destination: '/services/popcorn-ceiling-removal-calgary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/services/popcorn-removal-calgary',
  //       destination: '/services/popcorn-ceiling-removal-calgary',
  //       permanent: true,
  //     },
  //   ]
  // },
}

export default nextConfig
