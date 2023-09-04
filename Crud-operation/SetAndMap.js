//constructor prototype
const utkarsh = "object";
console.log(utkarsh.constructor===String);  //true

const obj = {}
console.log(obj.constructor===Object)  //true

const Marks = {
    Hindi : 99,
    English : 95,
    Maths :97
}
console.log(Marks.constructor===Object) //true


//Map.prototype.size
const map1 = new Map();

map1.set("Hindi",99)
map1.set("English",95)
map1.set("Maths",97)
console.log(map1.size);  //3

//map.prototype.clear
map1.clear()
console.log(map1.size)  // Expected output : 0


//Map.prototype.tostring
function Dog(name){
    this.name = name
}
const dog1 = new Dog("JOJO")

Dog.prototype.toString = function dogToString(){
    return `${this.name}`
}

console.log(dog1.toString())  //JOJO

//map.prototype.delete
const hello = new Map()
hello.set('jojo','tommy')
hello.set('sheru','bruno')
console.log(hello.delete('sheru'))  //true
console.log(hello)     //Map(1) { 'jojo' => 'tommy' }


// map.prototype.get
let temp = new Map();
temp.set("Hindi",99)
temp.set("English",97)
temp.set("Mathematics",98)
console.log(temp.get("Hindi"))  //99
console.log(temp.get("English"))   //97
console.log(temp.get("Mathematics"))   //98


//map.prototype.has()
 temp = new Map();
temp.set("Hindi",99)
temp.set("English",97)
temp.set("Mathematics",98)
console.log(temp.has("Hindi"))    //true
console.log(temp.has("English"))   //true
console.log(temp.has("Science"))   //false


//map.prototype.set()
temp = new Map();
temp.set("Hindi",99)
temp.set("English",97)
temp.set("Mathematics",98)

console.log(temp)  //Map(3) { 'Hindi' => 99, 'English' => 97, 'Mathematics' => 98 }


// Map.prototype[@@iterator]()
temp = new Map();
temp.set("Hindi",99)
temp.set("English",97)
temp.set("Mathematics",98)

const iterator1 = temp[Symbol.iterator]()
for(const item of iterator1){
    console.log(item)
}

// Output : [ 'Hindi', 99 ]
//[ 'English', 97 ]
//[ 'Mathematics', 98 ]


// Map.prototype.keys()
temp = new Map();
temp.set("Hindi",99)
temp.set("English",97)
temp.set("Mathematics",98)
const iterator2 = temp.keys()

console.log(iterator2)    //[Map Iterator] { 'Hindi', 'English', 'Mathematics' }
console.log(iterator2.next().value)    //Hindi
console.log(iterator2.next().value) //English



// Map.prototype.values()
temp = new Map();
temp.set("Hindi",99)
temp.set("English",97)
temp.set("Mathematics",98)
const iterator3= temp.values()

console.log(iterator3)                  // [Map Iterator] { 99, 97, 98 }
console.log(iterator3.next().value)     //  99
console.log(iterator3.next().value)     //97


//  Map.prototype.entries()
temp = new Map();
temp.set("Hindi",99)
temp.set("English",97)
temp.set("Mathematics",98)
const iterator4= temp.entries()

console.log(iterator4)
console.log(iterator4.next().value)     
console.log(iterator4.next().value)     

/* output: [Map Entries] {
  [ 'Hindi', 99 ],
  [ 'English', 97 ],
  [ 'Mathematics', 98 ]
}

[ 'Hindi', 99 ]

[ 'English', 97 ] */


//  Map.prototype.forEach()

function marks(key,value,temp){
    console.log(`m[${key}] = ${value}`)
}

console.log(new Map([['Hindi',99],['English',{}],['Mathematics',undefined]]).forEach(marks))

