import { db } from "./firebaseIndex";

const getAllChallenges = db.collection("challenges");

const createUser = async (uid, name) => {
	await db.collection("users").doc(uid).set({
		name: name
	})
};

const getUserName = async (uid) => {
	const snapshot = (await db.collection("users").doc(uid).get()).data();
	return snapshot;
}

const getSpecific = async (id) => {
	let specific = await getAllChallenges.where("id", "==", id).get();
	return specific;
};

export { getAllChallenges, createUser, getUserName, getSpecific };
