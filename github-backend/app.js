const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const { sequelize } = require('./models');

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
