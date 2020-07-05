import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
sequelize
  .authenticate()
  .then(() => console.log('database connected'))
  .catch((err) => console.log('Error: ' + err));
const port = process.env.PORT || 8000;
// when a random route is inputed
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to this API.',
  })
);
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
export default app;
