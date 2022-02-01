// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.


function isRubyComing(list) {
    let output = false;
  //   let output2 = true;
    for(let i = 0; i < list.length; i++){
      if(list[i].language === 'Ruby')
        return true;
    
  }
     return output 
    } 

    function greetDevelopers(list) {
        list.forEach(greet=> greet.greeting= `Hi ${greet.firstName}, what do you like the most about ${greet.language}?`)
        return list
      }
      
      