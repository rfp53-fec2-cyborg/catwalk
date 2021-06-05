const controller = require('./controllers');
const router = require('express').Router();

// Retrieves the list of products
router.get('/products', controller.products.get);

// Returns all product level information for a specified product id.
router.get('/products/:product_id', controller.products.get);

// Returns the all styles available for the given product.
router.get('/products/:product_id/styles', controller.products.get);

// Returns the id's of products related to the product specified.
router.get('/products/:product_id/related', controller.products.get);


// Returns a list of reviews for a particular product. This list does not include any reported reviews.
router.get('/reviews', controller.reviews.get);

// Returns review metadata for a given product.
router.get('/reviews/meta', controller.reviews.getMeta);

// Adds a review for the given product.
router.post('/reviews', controller.reviews.post);

// Updates a review to show it was found helpful.
router.put('/reviews/:review_id/helpful', controller.reviews.putHelpful);

// Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.
router.put('/reviews/:review_id/report', controller.reviews.putReport);



// Retrieves a list of questions for a particular product. This list does not include any reported questions.
router.get('/qa/questions', controller.questions.get);

// Returns answers for a given question. This list does not include any reported answers.
router.get('/qa/questions/:question_id/answers', controller.questions.get);

// Adds a question for the given product
router.post('/qa/questions', controller.questions.post);

// Adds an answer for the given question
router.post('/qa/questions/:question_id/answers', controller.questions.post);

// Updates a question to show it was found helpful.
router.put('/qa/questions/:question_id/helpful', controller.questions.put);

// Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.
router.put('/qa/questions/:question_id/report', controller.questions.put);



// Updates an answer to show it was found helpful.
router.put('/qa/answers/:answer_id/helpful', controller.answers.put);

// Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.
router.put('/qa/answers/:answer_id/report', controller.answers.put);



// Retrieves list of products added to the cart by a user.
router.get('/cart', controller.cart.get);

// Adds a product to the cart.
router.post('/cart', controller.cart.post);
