
//  https://github.com/rahulsaha28/assignment3

/**
 *      problem one
 *  
 *  convert kilometer to meter
 * 
 *  1. meter = kilometer*1000
 *  2. error: kilometer < 0 and not number
 *  3. input value : only number and kilometer >= 0
 */

function kilometerToMeter(kilometerDistance){

    // important variable
    const conversionUnit = 1000;
    let errMess = null;
    let meterDistance;

    //input error case
    if(typeof(kilometerDistance)!='number')
    {
        errMess = "Error: Input only take number.";
        
    }
    else if(kilometerDistance < 0)
    {
         errMess = "Error: Distance can not be negative.";
    }

    // if nuput is not error 
    else
    {
        meterDistance = kilometerDistance*conversionUnit;

    }
    
    // return state
    if(errMess!=null)
    {
        return errMess;
    }
    else
    {
        return meterDistance;
    }
    

}



/**
 *      problem two
 * 
 *  calculate total cost of some product
 * 
 *  1. total = numOfWatch*rateOfWatch + numOfPhone*rateOfPhone + numOfLaptop*rateOfLaptop
 *  2. error: all must number and not negative
 *  3. input value:  only positive number
 *  
 */


 function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop){

    // variable and const
    const rateOfWatch = 50;
    const rateOfPhone = 100;
    const rateOfLaptop = 500;
    let totalCost ;
    let errMess = null;

    // error case
    if(typeof(numOfWatch)!= 'number' || typeof(numOfPhone)!= 'number' || typeof(numOfLaptop)!= 'number'){
        errMess = "Error: input must be number.";
    }
    else if(numOfWatch<0 || numOfPhone<0 || numOfLaptop<0)
    {
        errMess = "Error: Number of product can not be negatuve.";
    }
    // valid case
    else
    {
        totalCost = rateOfWatch*numOfWatch + rateOfPhone*numOfPhone + rateOfLaptop*numOfLaptop;
    }

    // return case
    if(errMess!= null){
        return errMess;
    }
    else{
        return totalCost;
    }


 }

 

 /**
  *         problem three
  * 
  *   calculate the hotelCost for a given days
  *   1. error: input con not number and input < 0 
  *   2. input value: only positive number
  *   3. use some condition      
  *     
  */

  function hotelCost(numOfDays){

    // variable and constant
    const rateForTenDays = 100;
    const rateForTwentyDays = 80;
    const rateGetterTwentyDays = 50;
    let totalCost;
    let errMess = null;
    
    // error case
    if(typeof(numOfDays)!="number")
    {
        errMess = "Error: Input must be number.";
    }
    else if( numOfDays<0 )
    {
        errMess = "Error: Days can not be negative.";
    }
    // valid case
    else
    {
        // for all condition of days
        if(numOfDays<=10)
        {
            totalCost = rateForTenDays*numOfDays;
        }
        else if(numOfDays<=20)
        {
            totalCost = rateForTenDays*10 + rateForTwentyDays*(numOfDays-10);
        }
        else
        {
            totalCost = rateForTenDays*10 + rateForTwentyDays*10 + rateGetterTwentyDays*(numOfDays-20);
        }

    }

    // return case
    if(errMess!= null)
    {
        return errMess;
    }
    else{
        return totalCost;
    }

  }

  

/**
 *          problem four
 *      
 *      find name (of maximum letter) in a given array
 *      
 *      1. error: if input is not array or array is empty
 *      2. must be careful about space in a name 
 *      3. input value: valid array 
 *      4. find max name from array
 * 
 */

 function megaFriend(friendNameArr){

    // variable
    let maxName;
    let errMess = null;

    // error case
    if(Object.prototype.toString.call(friendNameArr) != "[object Array]")
    {
        errMess = "Error: Input must be array";
    }
    else if(friendNameArr.length == 0)
    {
        errMess = "Error: Array can not be empty.";
    }
    // valid case
    else
    {
        let maxlength = -1;
        for(let i = 0; i<friendNameArr.length; i++)
        {
            // this for loop is use to counting  number of space in a name
            let spaceCount = 0;
            for(let j=0; j<friendNameArr[i].length; j++)
            {
                if(friendNameArr[i][j]==" ")
                {
                    spaceCount++;
                }
            }
            

            if((friendNameArr[i].length-spaceCount)> maxlength)
            {
                // set maxlength a new high value
                maxlength = friendNameArr[i].length-spaceCount;
                maxName = friendNameArr[i];
            }
            
        }

    }

    // return case
    if(errMess!=null){
        return errMess;
    }
    else
    {
        return maxName;
    }

 }


 
 
 
 

