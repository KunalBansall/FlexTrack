import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  membershipStatus: {
    type: DataTypes.ENUM('active', 'expired', 'suspended'),
    defaultValue: 'active'
  },
  membershipStartDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  membershipEndDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  emergencyContact: {
    type: DataTypes.STRING
  },
  healthInfo: {
    type: DataTypes.TEXT
  }
});

export default Member;