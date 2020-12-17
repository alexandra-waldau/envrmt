import { db } from "./firebaseIndex";

const getAllChallenges = db.collection("challenges");

// currently not used
// TODO: create new progress doc when creating user doc
const createUser = async (name, email) => {
	await db.collection("users").add({
		name: name,
		email: email,
	});
};

const getSpecific = async (id) => {
	let specific = await getAllChallenges.where("id", "==", id).get();
	return specific;
};

export { getAllChallenges, createUser, getSpecific };
