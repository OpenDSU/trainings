let obj = {
    hello:"Hello World",
     test: function(){
        console.log(this.hello);
    }
}

let f = obj.test;
obj.test();
f();
