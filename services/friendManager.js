const { QueryTypes } = require("sequelize");
const [sequelize] = require("../models/cargarModelos").getSequelize;

async function isFriend(userId, friendId) {
    let isFriend = true;
    const query = await sequelize.query("SELECT estado FROM usuarioamigo WHERE id_usuario_usuarioAmigo = ? AND id_usuario2_usuarioAmigo = ?", { replacements: [userId, friendId], type: sequelize.QueryTypes.SELECT });
    if (query[0].estado === null || query[0].estado !== "amigo") {
        isFriend = false;
    }
    return isFriend;
}

async function addFriend(userId, friendToAddId) {
    const query = await sequelize.query("INSERT INTO usuarioamigo (id_usuario_usuarioAmigo, id_usuario2_usuarioAmigo, estado) VALUES (?, ?, 'pendiente')", { replacements: [userId, friendId], type: sequelize.QueryTypes.INSERT });
    console.log(query);
    return query;
}

async function acceptFriend(id_usuarioAmigo) {
    const query = await sequelize.query("UPDATE usuarioamigo SET estado = 'amigo' WHERE id_usuarioAmigo = ?", { replacements: [id_usuarioAmigo], type: sequelize.QueryTypes.UPDATE });
    return query;
}

module.exports = {
    isFriend,
    addFriend,
    acceptFriend
};