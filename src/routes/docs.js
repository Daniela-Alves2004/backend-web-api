const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../docs/swagger');
const router = express.Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;