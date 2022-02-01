let output = 0;
  // for loop through our data
  for(let i = 0; i < busStops.length; i++){
  //     output += busStops[i][0] - busStops[i][1]
    let currentStop = busStops[i];
    let peopleWhoGotOn = currentStop[0];
    let peopleWhoGotOff = currentStop[1];
    // update our output
    output += peopleWhoGotOn - peopleWhoGotOff;
  }
  return output;
