import request from "supertest";
import { app } from "../../app";
import { signinTest } from "../../test/setup";

it("responds with details about the current user", async () => {
  const cookie: string[] | undefined = await signinTest();

  if (!cookie) {
    throw new Error("Cookie not found");
  }

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@email.com");
});

it("responds with null if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(401);

  expect(response.body.currentUser).toEqual(undefined);
});
