import firebase from "firebase/app";
import { db } from "./firebaseIndex";

const getAllChallenges = db.collection("challenges");

const createUser = async (uid, name) => {
	await db.collection("users").doc(uid).set({
		name: name,
		finishedOnboarding: false,
		level: 1,
		preference: "",
	});
};

const getUser = async (uid) => {
	const snapshot = (await db.collection("users").doc(uid).get()).data();
	return snapshot;
};

const createProgress = async (uid) => {
	await db.collection("progress").doc(uid).set({
		user: uid,
		completed: 0,
		avoided: 0,
		failed: 0,
		finished: [], //array of document references
		active: [], //this needs to be updated after onboarding
	});
};

const getFirstChallenge = async (uid) => {
	const snapshot = (await db.collection("users").doc(uid).get()).data();
	const data = db
		.collection("challenges")
		.where("level", "==", snapshot.level)
		.where("category", "==", snapshot.preference)
		.get();

	const array = (await data).docs.map((doc) => doc.data());
	return array[Math.floor(Math.random() * array.length)];
};

const checkOnboardingComplete = async (uid) => {
	const snapshot = (await db.collection("users").doc(uid).get()).data();
	const isDone = snapshot.finishedOnboarding;
	return isDone;
};

const updateOnboardingScore = async (uid, score, pref) => {
	if (score > 0) {
		await db.collection("users").doc(uid).update({
			level: score,
			preference: pref,
		});
	} else {
		await db.collection("users").doc(uid).update({
			level: 1,
			preference: pref,
		});
	}
};

const updateOnbardingFinished = async (uid, value) => {
	await db.collection("users").doc(uid).update({
		finishedOnboarding: value,
	});
};

const getProgress = async (uid) => {
	const snapshot = (await db.collection("progress").doc(uid).get()).data();
	return snapshot;
};

const addActiveChallenge = async (uid, challengeid) => {
	await db
		.collection("progress")
		.doc(uid)
		.update({
			active: firebase.firestore.FieldValue.arrayUnion(challengeid),
		});
};

const finishChallenge = async (uid, challengeid, tempAvoidance) => {
	await db
		.collection("progress")
		.doc(uid)
		.update({
			finished: firebase.firestore.FieldValue.arrayUnion(challengeid),
			active: firebase.firestore.FieldValue.arrayRemove(challengeid),
			completed: firebase.firestore.FieldValue.increment(1),
			avoided: firebase.firestore.FieldValue.increment(tempAvoidance),
		});
};

const failChallenge = async (uid, challengeid) => {
	await db
		.collection("progress")
		.doc(uid)
		.update({
			active: firebase.firestore.FieldValue.arrayRemove(challengeid),
			failed: firebase.firestore.FieldValue.increment(1),
		});
};

const getActiveChallenges = async (uid) => {
	const snapshot = await db.collection("progress").doc(uid).get();
	return snapshot.data().active;
};

const getChallenge = async (ids) => {
	let specific = await getAllChallenges.where("id", "in", ids).get();
	return specific;
};

export {
	getAllChallenges,
	getActiveChallenges,
	createUser,
	getUser,
	getProgress,
	createProgress,
	addActiveChallenge,
	finishChallenge,
	failChallenge,
	getChallenge,
	updateOnboardingScore,
	updateOnbardingFinished,
	getFirstChallenge,
	checkOnboardingComplete,
};
