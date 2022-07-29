const Router = require("@koa/router");
const router = new Router();

const postsController = require("../controllers/posts-controller");

router.get("/posts", postsController.getAll);
router.get("/posts/:id", postsController.getById);
router.get("/posts/:id", postsController.deleteById);
router.get("/posts", postsController.create);

module.exports = router;

// router.get("/posts", (ctx) => {
//   ctx.body = postsModel.posts;
// });

// router.get("/posts/:id", (ctx) => {
//   const index = ctx.request.params.id;
//   ctx.body = postsModel.posts[index];
// });

// router.delete("/posts/:id", (ctx) => {
//   const index = ctx.request.params.id;
//   postsModel.posts.splice(index, 1);
//   ctx.status = 204;
// });

// router.post("/posts", (ctx) => {
//   const text = ctx.request.body.text;
//   postsModel.posts.push({ text });
//   ctx.status = 201;
// });
