
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ronnie-chris'

function getItems(){
    return fetch(`${BASE_URL}/items`);
};

function createItem(name){
    const newItem = {
        'name': name
    };
    JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        }
    })
}

export default {
    getItems
};
