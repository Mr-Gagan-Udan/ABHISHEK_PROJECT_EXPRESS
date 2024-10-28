const swaggerJsDoc = requier(swagger-jsdoc);

const swaggerOptions = {
    swaggerDefination : {
        openapi : "3.0.0",
        info : {
            title : "Hospitalcare API",
            version : "1.0.0",
            description : " API documentation for Hosticare Appoinment Booking system"
        },
        server :[{url : "http://localhost:5000"}]

    },
    apis : ["./routes/*.js"]

};

module.exports = swaggerJsDoc(swaggerOptions)