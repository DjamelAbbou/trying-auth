import { addUserToDb } from "@/modules/addUser";

export async function handler(req, res) {
  addUserToDb(req);
}
