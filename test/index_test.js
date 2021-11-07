const assert =require('assert');
const Rooster=require('../index');

describe('Rooster' ,()=>{
  describe('.announceDawn',()=>{
    it('returns a rooster call',()=>{
      //setup
      let expected='cook-a-doodle-doo!';

      //exercise
      let result=Rooster.announceDawn();

      //verify
      assert.equal(result,expected);
      
    })
  })
}
);

describe('.timeAtDawn',()=>{
  it('returns the correct hour as string',()=>{
     //setup
     let expectd='5';
     let hour=5;
    //exercise
    const result=Rooster.timeAtDawn(hour);
    //verify  
  assert.strictEqual(result,expectd);
    
  });

  

let expected=RangeError;
let inputHour;
  beforeEach(()=>{
  
      inputHour=-1;
  });
  it('throw a range error when hour is bellow 0',()=>{
     
      //verify  
  assert.throws(()=>{
   //exercise
    Rooster.timeAtDawn(inputHour);
  },
  expected);
    
  });
 beforeEach(()=>{
  
      inputHour=24;
  });
  it('throw a range error when hour is above 23',()=>{
     
      //verify  
  assert.throws(()=>{
   //exercise
    Rooster.timeAtDawn(inputHour);
  },
  expected);
    
  });
})
 


