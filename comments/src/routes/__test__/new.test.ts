import request from "supertest";
import { app } from "../../app";

it("Unauthorized 401 when not Signin", async () => {
  await request(app)
    .post("/api/comments/testid")
    .send({
      content: "test content",
    })
    .expect(401);
});

it("Bad resquest 400 when missing content", async () => {
  const cookie = global.signin();
  await request(app)
    .post("/api/comments/testid")
    .set("Cookie", cookie)
    .send({ content: "" })
    .expect(400);
});

it("Pass 201 when successfully create a post", async () => {
  const cookie = global.signin();
  const comment = await request(app)
    .post("/api/comments/testid")
    .set("Cookie", cookie)
    .send({ content: "test content" })
    .expect(201);
  expect(comment.body.content).toEqual("test content");
});
