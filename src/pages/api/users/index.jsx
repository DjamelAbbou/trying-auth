import createHandler from "next-connect";
import clientPromise from "@/modules/db";

const handler = createHandler();

handler.get(async (req, res) => {
  return { users: await getUsers() };
});

handler.post(async (req, res) => {
  const json = JSON.parse(req.body);

  res.json({ _id: await persistUser(json) });
});

export async function persistUser({ _id, name, email, address }) {
  const fn =
    _id?.length > 0
      ? (db) =>
          db.updateOne(
            { _id: ObjectId(req.query._id) },
            { $set: { title, markdown } }
          )
      : (db) =>
          db.insertOne(
            { _id: ObjectId(req.query._id) },
            {
              $set: { title, markdown },
            }
          );

  const obj = fn(await (await clientPromise).db().collection("posts"));

  return obj;
}

export async function getUsers(filter = {}) {
  return await (await clientPromise)
    .db()
    .collection("users")
    .find(filter)
    .toArray();
}
