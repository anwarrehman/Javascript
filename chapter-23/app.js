// let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";

// for (let i = 0; i < str.length; i++) {
//     let targetTxt = str.slice(i, i + 12);

//     if (targetTxt === "world war II") {
//         str = str.slice(0, i) + "the second world war" + str.slice(i + 12);
//     }
// }

// console.log(str);









let str1 = "the quick the second world war II brown fox jumps world war II over the lazy world war II dog.";

for (let i = 0; i < str1.length; i++) {
    let targetTxt = str1.slice(i, i + 23);

    if (targetTxt === "the second world war II") {
        str1 = str1.slice(0, i) + "world war II" + str1.slice(i + 23);
    }
}

console.log(str1);