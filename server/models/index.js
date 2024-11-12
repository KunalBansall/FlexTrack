import User from './User.js';
import Member from './Member.js';
import Attendance from './Attendance.js';
import Payment from './Payment.js';

// Define relationships
User.hasOne(Member);
Member.belongsTo(User);

Member.hasMany(Attendance);
Attendance.belongsTo(Member);

Member.hasMany(Payment);
Payment.belongsTo(Member);

export { User, Member, Attendance, Payment };