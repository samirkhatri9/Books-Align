const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books Align API',
      version: '1.0.0',
      description: 'REST API for the Books Align NDIS accounting website',
    },
    servers: [
      { url: 'http://localhost:5000', description: 'Development' },
      { url: 'https://your-render-url.onrender.com', description: 'Staging (Render)' },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'token',
        },
        adminCookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'adminToken',
        },
      },
    },
  },
  apis: ['./src/modules/**/*.routes.js'],
}

module.exports = swaggerJsdoc(options)
