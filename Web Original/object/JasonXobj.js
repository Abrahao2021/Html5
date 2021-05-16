const pessoa ={ a: 1, b:2 ,c:3 , Soma(){a+b+c}}
console.log(JSON.stringify(pessoa))
console.log(JSON.parse('{"a": 1, "b":2 , "c":3}'))
console.log(JSON.parse('{"a":1, "B":true,"c":{},"d":[]}'))