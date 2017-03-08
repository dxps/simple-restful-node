let productCatalog = require("../catalog/catalog.js");
let standardErrorMessage = require("./standard-error");

let appRouter = function(app) {

app.get("/", function (req, res) {
    return standardErrorMessage(res);
});

app.get("/product-catalog", function (req, res) {
    return standardErrorMessage(res);
});

app.post("/product-catalog", function (req, res) {

    /* Handling the request, knowing that the body should look like this:
       {
          "language": "en",
          "filter": [
             { "categoryId": "1", "productIds": [ "1", "2" ] }
          ]
       }
    */

    let language = req.body.language;

    if (!language) {
        return res.send({"status": "error", "message": "'language' is not provided in the body of the request."});
    }
    if (!req.body.filter) {
        return res.send({"status": "error", "message": "'filter' is not provided in the body of the request."});
    }

    let result = [];
    req.body.filter.map( filterEntry => {
        let categoryId = filterEntry.categoryId;
        let category = productCatalog[categoryId];
        let productIds = filterEntry.productIds;
        if (!category) return;
        let resultPart = { "categoryId": categoryId, "products": [] };
        productIds.map( productId => {
           category.map( product => {
             if (product.id === productId) {
                resultPart.products.push({ "productId": productId, "label": product.label[language]});
             }
          });
        });
        result.push(resultPart);
    });

    return res.send(result);
});

};

module.exports = appRouter;
