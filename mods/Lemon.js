# Lemon Sandboxels Mod

class Lemon {
    constructor() {
        this.category = "Fruits";
        this.description = "A sour fruit that is rich in citric acid.";
        this.citricAcid = 0;
        this.ph = 2; // pH level of citric acid
    }

    smash() {
        this.citricAcid += 10; // Releases 10 units of citric acid when smashed
        console.log("The lemon has been smashed! Citric acid released: " + this.citricAcid + " units. pH level: " + this.ph);
    }
}

// Citric Acid Element
class CitricAcid {
    constructor() {
        this.name = "Citric Acid";
        this.formula = "C6H8O7";
        this.ph = 2; // pH level of citric acid
    }

    info() {
        console.log(`Element: ${this.name}, Formula: ${this.formula}, pH level: ${this.ph}`);
    }
}

// Example usage
const lemon = new Lemon();
lemon.smash();

const citricAcid = new CitricAcid();
citricAcid.info();
