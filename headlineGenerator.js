// Headline generator master object
const phraseMaker = {
    
    // Content arrays
    who: ["Princess Anne", "High school janitor", "Art teacher", "Delivery boy", "Elon Musk",
    "RuPaul", "Lady Gaga", "Lunch lady", "Sandwich artist", "Shop clerk",
    "Boris Johnson", "TV anchor", "Dentist", "Pediatrician", "Homeless man",
    "Bag lady", "Experimental theologian", "Priest", "Pope Francis", "Bus driver",
    "Grandma", "Retiree", "Police chief", "Small town mayor", "Local sculptor"],
    
    whatAction: ["eats", "grooms", "shoves", "sings about", "covets",
    "ruins", "celebrates", "hugs", "makes amends with", "seranades",
    "prays for", "performs autopsy on", "disects", "sits on", "elopes with",
    "dances with", "underestimates", "makes a fool of", "exorcises", "laughs at",
    "trips over", "sues", "hires", "apologizes to", "breastfeeds"],
    
    whatAdj: ["delicious", "sexy", "nasty", "stale", "friendly",
    "old", "cranky", "gorgeous", "shiny", "religious",
    "intelligent", "slow", "fluffy", "sadistic", "helpful",
    "whimsical", "merry", "drunk", "indignant", "capricous",
    "bearded", "obese", "elegant", "big-nosed", "feminine"],

    whatObject: ["cat", "chimpanzee", "trash can", "bagel", "pigeon",
    "organ", "hors d'oeuvres", "shoe", "child", "baby",
    "ghost", "musician", "eggplant", "mall Santa", "fast food worker",
    "degenerate", "hypochondriac", "cult leader", "banana", "invalid",
    "waiter", "cactus", "trapeze artist", "sack of potatoes", "pervert"],
    
    where: ["in closet", "at church", "in Fiji", "in parking lot", "at home",
    "on subway", "in public", "on stage", "at Burger King", "in stables",
    "at City Hall", "in clown car", "at banquet", "in bed", "at fruit stand",
    "in grocery store", "at haberdashery", "on bus", "in forest", "behind mother's back",
    "at amusement park", "on cruiseship", "at mall", "in congress", "at Thanksgiving"],

    whoReact: ["townspeople", "church-goers", "school board", "board of directors", "Candadians",
    "cat-lovers", "unions", "bigots", "nurses", "zoo keepers",
    "parents", "fans", "victims", "party-goers", "protesters",
    "clowns", "nursing homes", "carolers", "tourists", "congressmen",
    "fish", "rioters", "patients", "farmers", "critics"],

    reaction: ["rejoice", "grimace", "confused", "elated", "giddy",
    "frightened", "exhausted", "turn a blind eye", "shrug", "embarassed",
    "dizzy", "have heard it before", "vindicated", "disgusted", "in tears",
    "sedated", "look for answers", "tweet", "defecate", "want more",
    "want prison time", "still looking for Waldo", "sneeze", "dance the night away", "frantic"],
    
    
    // Random string selectors from arrays
    randWho() {
        return this.who[Math.floor(Math.random() * this.who.length)]
    },

    randWhatAction() {
        return this.whatAction[Math.floor(Math.random() * this.whatAction.length)]
    },

    randWhatAdj() {
        return this.whatAdj[Math.floor(Math.random() * this.whatAdj.length)]
    },

    randWhatObject() {
        return this.whatObject[Math.floor(Math.random() * this.whatObject.length)]
    },

    randWhere() {
        return this.where[Math.floor(Math.random() * this.where.length)]
    },

    randWhoReact() {
        return this.whoReact[Math.floor(Math.random() * this.whoReact.length)]
    },
    
    randReaction() {
        return this.reaction[Math.floor(Math.random() * this.reaction.length)]
    },

    // Combine random strings
    randPhrase() {
        return (this.randWho() + " " + this.randWhatAction() + " " + this.randWhatAdj()
        + " " + this.randWhatObject() + " " + this.randWhere() + "; " + this.randWhoReact() + " "
        + this.randReaction() + ".");
    }
}

console.log(phraseMaker.randPhrase());