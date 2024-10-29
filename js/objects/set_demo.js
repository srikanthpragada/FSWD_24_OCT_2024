
var s = new Set()  // Empty set 

s.add(10)
s.add(20)
s.add(10)  // ignores dups
s.add(30)

s.delete(20)

for(let v of s.values())
   console.log(v)
