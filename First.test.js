test('should first', () => { 
    expect(1+3).toBe(4);
 })

 //test.only('should first 2 only', () => { 
 test('should first 2 only', () => { 
    expect(1+3).toBe(4);
 })
 test('should first 2 only', () => { 
    expect(1+3).toBe(4);
 },10000)
let numbers = [1,2,3,4,5,6,7,8,9];
let myFunctions =(x,y)=> {
    return x+y;
}

 test.each(numbers)('should loop', number => { 
    expect(myFunctions(2,number)).toBe(number+2);
 })

let name='my name'
 test('should match', () => { 
    expect(name).toMatch(/my name/i);
    expect(name).toContain('my name');
 },10000)

 let values=null;
 test('should  Truthy and Falsy', () => { 
    expect(values).toBeDefined();
    expect(values).not.toBeUndefined();
    expect(values).toBeNull();
    expect(values).toBeFalsy();
    expect(values).not.toBeTruthy();
 })

 function error(){
    throw new Error('Message');
 }
 test('should  Testing errors', () => { 
    expect(error).toThrow();
    expect(error).toThrow(Error);
    expect(error).toThrow("Message");
 })