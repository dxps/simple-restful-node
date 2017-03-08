
let standardErrorMessage = function (res) {
   return res.send("\nThe only allowed request is a POST to /product-catalog\n"
         + "and the body of the request should look like this: \n\n{\n"
         + "  \"language\": \"en\", \n"
         + "  \"filter\": [ \n"
         + "      { \"categoryId\": \"1\", \"productIds\": [ \"1\", \"2\" ] } \n"
         + "  ] \n"
         +"}"
   );
}

module.exports = standardErrorMessage;
