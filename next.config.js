module.exports = {
    publicRuntimeConfig:{
        APP_NAME: 'Lavender_23P COVID-19 Vaccine',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'https://covid-19-vaccine-api.herokuapp.com/api',
        PRODUCTION: true,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://lavender23p-covid-19-vaccine.herokuapp.com',
        DISQUS_SHORTNAME: 'covid-19-vaccine',
        GOOGLE_CLIENT_ID: '320727890298-nnluf7g2ph6skc03ea443r6757fd3437.apps.googleusercontent.com',
        GOOGLE_CLIENT_KEY: 'JOojitgQkovTzk8hyBGs2n0W'
    },
      async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      },
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://lavender23p-covid-19-vaccine.herokuapp.com/api/:path*',
          },
        ]
      },
}