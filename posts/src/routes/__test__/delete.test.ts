import request from "supertest";
import { app } from "../../app";

it("200 delete one post", async () => {
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

  const doc = await request(app)
    .delete("/api/posts/" + post.body.id)
    .set("Cookie", cookie)
    .send({})
    .expect(204);
  expect(doc.body.id).toEqual(undefined);
});
