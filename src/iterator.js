// simple function
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    var nextIndex = start
    var nIterated = 0

    var rangeIterator = {
        next: function () {
            var result
            if (nextIndex < end) {
                result = {
                    value: nextIndex,
                    done: false
                }
            } else if (nextIndex == end) {
                result = {
                    value: nIterated,
                    done: true
                }
            } else {
                result = {
                    done: true
                }
            }
            nextIndex += step
            nIterated += 1
            return result
        }
    }
    return rangeIterator
}

var it = makeRangeIterator(1, 4)

var result = it.next()
while (!result.done) {
    console.log(result.value) // 1 2 3
    result = it.next()
}

console.log('Iterated over sequence of size: ', result.value)
