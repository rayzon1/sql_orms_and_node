const Sequelize = require('sequelize');

module.exports = sequelize => {
    class Person extends Sequelize.Model {};
    Person.init(
        {
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Value cannot be Null.'
                    },
                    notEmpty: {
                        msg: 'Value cannot be empty.'
                    }
                }
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Value cannot be Null.'
                    },
                    notEmpty: {
                        msg: 'Value cannot be empty.'
                    }

                }
            }
        },
        { sequelize }
    );
    return Person;
};