let arr = [1,2, false, 'hello', 24, 'world', undefined, null, 'error',22]


console.log(
    arr.filter(n => typeof n === 'string')
)
console.log(
    arr.filter(n => typeof n === 'number')
)
console.log(
    arr.filter(n => typeof n === `boolean`)
);
console.log(
    arr.filter(n => typeof n === `null`)
);
console.log(
    arr.filter(n => typeof n === `undefined`)
);