function FakeArray(...elements) {
    this.length = 0

    for (const pos in elements) {
        this[pos] = elements[pos];
        this.length++;
    };

    this.push = function (newElement) {
        this[this.length] = newElement;
        this.length++;
        return newElement;
    };

    this.forEach = function (callback) {
        for (let index = 0; index < this.length; index++) {
            callback(this[index], index);
        }
    };

    this.map = function (callback) {
        const mapped = new FakeArray();

        for (let index = 0; index < this.length; index++) {
            mapped.push(callback(this[index], index));
        }
        return mapped
    };

    this.pop = function () {
        index = (this.length - 1);
        nameDeleted = this[index]
        delete this[index];
        this.length--;
        return  nameDeleted;
    };

    this.shift = function () {
        const cloneArray = Array.from(this)
        const charDeleted = cloneArray[0]
        maximun = (this.length - 1)
        for (let index = maximun; index > 0; index--) {
          this[(index - 1)] = cloneArray[index];
        }
        delete this[maximun];
        this.length--;
        return charDeleted;
    };

    this.unshift = function (newElement) {
        for (let index = this.length; index > 0; index--) {
          this[index] = this[(index - 1)];
        }
    
        this[0] = newElement;
        this.length++
        return newElement;
    };

    this.join = function (separate) {
        if (separate === undefined) {
         separate = ","
        } 
        word = ""
        for (let index = 0; index < this.length; index++) {
        if (word === "") {
        word += this[index]  
        } else {
        word += separate + this[index] 
        }
       
    } 
        return word;
    }

    this.concat = function (newArray) {
        const concated = new FakeArray();

        for (let index1 = 0; index1 < this.length; index1++) {
            concated.push(this[index1]);
        };
        for (let index2 = 0; index2 < newArray.length; index2++) {
            concated.push(newArray[index2]);
        };
        return concated
    };

    this.indexOf = function (searchElement) {
        let elementIndex = -1;

        for (let index = 0; index < this.length; index++) {
            if (this[index] === searchElement ){
                elementIndex = index
            };
        };
        return elementIndex
    };

    this.find = function (callback) {
        for (let index = 0; index < this.length; index++) {
            if (callback(this[index])){
                return this[index]
                break
            };
        };
        return undefined
    };

    this.filter = function (callback) {
        const mapped = new FakeArray();

        for (let index = 0; index < this.length; index++) {
            if (callback(this[index])){
                mapped.push(this[index], index);
            };
        };
        return mapped
    };

    this.findIndex = function (callback) {
        let not_found = -1 
        for (let index = 0; index < this.length; index++) {
            if (callback(this[index])){
                return index
                break
            };
        };
        return not_found
    };

    this.every = function (callback) {
        let count = 0
        for (let index = 0; index < this.length; index++) {
            if (callback(this[index])){
                count += 1
            };
        };
        if (count === this.length) {
            return true
        } else {
            return false
        };
    };

    this.some = function (callback) {
        let count = 0
        for (let index = 0; index < this.length; index++) {
            if (callback(this[index])){
                count += 1
            };
        };
        if (count > 0) {
            return true
        } else {
            return false
        };
    };

    this.reduce = function (callback) {
        let result = 0
        for (let index = 0; index < this.length; index++) {
            result = callback(result, this[index])
        };
        return result
    };

    this.reverse = function () {
        const array = new FakeArray();
        for (let index = (this.length - 1); index >= 0; index--) {
           array.push(this[index])
        };
        for (let index = (this.length - 1); index >= 0; index--) {
           this[index] = array[index]
        };
        return this;
    };

    this.includes = function (value,index) {
        let count = 0
        for (let idx = 0; idx < this.length; idx++) {
            if (index !== undefined) {
                if (value === this[idx] && index === idx){
                    count += 1
                } 
                
            } else {
                if (value === this[idx]){
                    count += 1
                }
            }
        }
        if (count > 0){
            return true

            }else{ 
                return false
              
        }
    }

}


//array = new FakeArray("Diego", "Andre", "Paulo")

// concat     |♪
// indexOf    |♪
// find       |♫
// filter     |♪
// findIndex  |♪
// every      |♪
// some       |♪