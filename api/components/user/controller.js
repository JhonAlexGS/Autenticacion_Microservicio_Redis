const {nanoid} = require('nanoid');
const auth = require('../auth')

const TABLA = 'userNode';

module.exports = function(injectedStore) {

    let store = injectedStore;
    if (!store) {
        const store = require('../../../store/dummy');
    }

    function list(){
        return store.list(TABLA);
    }

    function get(id){
        return store.get(TABLA, id);
    }

    async function upsert(body){

        console.log("Vamos bien")
        console.log("\n\n\n\n\n")

        const user = {
            name: body.name,
            username: body.username
        }

        if(body.id){
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        console.log("Vamos regular")
        console.log("\n\n\n\n\n")
        if (body.password || body.username){
            await auth.upsert({
                id:user.id,
                username: user.username,
                password: body.password
            })
        }
        
        console.log("Vamos mas bien")
        console.log("\n\n\n\n\n")
        return store.upsert(TABLA, user)
    }

    function follow(from, to){
        return store.upsert (TABLA + '_follow', {
            user_from: from,
            user_to: to,
        });
    }

    async function following(id){
        const join={}
        join[TABLA]='user_to';
        console.log(join);
        console.log(id);
        return store.followers(id);
    }

    return {
        list,
        get,
        upsert,
        follow,
        following
    };
}
