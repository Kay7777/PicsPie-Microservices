import request from "supertest";
import { app } from "../../app";

it("200 delete one post", async () => {
  const cookie = global.signin();
  const comment = await request(app)
    .post("/api/comments/testid")
    .set("Cookie", cookie)
    .send({
      content: "test content",
    })
    .expect(201);
  expect(comment.body.content).toEqual("test content");

  const doc = await request(app)
    .delete("/api/comments/" + comment.body.id)
    .set("Cookie", cookie)
    .send({})
    .expect(204);
  expect(doc.body.id).toEqual(undefined);
});
