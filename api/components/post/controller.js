const TABLA = 'postNode';

module.exports = function(injectedStore) {

    let store = injectedStore;
    if (!store) {
        const store = require('../../../store/dummy');
    }

    function list(){
        return store.list(TABLA);
    }

    async function upsert(username, text){
        
        const post = {
            username: username,
            text: text
        }
        
        return store.insert(TABLA, post)
    }

    return {
        list,
        upsert,
    } 

}