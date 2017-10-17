Basic Mongoose Models
===

## Description

This assignment has you practicing full CRUD for a validated resource using ExpressJS and Mongoose.

Pick a resource, for example `unicorns`.

General:
* Create a single overall express app that uses a `lib` folder with a `models` folder and a `routes` folder.
* Open connection to db via mongoose in both server and tests (follow `connect.js` for useful pattern)
* Create separate folders for `unit` and `e2e` tests and remember to add `--recursive` to `mocha` (and add to
debug as well!)

For your resource:

* Create a schema and model: 
    * Pick one or two validations that the schema will have. 
    * Unit test a successful model and test validations fail correctly.
    * Implement the schmea and validation
    * Also include in your schema:
        * Include a complex object property (a property that has subfields, like an address with city, state, zip)
        * An array property (a property that holds zero or more of some values)
* Create HTTP REST routes:
    * Write E2E API tests for all of the exposed routes
    * Routes are:
        * `GET /resources` list ([]) of all the resources
        * `GET /resources/:id` return single resource object with that id (or 404 if doesn't exist)
        * `POST /resources` add a new resource and return new entity from db with _id
        * `DELETE /resource/:id` Delete the resource with that id. Return `{ removed: <result> }` where `<result>`
        is `true` if it was deleted, otherwise `false`.
        
## Bonus

* `PUT /resource/:id` The resources is updated, meaning the old document content is entirely replaced with the new
content from the request body. 
        
#### Rubric:

* Resource
    * Schema and Model *2pts*
    * Model Unit Tests *2pts*
* Use Model and instance methods in routes *1pt* each = *5pts*
* Express App Project Structure (lib, lib/models, tests): *1pt*
