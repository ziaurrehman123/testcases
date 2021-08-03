// test callback function

// function fetchData(back){
//     return back("hello callback")
// }



// test Promise
// function fetchData(back){
//     return new Promise((resolve, reject)=>{
//         resolve("hello promise");
//     })
// }



// test async await function

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         resolve("async done");
//     })
// }


//before each
function fetchData(){
    return "hello";
}
module.exports=fetchData;