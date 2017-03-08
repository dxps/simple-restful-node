var productCatalog = require("../catalog/catalog.js");

var appRouter = function(app) {

app.get("/product-catalog", function(req, res) {

    var productCatalogMock = {
        "1": [
            { "id": "1", "name": { "en": "Product 1.1", "ro": "Produsul 1.1" }},
            { "id": "2", "name": { "en": "Product 1.2", "ro": "Produsul 1.2" }}
        ],
        "2": [
            { "id": "1", "name": { "en": "Product 2.1", "ro": "Produsul 2.1" }},
            { "id": "2", "name": { "en": "Product 2.2", "ro": "Produsul 2.2" }}
        ]
    };

    var categoryId = req.query.categoryId;
    if(!categoryId) {
        return res.send({"status": "error", "message": "Missing categoryId"});
    }

    //var category = productCatalogMock[categoryId];
    var category = productCatalog[categoryId];

    if(!category) {
            return res.send({"status": "error", "message": "Unknown categoryId"});
    }
    else {
            return res.send(category);
    }
});

};

module.exports = appRouter;
