import sequelize from "../api/config/database"
import {DataTypes} from "sequelize"
const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false

  },
  phoneNumber: {
      type: DataTypes.INTEGER
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false

  },
  country: {
      type: DataTypes.STRING
  },
  city: {
      type: DataTypes.STRING
  },
  address: {
      type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

(async () => {
    await sequelize.sync({ force: true });
    const jane = User.create({firstName: "Jane", lastName: 'Doe', password: '1234', email: 'janeDoe@gmail.com' });
  })();


 export default User