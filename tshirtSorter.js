// Write your solution below:
const shirtSorter = (shirtStr) => {
    const sizeCount = {
        t: 0,
        s: 0,
        m: 0,
        l: 0, 
    };
 shirtStr.split("").forEach((shirtSize) => {sizeCount[shirtSize]++})
 let sortedSize = '';
 Object.keys(sizeCount).reduce((acc, curr) => {
     acc += curr.repeat(sizeCount[curr])
     return acc;
 }, "")
 return sortedSize;
}
console.log(shirtSorter('tsstllmm'))


shirtSorter('xsxsxsssllmm')
shirtSorter('ssssssmmmmmllll')