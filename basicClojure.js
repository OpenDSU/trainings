function SpellFactory(spell){
    return function(){
        spell = console.log(spell);
    }
}

let AbraCadabra = SpellFactory("abradacabra");

AbraCadabra();
AbraCadabra();