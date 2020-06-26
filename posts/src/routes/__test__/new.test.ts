import request from "supertest";
import { app } from "../../app";

it("Unauthorized 401 when not Signin", async () => {
  await request(app)
    .post("/api/posts")
    .send({
      title: "test title",
      content: "test content",
      images: [],
      videos: [],
    })
    .expect(401);
});

it("Bad resquest 400 when missing title", async () => {
  const cookie = global.signin();
  await request(app)
    .post("/api/posts")
    .set("Cookie", cookie)
    .send({ title: "", content: "test content", images: [], videos: [] })
    .expect(400);
});

it("Bad resquest 400 when missing content", async () => {
  const cookie = global.signin();
  await request(app)
    .post("/api/posts")
    .set("Cookie", cookie)
    .send({ title: "test title", content: "", images: [], videos: [] })
    .expect(400);
});

it("Pass 201 when successfully create a post", async () => {
  const cookie = global.signin();
  const post = await request(app)
    .post("/api/posts")
    .set("Cookie", cookie)
    .send({
      title: "test title",
      content: "test content",
      images: [],
      videos: [],
    })
    .expect(201);
  expect(post.body.title).toEqual("test title");
});
