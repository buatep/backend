module.exports = (app) => {
  const struktur = require("../controllers/struktur.controller.js");
  const router = require("express").Router();

  router.post("/addstr", struktur.add);

  app.use("/", router);
};
