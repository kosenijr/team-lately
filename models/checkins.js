module.exports = function (sequelize, DataTypes) {
    var checkins = sequelize.define("checkins", {
        USER_EMAIL: DataTypes.TEXT,
        CURRENT_WAIT: DataTypes.INTEGER,
        PARTY_SIZE: DataTypes.INTEGER,
        WAIT_ACTIVE: DataTypes.BOOLEAN,
        REST_ID: DataTypes.INTEGER
    });

    checkins.associate = function(models){
        checkins.belongsTo(models.Restaurants, {foreignKey: 'REST_ID', targetKey: 'REST_ID'})
    }

    return checkins;
};