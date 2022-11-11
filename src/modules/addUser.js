import dbPromise from "@/modules/db";

export async function addUserToDb(req) {
  if (req.method == "POST") {
    const credentials = JSON.parse(req.body);

    const user = await (await dbPromise)
      .db()
      .collection("user")
      .insertOne(credentials);

    res.status(200).json(user);
  }
}
