import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "PRUEBA VIIO",
            version: "BETA",
        },
        components: {
            securitySchemes: {
              bearerAuth: {
                description: "JWT Authorization",
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT",
              }
            } 
        },
        security: [
            {
                bearerAuth: [
                    
                ]
            }
        ]
    },
    apis: ['src/models/users.js', 'src/routes/users.js',
    'src/routes/login.js', 'src/routes/carts.js', ],
}
 
const swaggerSpec = swaggerJsdoc(options)

export const swaggerDocs = (app, port) => {
    app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/api/v1/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })

    console.log('http://localhost:'+port+'/api/v1/swagger');

}