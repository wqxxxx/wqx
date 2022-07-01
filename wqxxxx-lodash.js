var wqxxxx = {
    chunk: function (array, size = 1) {
        var a = []
        var len = array.length
        var x = 0
        while (x < len) {
            a.push(array.slice(x, x + size))
            x = x + size
        }
        return a
    },


    compact: function (array) {
        var a = []
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {
                a.push(array[i])
            }
        }
        return a
    },


    drop: function (array, n = 1) {
        var len = array.length
        var a = []
        if (n > len) {
            return a = []
        }
        for (var i = n; i < len; i++) {
            a.push(array[i])
        }
        return a
    },



    dropRight: function (array, n = 1) {
        var len = array.length
        for (var i = 0; i < n; i++) {
            array.pop()
        }
        return array
    },


    fill: function (array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },



    flatten: function (array) {
        var a = []
        for (var i = 0; i < array.length; i++) {
            var item = array[i]
            if (Array.isArray(item)) {
                for (var j = 0; j < item.length; j++) {
                    a.push(item[j])
                }
            } else {
                a.push(item)
            }
        }
        return a
    },



    flattenDeep: function (array) {
        var a = []
        for (var i = 0; i < array.length; i++) {
            var item = array[i]
            if (Array.isArray(item)) {
                item = this.flattenDeep(item)
                for (var j = 0; j < item.length; j++) {
                    a.push(item[j])
                }
            } else {
                a.push(item)
            }
        }
        return a
    },



    fromPairs: function (pairs) {
        var a = {}
        for (var i = 0; i < pairs.length; i++) {
            a[pairs[i][0]] = pairs[i][1]
        }
        return a
    },



    head: function (array) {
        var len = array.length
        if (len == 0) {
            return undefined
        } else {
            return array[0]
        }
    },


    indexOf: function (array, value, fromIndex = 0) {
        var len = array.length
        for (var i = fromIndex; i < len; i++) {
            if (array[i] == value) {
                return i
            }
        } return -1
    },



    initial: function (array) {
        array.pop()
        return array
    },



    join: (array, separator = ',') => {
        var a = array[0] + ''
        for (var i = 1; i < array.length; i++) {
            a = a + separator + array[i]
        }
        return a
    },



    last: function (array) {
        return array[array.length - 1]
    },



    pull: function (array, ...values) {
        var s = [...values]
        var a = array
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < s.length; j++) {
                if (array[i] == s[j]) {
                    array.splice(i, 1)
                }
                a = array
            }
        }
        return array
    },



    reverse: function (array) {
        var a = []
        for (var i = array.length - 1; i >= 0; i--) {
            a.push(array[i])
        }
        return a
    },



    tail: function (array) {
        array.shift()
        return array
    },



    take: function (array, n = 1) {
        var a = []
        if (n >= array.length) {
            return array
        }
        for (var i = 0; i < n; i++) {
            a.push(array[i])
        }
        return a
    },



    takeRight: function (array, n = 1) {
        var a = []
        var len = array.length
        if (n > len - 1) {
            return array
        }
        for (var i = len - n; i <= len - 1; i++) {
            a.push(array[i])
        }
        return a
    },



    union: function (...array) {
        var arr = []
        var a = arr.concat(...array)         //   拼接数组
        var s = []
        for (var i = 0; i < a.length; i++) {
            if (s.indexOf(a[i]) === -1) {
                s.push(a[i])
            }
        }
        return s
    },



    uniq: function (array) {
        var a = []
        for (var i = 0; i < array.length; i++) {
            if (!a.includes(array[i])) {
                a.push(array[i])
            }
        }
        return a
    },



    without: function (array, ...values) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            if (!values.includes(array[i])) {
                arr.push(array[i])
            }
        }
        return arr
    },



    size: function (collection) {
        var a = Object.keys(collection)
        var len = a.length
        return len
    },



    isMatch: function (obj, src) {
        for (var key in src) {
            if (src[key] && typeof src[key] === 'object') {
                if (!isMatch(obj[key], src[key])) {
                    return false
                }
            } else {
                if (src[key] !== obj[key]) {
                    return false
                }
            }
        }
        return true
    },



    matches: function (source) {
        return function (obj) {
            for (var key in source) {
                if (obj[key] !== source[key]) {
                    return false
                }
            }
            return true
        }
    },



    ary: function (func, n = func.length) {
        return function (...args) {
            return func.call(this, ...args.slice(0, n))
        }
    },



    unary: function (func) {
        return function (...args) {
            return func(...args.slice(0, 1))
        }
        //   return ary(func,1)
    },



    negate: function (predicate) {
        return function (...args) {
            return !predicate(...args)
        }
    },



    spread: function (func) {
        return function (ary) {
            return func.apply(this, ary)
        }
    },



    curry: function (f, n = f.length) {
        return function (...args) {
            if (args.length < n) {
                return curry(f.bind(null, ...args), n - args.length)
            } else {
                return f(...args)
            }
        }
    },



    flip: function (func) {
        return function (...args) {
            return func(...args.reverse())
        }
    },








}