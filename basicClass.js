function SpellFactory(spell){
    this.spellText = spell; //public varibale

    let doSpell = function(){ //private variable (member)
        console.log(this.spellText);
    }

    this.changeSpell = function(newSpell){ //private variable (member)
        this.spellText = newSpell;
    }

    this.spell = doSpell; //public member
    return this;
}

let abraCadabra = new SpellFactory("abradacabra");

abraCadabra.spell();
abraCadabra.changeSpell(new Error("boo...."));
abraCadabra.spell();