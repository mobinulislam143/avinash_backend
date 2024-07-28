const mongoose = require('mongoose');
require('dotenv/config');
const app = require('./app.js');

// database connection
mongoose
  .connect(
  "mongodb+srv://test-demo-database:test-demo-database@cluster0.5tlwrug.mongodb.net/abinash-foundation?retryWrites=true&w=majority"
).then(() => {
  console.log('Database connection is successful 🛢');
}).catch((error) => {
  console.error('Database connection error:', error);
});




// server
const port = 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  process.exit(1);
});
