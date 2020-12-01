import { db } from "./firebaseIndex";

const getAllChallenges = db.collection('challenges');


export { getAllChallenges }