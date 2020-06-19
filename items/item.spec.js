const itemRouter = require("./item-router")
const request = require('supertest');


describe("GET /", function() {
    it("should return a 200 OK", function() {
      request(itemRouter)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return a JSON", function() {
      request(itemRouter)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });


  describe("GET /:id", function() {
    const name = "test123";
    const content = "this is a test";
  
    it("should return one item", function() {
      request(itemRouter)
        .post("/login")
        .send({ username: "test123", password: "test", })
        .then(res => {
          const token = res.body.token;
  
          request(itemRouter)
            .get( ':/id')
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200);
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
    });
  });
  




  describe("POST /", function() {
    it("should return a 201 CREATED", function() {
      request(itemRouter)
        .post("/")
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it("should return a JSON", function() {
      request(itemRouter)
        .post("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });


describe("PUT /:id", function() {
  const name = "test123";
  const image = "this is a test";
  const price = "$222"

  it("should edit the item", function() {
    request(itemRouter)
      .post("/login")
      .send({ username: "test123", password: "test" })
      .then(res => {
        const token = res.body.token;

        request(itemRouter)
          .put({ name, image, price })
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  });
});

describe("DELETE /:id", function() {
    const name = "test123";
    const image = "this is a test";
    const price = "$222"

  it("should delete the item", function() {
    request(itemRouter)
      .post("/login")
      .send({ username: "test123", password: "test" })
      .then(res => {
        const token = res.body.token;

        request(itemRouter)
          .delete("/api/item/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.body.removed).toBe("deleted");
          });
      });
  });
});