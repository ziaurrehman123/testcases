const fetchData =require('./fetchData')
const common=require('./common')

// test callback function   
// test("test callback functions",done=>{
//     function callback(data){
//         try{
//             expect(data).toBe("hello callback")
//             done()
//         }
//         catch(error)
//         {
//             done(error)
//         }
//     }
//     fetchData(callback);
// })


// test Promise

// test("Promise testing", ()=>{
//     return fetchData().then((data)=>{
//         expect(data).toBe("hell promise");
//     })
// })


//test async await function

// test("async function test", async()=>{
//     const data= await fetchData();
//     expect(data).toBe("async done")
//     })


// before each
beforeEach(()=>{
console.warn(common());
})
test("test before each",()=>{
    expect(fetchData()).toBe('hello');
})
test("test before each",()=>{
    expect(fetchData()).toBe('hello');
})