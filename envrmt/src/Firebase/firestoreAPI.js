import firebase from "firebase/app";
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

const createProgress = async (uid) => {
	await db
		.collection("progress")
		.doc(uid)
		.set({
			user: uid,
			completed: 0,
			avoided: 0,
			finished: [],
			active: [], //this needs to be updated after onboarding
		});
};

const addActiveChallenge = async (uid, challengeid) => {
	await db
		.collection("progress")
		.doc(uid)
		.update({
			active: firebase.firestore.FieldValue.arrayUnion(db.doc("challenges/" + challengeid))
		})
}

const getSpecific = async (id) => {
	let specific = await getAllChallenges.where("id", "==", id).get();
	return specific;
};

export { getAllChallenges, createUser, getUserName, createProgress, addActiveChallenge, getSpecific };
