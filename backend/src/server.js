const app = require('./app')
// const dotenv = require('dotenv')
require('dotenv').config();

const PORT = process.env.PORT || 3333;

// process.env.PORT
// dotenv.config();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));