function Game () {
    let count = 0
    hash = {"11": " ", "12": " ", "13": " ", "21": " ", "22": " ", "23": " ", "31": " ", "32": " ", "33": " "}
    this.play = function (numbery, numberx) {

        let mark = ""
        if (count === 0) {
            mark = "0"
        } else if (count === 1){
            mark = "X"
        }
        let view = false
        let y = numbery.toString()
        let x = numberx.toString()

        let selected = y + x

        if (hash[selected] === " ") {
            hash[selected] = mark
            view = true
        } else if (hash[selected] !== ""){
            console.log("unvalid movement")
            view = false
            return
        } else if (hash[selected] === undefined) {
            console.log("unvalid movement")
            view = false
            return
        }

        let word = `        ${hash["11"]} | ${hash["12"]} | ${hash["13"]}
        ---------
        ${hash["21"]} | ${hash["22"]} | ${hash["23"]}
        ---------
        ${hash["31"]} | ${hash["32"]} | ${hash["33"]}`

        if (view) console.log(word)

        if (count === 0) {
            count++
        } else if (count === 1){
            count--
        }
        
    }
}