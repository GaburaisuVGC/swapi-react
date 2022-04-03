const express = require('express');
const cors = require('cors');


const PORT = 8080;

const app = express();

const routes = require('./routes/api');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGODB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });
// }

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/api', routes);

  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });