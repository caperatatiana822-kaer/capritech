const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions ={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de Gestión de caprinos",
            version:"1.0.0",
            description:"API para gestionar caprinos."
        },
        servers:[
            {
                url:"http://localhost:3000"
            }
        ],
        components:{
            securitySchemes:{
                bearerAuth:{
                    type:"http",
                    scheme:"bearer",
                    bearerFormat:"JWT"
                }
            }
        },
        security:[
            {
                bearerAuth:[]
            }
        ]
    },
    apis:["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = {
    swaggerSpec,
    swaggerUi,
};
