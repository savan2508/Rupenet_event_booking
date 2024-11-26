import express from "express";

const router = express.Router();

router.get("/api/users/hello", (req, res) => {
  const message = "Hello world";

  res.status(200).send({ message });
});

export { router as helloTestRouter };
