const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/auth-users', {
    useMongoClient: true
  })
  .then(() => console.log('\n=== Connected to Auth-Users Database ===\n'))
  .catch(err => console.log('\n=== Error Connecting to Auth-Users Database ===\n'))

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
