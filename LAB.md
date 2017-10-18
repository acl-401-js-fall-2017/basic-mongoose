Basic Mongoose Models
===

## Description

This assignment has you practicing full CRUD for a validated resource using ExpressJS and Mongoose.

Pick a resource, for example `unicorns`.

General:
1. Testing changes
   * Create separate folders for `unit` and `e2e` tests in the `test` directory
   * Modify `scripts` in `package.json`
      * add `--recursive` to running mocha
      * create separate `test:unit` and `test:e2e` scripts
   * (Don't forget to modify test path or add `--recursive` to mocha debug
2. Connecting to mongodb with mongoose:
   * Create `lib/connect.js`
   * Open connection mongoose in:
      * `server.js`
      * `test/e2e/db.js` 
3. Create an express app that uses a `lib` folder with a `models` folder and a `routes` folder.

For your resource:

* Create a schema and model: 
    * Pick one or two validations that the schema will have. 
    * Unit test a successful model and test validations fail correctly.
    * Implement the schema and validation
    * Also include in your schema:
        * Include a complex object property (a property that has sub fields, like an address with city, state, zip)
        * An array property (a property that holds zero or more of some values)
* Create HTTP REST routes:
    * Write E2E API tests adn routes for all of the exposed routes
        * require model in route
    * Routes are:
        * `GET /resources` list ([]) of all the resources
        * `GET /resources/:id` return single resource object with that id (or 404 if doesn't exist)
        * `POST /resources` add a new resource and return new entity from db with `_id`
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
