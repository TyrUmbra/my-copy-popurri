function Marquee(text, size) {
    this.run = function () {
        let textSplit = text.split("")
        let space = " "
        let idx = 0
        let splitSolid = []
        let pos = 0
        space.repeat(size).split("").forEach(spaces => splitSolid.push(spaces))
        textSplit.forEach(letters => splitSolid.push(letters))
        solidArray = []
        for (let i = size; idx <= splitSolid.length; i++) {
            let array = []
            splitSolid.forEach(function(letters, index) {
                if (idx <= index && index < i) {
                    array.push(letters)
                }
            });
            idx ++;
            solidArray.push(array.join(""))
        }
        setInterval (() => {
            console.clear();
            console.log(solidArray[pos++]);
            if (pos === solidArray.length) pos = 0;
        }, 200)
    }
}

// new Marquee(texto("hola que tal"), tamaño(50))
// size = 50
// "texto hola" = ["t","e","x","t","o"," ","h","o","l","a"]
// "                                        "
// splitSolid = [" "," "," "," "," "," "," "," "," "," "," "," "," "," "]
// splitSolid = [" "," "," "," "," "," "," "," "," "," "," "," "," "," ","t","e","x","t","o"," ","h","o","l","a"] = 58
// size = 50 = i
// i = 50 
// array = [" "," "," "," "," "," "," "," "," "," "," "," "," "," "].join = "                                        "
// solidArray = ["                                                 ", "                                                 t", "                                                 te"]
// ["                                                 t"]
// ["                                                te"]
// ["                                               tex"]
// ["o                                                 "]
// ["                                                  "]
// marquee.run()