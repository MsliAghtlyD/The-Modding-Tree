let modInfo = {
	name: "A Tree For Sure",
	id: "thismodsurewaswrittenbymsliaghtlyd",
	author: "MsliAghtlyD",
	pointsName: "questions",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.035",
	name: "A beginning",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.<br><br>
	<h3>v0.01</h3><br>
		- A day has passed.<br>
		- Added first challenge.<br>
		- Cookie breaks loose<br>
		- Added Achievements<br>
		- Added first Changelog entry<br>
		- Corrected a few bug<br>
		- Created a lot more<br><br>
	<h3>v0.02</h3><br>
		- A day has passed<br>
		- Added two more challenge<br>
		- Tried to implement keeping clue upgrades<br>
		- Made milestones to automate clue gain<br>
		- Clue upgrade cannot be kept, Cookie time is too powerful<br>
		- Made another changelog entry<br>
		- Made first secret Achievement<br>
		- Corrected a few bug<br>
		- Created a lot more<br><br>
	<h3>v0.03</h3><br>
		- A day has passed<br>
		- Succesfully implemented keeping clue upgrades<br>
		- Created Despair to contain Cookie<br>
		- Added fourth mystery challenge<br>
		- Added new Changelog entry<br>
		- Corrected a few bug<br>
		- Created a lot more<br><br>
	<h3>v0.035</h3><br>
		- Four days have passed<br>
		- Made Theory though still completely empty<br>
		- Made some corrections on the descriptions all around<br>
		- Third mystery upgrade finally has an effect<br>
		- Found out game version was still "0.01"<br>
		- Made second secret achievement <br>
		- Corrected a few bugs<br>
		- Created a lot more<br>`

	

let winText = `Congratulations! You have reached the end and beaten this game, now wait for a game breaking upgrade that requires you to reset everything`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(0)
	if (hasUpgrade('c', 11)) gain = new Decimal(1)
	if (hasUpgrade('c', 12)) gain = gain.times(3)
	if (hasUpgrade('c', 13)) gain = gain.times(upgradeEffect('c', 13))
	if (hasUpgrade('c', 21)) gain = gain.times(upgradeEffect('c', 21))
	if (hasUpgrade('m', 12)) gain = gain.times(upgradeEffect('m', 12))
	if (hasUpgrade('c', 22)) gain = gain.pow(0.1)
	if (inChallenge('d', 11)) gain = gain.pow(0.1)
	if (inChallenge('m',11)) gain = gain.pow(0.8)
	if (inChallenge('m',13)) gain = gain.pow(0.5)
	if(inChallenge('m', 14)) if (hasUpgrade('c', 22)) gain = gain.pow(8)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){return"Current endgame: fourth challenge"},
]

// Determines when the game "ends"
function isEndgame() {
	return (hasChallenge('m', 14))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}