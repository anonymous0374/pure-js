import 'babel-polyfill' // requires babel-polyfill to use generator functions

// returns generator
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let n = 0
    let msg = null
    for (let i = start; i < end; i += step) {
        n++
        // end = yield end
        msg = yield msg
        // yield 'hello world!'
    }
    return n
}
var rangeGenerator = makeRangeIterator(1, 4)
console.log(rangeGenerator.next('hello')) // the first next function won't pass in value into the generator
console.log(rangeGenerator.next('world')) // print: world
console.log(rangeGenerator.next()) // print: undefined --> because nothing assigned to msg by next()
console.log(rangeGenerator.next())
console.log(rangeGenerator.next()) // value is always undefined

//
function* fibonacci() {
    var fn1 = 0
    var fn2 = 1
    while (true) {
        var current = fn1
        fn1 = fn2
        fn2 = current + fn1
        var reset = yield current
        if (reset) {
            fn1 = 0
            fn2 = 1
        }
    }
}

var sequence = fibonacci() // returns a generator
console.log(sequence.next().value)     // 0
console.log(sequence.next().value)     // 1
console.log(sequence.next().value)     // 1
console.log(sequence.next().value)     // 2
console.log(sequence.next().value)     // 3
console.log(sequence.next().value)     // 5
console.log(sequence.next().value)     // 8
console.log(sequence.next(true).value) // 0
console.log(sequence.next().value)     // 1
console.log(sequence.next().value)     // 1
console.log(sequence.next().value)     // 2
