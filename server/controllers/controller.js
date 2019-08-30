module.exports = {

    //Show all items    
    getItems: (req, res) => {
        const db = req.app.get('db');
        db.get_items()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    //Create new items for storefront
    createItem: (req, res) => {
        const db = req.app.get('db');
        let {item_name, item_price, item_type, item_color, item_gender, item_image} = req.body;
        db.create_item(item_name, item_price, item_type, item_color, item_gender, item_image)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('couldn\'t create item'))
    },

    //Delete items from storefront
    deleteItem: (req, res) => {
        const db = req.app.get('db');
        let {id} = req.params;
        db.delete_item(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('couldn\'t delete item'))
    }
}