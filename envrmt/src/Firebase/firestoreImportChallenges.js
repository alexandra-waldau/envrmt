const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
	apiKey: "AIzaSyAAVsAlc93LKMikvfuC0nR7wFTxOeWxsPE",
	authDomain: "envrmt.firebaseapp.com",
	projectId: "envrmt",
});

var db = firebase.firestore();

var challengeLog = [
	{
		avoidance: "0,25",
		category: "Food",
		description:
			"Used to always eat meat? Try to cut it out of a meal by trying out one vegan recipe. You won’t regret it!",
		duration: 5,
		id: 1,
		level: 1,
		title: "Try out a vegan recipe",
	},
	{
		avoidance: "0,25",
		category: "Food",
		description:
			"Did you know it’s super easy to plant your own veggies? Plant your first one now! Here are some idas:\nRadishes\n\nSalad leaves\n\nPeas\n\nSpring onions",
		duration: 5,
		id: 2,
		level: 1,
		title: "Get started in gardening",
	},
	{
		avoidance: "2,2",
		category: "Food",
		description:
			"Used to eat meat or dairy frequently? Try to cut it out for a whole day. We’re sure that you won’t even miss it!",
		duration: 5,
		id: 3,
		level: 2,
		title: "Go vegan for a day",
	},
	{
		avoidance: "0,73",
		category: "Food",
		description:
			"Use a homegrown veggie to make a meal. It will taste soooo much better than the food you can get at the store! Make it a habit for a month, and your Co2 reduction will be significant!",
		duration: 5,
		id: 4,
		level: 2,
		title: "Make a meal out of a home grown fruit or veggie",
	},
	{
		avoidance: "15,4",
		category: "Food",
		description:
			"Are you used to eating meat and dairy once in a while? Try cutting it out for a whole week. Does it seem hard to you? We’re sure you won’t even miss it at the end!",
		duration: 5,
		id: 5,
		level: 3,
		title: "Go vegan for a week",
	},
	{
		avoidance: "2,7",
		category: "Food",
		description:
			"Does it seem surreal? Yes, you can make your own compost and expand your garden, and save huge amounts of Co2 avoiding transportation! Pick up 3 new vegetables or fruits that you want to plant for your own consumption, and add it to your collection. We assure you that it won’t take up as much space as you’ve imagined! Here are some ideas:\nRadishes\n\nSalad leaves\n\nPeas\n\nSpring onions\n\nOnions\n\nGarlic\n\nTomatoes\n\nSpinach\n\nCucumbers",
		duration: 5,
		id: 6,
		level: 3,
		title: "Make your own compost, and create a home-garden corner!",
	},
	{
		avoidance: "61,6",
		category: "Food",
		description:
			"Do you need a final push to become a full vegan and save huge amounts of Co2? Make it easier to achieve by committing to this challenge.",
		duration: 5,
		id: 7,
		level: 4,
		title: "Go full vegan for a month!",
	},
	{
		avoidance: "3,95",
		category: "Food",
		description:
			"Remember to keep your garden alive with your own compost! If you have not planted new veggies or fruits in a while, now it’s time to do so and to use them in your meals. It will taste sooo much better!",
		duration: 5,
		id: 8,
		level: 4,
		title: "Use 5 homegrown ingredients in your food for one month!",
	},
	{
		avoidance: "0,25",
		category: "Transportation",
		description:
			"Used to taking the car? Leave it home for once, and try out public transport! You’ll figure out that by taking public transportation you’ll not only save Co2, but also have time for yourself to read, listen to music, or watch some Netflix. And you won’t have to worry about speeding tickets!",
		duration: 5,
		id: 9,
		level: 1,
		title: "Take public transportation",
	},
	{
		avoidance: "0,25",
		category: "Transportation",
		description:
			"Try to cut out the car from some of the activities where you don’t really need it. Are you driving to the city centre to meet friends just because it’s easier? Try the bike instead! We’ll guarantee you that it’s even easier to park, and you’ll get some free fitness!\nTIP: If you don’t own a bike, try renting one with services such as Donkey Republic",
		duration: 5,
		id: 10,
		level: 1,
		title: "Take the bike for a day",
	},
	{
		avoidance: "0,5",
		category: "Transportation",
		description:
			"Drop the car for a whole day, and get to uni or work by other means! This can be by taking the bike, public transportation, or even car pooling!",
		duration: 5,
		id: 11,
		level: 2,
		title: "Get to work without a car",
	},
	{
		avoidance: 155,
		category: "Transportation",
		description:
			"Complete this challenge by promising yourself that you’re not going to fly to nearby cities (max. 700 km away). You can take a bus or the train, or even avoid the trip all over by switching it into a more sustainable vacation!",
		duration: 5,
		id: 12,
		level: 2,
		title: "Cut out unnecessary short air trips",
	},
	{
		avoidance: "2,5",
		category: "Transportation",
		description:
			"Use your bike to get around for a whole working week (5 days). You’ll feel that your legs suddenly became stronger, and you’ve done something good for the planet!",
		duration: 5,
		id: 13,
		level: 3,
		title: "Commit to your bike for a week!",
	},
	{
		avoidance: 234,
		category: "Transportation",
		description:
			"Were you planning to fly to the mediterranean this summer to enjoy the sandy and sunny beaches? Then stop it and try out something different for a change! Did you know that you can find the most amazing beaches here in Denmark? Drop any flight to a destination 2000 km away!",
		duration: 5,
		id: 14,
		level: 3,
		title: "Commit to sustainable holidays, and don’t fly!",
	},
	{
		avoidance: 15,
		category: "Transportation",
		description:
			"You might be used to not taking the car sometimes, but why don’t you try to avoid it fully? Think about it: if this challenge works for you, you might be able to sell your car, or at least save a lot of money on fuel that you can spend on something more environmentally-friendly. Doesn’t it sound like a good plan?",
		duration: 5,
		id: 15,
		level: 4,
		title: "Drop the car for a whole month",
	},
	{
		avoidance: 1.566,
		category: "Transportation",
		description:
			"Were you planning to take a long haul flight soon? Now it’s the time to change your mind! Reconsider your vacation, and feel good about the huge amounts of Co2 you’ll be saving. You can get a much better and sustainable vacation for the same price of only a long haul air ticket!",
		duration: 5,
		id: 16,
		level: 4,
		title: "Drop long haul flights!",
	},
	{
		avoidance: "3,75",
		category: "Shopping",
		description:
			"The next time you’re in need of something new such as clothes or furniture, try going to a thrift shop instead. It’s cheap, and what you’ll find is worth gold!",
		duration: 5,
		id: 17,
		level: 1,
		title: "Get some bargains at a thrift shop",
	},
	{
		avoidance: "4,2",
		category: "Shopping",
		description:
			"Used to using the dryer? Avoid it for the next time you’re washing, and save both money and Co2!",
		duration: 5,
		id: 18,
		level: 1,
		title: "Hang dry your clothes",
	},
	{
		avoidance: "0,4",
		category: "Shopping",
		description:
			"Make sure that you pay all your bills online next month, and make sure that companies won’t send paper letters to you. Avoiding the transportation of those saves a lot of Co2!",
		duration: 5,
		id: 19,
		level: 2,
		title: "Pay your bills online",
	},
	{
		avoidance: "16,8",
		category: "Shopping",
		description:
			"Can you commit to hang drying your clothes for a month? This is the first step of dropping the dryer forever!",
		duration: 5,
		id: 20,
		level: 2,
		title: "Drop the dryer for a month",
	},
	{
		avoidance: 354,
		category: "Shopping",
		description:
			"Plant a tree in your garden, if you have one, or otherwise, a place that is important for you! It’s lifetime contribution to the planet is huge!",
		duration: 5,
		id: 21,
		level: 3,
		title: "Plant a tree near you",
	},
	{
		avoidance: 30,
		category: "Shopping",
		description:
			"Purchase at a thrift store half of the time you go shopping for clothes",
		duration: 5,
		id: 22,
		level: 3,
		title: "Commit to a thrift store",
	},
	{
		avoidance: 370,
		category: "Shopping",
		description:
			"Next time you’re in need of a new appliance such as a fridge, toaster or washing machine, try getting one that is low energy. You’ll save money and Co2!",
		duration: 5,
		id: 23,
		level: 4,
		title: "Purchase a low-energy consuming product",
	},
	{
		avoidance: 60,
		category: "Shopping",
		description:
			"Commit to not buying your clothes from stores again, and switch to second hand! Thrift shops are fantastic, and we’ll only get more of them if we contribute to their proliferation!",
		duration: 5,
		id: 24,
		level: 4,
		title: "Only buy your clothes second hand",
	},
	{
		avoidance: "0,2",
		category: "Waste",
		description:
			"Going to the store to get a couple of things? Bring your own tote-bag! If you don’t have one, get one already. Some of them are very fashionable, and they are a much better accessory than a plastic bag!",
		duration: 5,
		id: 25,
		level: 1,
		title: "Bring your own bag",
	},
	{
		avoidance: "0,57",
		category: "Waste",
		description:
			"Next time that you produce waste, start sorting it into different bins. It’s the first step for creating a recycling system!",
		duration: 5,
		id: 26,
		level: 1,
		title: "Start recycling!",
	},
	{
		avoidance: 1,
		category: "Waste",
		description:
			"Going to the store to get a couple of things? Bring your own tote-bag the next five times you go shopping!",
		duration: 5,
		id: 27,
		level: 2,
		title: "Bring your own bags the next 5 times you go shopping",
	},
	{
		avoidance: "0,32",
		category: "Waste",
		description:
			"Use the eco program, load it fully, and don’t spend time rinsing the plates for a week, and start making it a habit!",
		duration: 5,
		id: 28,
		level: 2,
		title: "Run the dishwasher correctly",
	},
	{
		avoidance: "17,1",
		category: "Waste",
		description:
			"Recycle for the next month, and feel good about the benefits for the environment!",
		duration: 5,
		id: 29,
		level: 3,
		title: "Recycle for a month",
	},
	{
		avoidance: 210,
		category: "Waste",
		description:
			"Only turn on the heat when you’re feeling cold inside when dressed with pants and a sweater. Let your clothes heat you so you don’t heat up the planet!",
		duration: 5,
		id: 30,
		level: 3,
		title: "Watch the temperature!",
	},
	{
		avoidance: 415,
		category: "Waste",
		description:
			"Convince one of your friends or family members to start recycling as well. You’ll save double as much as Co2 if you both commit to it and make it a habit!",
		duration: 5,
		id: 31,
		level: 4,
		title: "Spread the word of recycling!",
	},
	{
		avoidance: 192,
		category: "Waste",
		description:
			"Commit to NEVER say yes to a plastic bag or other plastic products that you can avoid ever again! This is the key for change",
		duration: 5,
		id: 32,
		level: 4,
		title: "Avoid plastic forever!",
	},
];

challengeLog.forEach(function (obj) {
	db.collection("challenges")
		.add({
			avoidance: obj.avoidance,
			category: obj.category,
			description: obj.description,
			duration: obj.duration,
			id: obj.id,
			level: obj.level,
			title: obj.title,
		})
		.then(function (docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});
});
