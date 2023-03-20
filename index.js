// Movie trip in promise way

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const person3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("person3: shows ticket")
    },3000)
})

const getPopcorn = person3.then((msg)=>{
    console.log("person3 wants popcorn");
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`get the popcorn`)
        }, 3000);
    })
});

const getButter = getPopcorn.then((msg)=>{
    console.log(msg)
    console.log("person3 wants butter on the popcorn");
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("person3 got butter on the popcorn");
        }, 2000);
    })
})

const getColddrink = getButter.then(msg=>{
    console.log(msg);
    console.log("person3 want colddrink");
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("person3 got the colddrink")
        }, 2000);
    })
})

getColddrink.then((msg)=>{
    console.log(msg)
})

console.log("person4: shows ticket");
console.log("person5: shows ticket")

//aysnc await way of movie trip

// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const movieTrip = async function () {

//     const person3 = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("person3: shows ticket")
//         }, 3000);
//     })

//     const getPopcorn = new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`get the popcorn`)
//         }, 3000);
//     });

    
//     const getButter = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("person3 got butter on the popcorn");
//         }, 2000);
//     });

//     const getColddrink = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("person got the colddrink")
//         })
//     })

//     let ticket = await person3;
//     console.log("person3 wants popcorn");
//     let popcorn = await getPopcorn;
//     console.log(`person3 ${popcorn}`)
//     console.log("person3 wants butter on the popcorn");
//     let butter = await getButter;
//     console.log(butter)
//     console.log("person3 wants colddrink");
//     let colddrink = await getColddrink;
//     console.log(colddrink)

//     return ticket
// }

// movieTrip().then((msg) => {
//     console.log(msg)
// })

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

