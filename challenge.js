// Challenge (Combining Topics)
// Sorting Words: Write a function that takes a string, splits it into an array of words, sorts the words 
// alphabetically, and returns the sorted string

let string="it is a question from javascript assignment"


const sort=(str)=>{
    let newArray=[]
    
    let spaceIndex=[]
    for(i=0;i<str.length;i++){
        if(str[i]==" "){
           spaceIndex.push(i)
        } 
    }
    let num=0
    for(x=0;x<spaceIndex.length;x++){
        let hold=""
        for(y=num;y<spaceIndex[x];y++){
            hold+=str[y]
            num+=spaceIndex[x]
        }
        newArray.push(hold)
    }
    
    console.log(spaceIndex)
    console.log(newArray)
}

sort(string)