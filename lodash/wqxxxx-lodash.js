var wqxxxx = {
    // 创建一个数组，将它们按size的长度分
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


    // 创建一个删除所有错误值的数组：
    compact: function (array) {
        var a = []
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {
                a.push(array[i])
            }
        }
        return a
    },


    // 数组从删除的第n个元素开始创建一个切片
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



    // 创建一个数组从末尾删除n个元素的切片
    dropRight: function (array, n = 1) {
        var len = array.length
        for (var i = 0; i < n; i++) {
            array.pop()
        }
        return array
    },


    // 数组用value的值填充，
    fill: function (array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value
        }
        return array
    },



    // 展平数组一次
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



    // 递归展平数组
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



    // 返回一个由key - value组成的对象
    fromPairs: function (pairs) {
        var a = {}
        for (var i = 0; i < pairs.length; i++) {
            a[pairs[i][0]] = pairs[i][1]
        }
        return a
    },



    // 返回数组的第一个元素
    head: function (array) {
        var len = array.length
        if (len == 0) {
            return undefined
        } else {
            return array[0]
        }
    },


    // 搜索value的值在第几次出现在哪个位置
    indexOf: function (array, value, fromIndex = 0) {
        var len = array.length
        for (var i = fromIndex; i < len; i++) {
            if (array[i] == value) {
                return i
            }
        } return -1
    },



    // 获取除最后一个元素之外的所有数组
    initial: function (array) {
        array.pop()
        return array
    },



    // 将所有元素用separator的值连接
    join: (array, separator = ',') => {
        var a = array[0] + ''
        for (var i = 1; i < array.length; i++) {
            a = a + separator + array[i]
        }
        return a
    },



    // 获取最后一个元素
    last: function (array) {
        return array[array.length - 1]
    },



    // 将数组中包含value的值都删除
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



    // 反向数组
    reverse: function (array) {
        var a = []
        for (var i = array.length - 1; i >= 0; i--) {
            a.push(array[i])
        }
        return a
    },



    // 获取除第一个元素之外的所有数组
    tail: function (array) {
        array.shift()
        return array
    },



    // 从n个元素的数组
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



    // 从末尾开始获取第n个元素
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



    // 合并数组，并且元素不重复
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



    // 创建无重复数组
    uniq: function (array) {
        var a = []
        for (var i = 0; i < array.length; i++) {
            if (!a.includes(array[i])) {
                a.push(array[i])
            }
        }
        return a
    },



    // 返回array中没有value的值的数组
    without: function (array, ...values) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            if (!values.includes(array[i])) {
                arr.push(array[i])
            }
        }
        return arr
    },



    // 返回类似数组的值的长度或对象自己的可枚举字符串键控属性的数量
    size: function (collection) {
        var a = Object.keys(collection)
        var len = a.length
        return len
    },



    // 检查数组是否包含src的值，返回真假
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



    // 给定对象和部分执行比较，如果有等效值返回真，否则返回假
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



    // 创建一个调用的函数，函数最多带n个参数
    ary: function (func, n = func.length) {
        return function (...args) {
            return func.call(this, ...args.slice(0, n))
        }
    },



    // 创建一个最多接受一个参数的函数
    unary: function (func) {
        return function (...args) {
            return func(...args.slice(0, 1))
        }
        //   return ary(func,1)
    },



    // 创建一个否定 predicate 结果的函数
    negate: function (predicate) {
        return function (...args) {
            return !predicate(...args)
        }
    },



    // 创建一个函数，该函数使用函数的this绑定和一个参数数组进行调用
    spread: function (func) {
        return function (ary) {
            return func.apply(this, ary)
        }
    },



    // 创建一个接受n个参数的函数，如果至少提供了多个参数，则f调用返回其结果，或者返回一个接受剩余参数的函数
    curry: function (f, n = f.length) {
        return function (...args) {
            if (args.length < n) {
                return curry(f.bind(null, ...args), n - args.length)
            } else {
                return f(...args)
            }
        }
    },



    // 创建一个使用反转参数调用的函数
    flip: function (func) {
        return function (...args) {
            return func(...args.reverse())
        }
    },








}