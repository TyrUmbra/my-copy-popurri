function Formatter(number,type) {
    
    this.format = function (length) {
        let size = type.length
        let digits = length
        primaryResult = Math.floor(length / number)
        result = length
        count = 0

        for (i = 0; result > number; i++){
            if (type[count + 1] === undefined) {
                break
            }
            result = Math.floor(result / number);
            count++;
        }

        if (primaryResult === 0) {
            return primaryResult.toString() + type[count]
        } else {
            return result.toString() + type[count]
        }
    }
}


//VERSION 3
//function Formatter(number,type) {
//    
//    this.format = function (length) {
//        let size = type.length
//        let digits = length
//        primaryResult = Math.floor(length / number)
//        result = length
//        count = 0
//
//        for (i = 0; result > number; i++){
//            result = Math.floor(result / number);
//            count++;
//        }
//
//        if (primaryResult === 0) {
//            return primaryResult.toString() + type[count]
//        } else {
//            return result.toString() + type[count]
//        }
//    }
//}

//if (primaryResult === 0 && size >= 1) {
//    return digits.toString() + type[0]
//}else if (secondResult === 0 && size >= 2){
//    return result.toString() + type[1]
//}else if (secondResult > 0 && size >= 3){
//    return secondResult.toString() + type[2]
//}


//VERSION 2
//function Formatter(number,type) {
//    
//    this.format = function (length) {
//        let size = type.length
//        let digits = length
//        result = Math.floor(length / number)
//        secondResult = Math.floor(result / number)
//
//        if (result === 0 && size >= 1) {
//            return digits.toString() + type[0]
//        }else if (secondResult === 0 && size >= 2){
//            return result.toString() + type[1]
//        }else if (secondResult > 0 && size >= 3){
//            return secondResult.toString() + type[2]
//        }
//    }
//}



//VERSION 1
//function Formatter(number,type) {
//    
//    this.format = function (length) {
//        let size = type.length
//        let digits = length
//        let count = 0 
//        let second_count = 0 
//        for (let i = length; (i - number) >= 0; i -= number) {
//            count++;
//        }
//        for (let i = count; (i - number) >= 0; i -= number) {
//            second_count++;
//        }
//        if (count === 0 && size >= 1) {
//            return digits.toString() + type[0]
//        }else if (second_count === 0 && size >= 2){
//            return count.toString() + type[1]
//        }else if (second_count > 0 && size >= 3){
//            return count.toString() + type[2]
//        }
//    }
//}

//if (count === 0) {
//    return digits.toString() + type[0]
//}else{
//    for (let i = count; (i - number) >= 0; i -= number) {
//        
//    }
//}
// formater = new Formatter(1000,["g","kg"])

