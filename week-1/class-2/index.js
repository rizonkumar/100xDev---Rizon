function getLength(str) {
    console.log("Original Length", str)
    console.log("Original Length", str.length)
}

getLength("Hello World")

function findIndexOf(str, target) {
    console.log("Index: ", str.indexOf(target)) // Index: 6
    console.log("Last Index: ", str.lastIndexOf(target)) // Index: 18
}

findIndexOf("Hello World World World", "World")


function getSlice(str, start, end){
    console.log("After slice", str.slice(start, end)) // Hello
}

getSlice("Hello World", 0, 5)