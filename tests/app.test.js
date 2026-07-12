const test = require("node:test");
const assert = require("node:assert/strict");

process.env.MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1/test";

const app = require("../src/app");

test("la app carga sus rutas correctamente", () => {
  assert.ok(app);
  assert.equal(typeof app.handle, "function");
});
