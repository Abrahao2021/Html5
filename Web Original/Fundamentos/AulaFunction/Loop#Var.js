const proge = [];
for (let i = 0; i < 10; i++) {
 proge.push(function() {
     console.log(i)
 })
}

proge[2]()
proge[8]()