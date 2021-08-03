const sum=require('./sum')

// test ("test cases", ()=>{
// expect(sum(1,2)).toBe(3);
// expect(sum(1,2)).not.toBe(4);
// });
test ("test object", ()=>{
    expect(sum()).toEqual({name:"zia"});
   
    });