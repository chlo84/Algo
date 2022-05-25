// search through the list 
// look for Python as language
// condition: if Python then ... if else there will be no Python dev
// return: if there is a Python dev if not return there will be ....

function getFirstPython(list) {
    const dev = list.find(person => person.language === 'Python') 
       return dev ? `${dev.firstName}, ${dev.country}`: 'There will be no Python developers'                       
   
 }