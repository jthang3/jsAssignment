//1 ) Reverse a number function

const reverseNumber = (num) => {
    let numToString = num.toString();
    let reversedNum = '';
    // for(let i = numToString.length - 1; i >= 0; i--) {
    //     reversedNum = reversedNum + numToString[i];
    // }
    reversedNum = numToString.split("").reverse().join("");
    reversedNum = parseInt(reversedNum);
    return reversedNum;
}

console.log(reverseNumber(123548));


//2) palindrome
const palindrome = (str) => {
    let newStr = str.split(' ');
    let finalStr = '';
    for(let i in newStr) {
        finalStr = finalStr + newStr[i];
    }
    let reversedStr = finalStr.split("").reverse().join('');
    if(finalStr === reversedStr) {
        console.log("Palindrome")
    }
    else {
        console.log("Not Palindrome");
    }
}

palindrome("nurses run")

//3) generate all combinations of a string
const combString = (str) => {
    let finalStr = [];
    for(let i = 0; i < str.length; i ++) {
        for(let j = i + 1; j < str.length + 1; j++) {
            finalStr.push(str.slice(i,j));
        }
    }
    console.log(finalStr)
}

combString("Dog");


//4 Alphabetical order

const alph = (str) => {
    let strArray = str.split("");
    strArray = strArray.sort();
    strArray = strArray.join("");
    console.log(strArray);
}

alph("becadgf");


//5 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
const upperCase = (str) => {
    let strArray = str.split(" ");
    let finalStr = "";
    for(let value of strArray) {
        value = `${value.charAt(0).toUpperCase()}${value.substring(1, value.length + 1)}`
        finalStr = finalStr + value + ' ';
    }

    console.log(finalStr);

}

upperCase("the quick brown fox")

//6Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
 const longest = (str) => {
     let strArray = str.split(" ");
     let longestWord = "";
     for (let value of strArray) {
         if(value.length > longestWord.length) {
             longestWord = value;
         }
     }
     console.log(longestWord);
 }

 longest('Web Development Tutorial');


 //7 vowels

 const vowels = (str) => {
     let vowel = 'aeiou';
     let numOfvowel = 0;
     for(let value of str) {
         if(vowel.includes(value)) {
             numOfvowel ++;
         }
     }
     console.log(numOfvowel);
 }

 vowels('The quick brown fox');

 //8 prime

 const primeNum = (num) => {
     num = parseInt(num);
     let isPrime = true;
     if(num === 1) {
         console.log("1 not a prime nor prime");
     }
     else if(num > 1) {
         for(let i = 2; i < num; i++) {
             if(num % i === 0) {
                isPrime = false;
                 break;
             }
             else {
                 isPrime = true;
             }
         }
         isPrime ? console.log("It is a prime Number"): console.log("It is not a prime number");
     }
     else {
         console.log("Negative number is not a prime number")
     }
 }

 primeNum(97745687);


 //9type of argument

 const typeOfArgument = (str) => {
     console.log(typeof str);
 }

 typeOfArgument(true);


 //11 array second biggest and smallest

 const secondBigandSmall = (arg) => {
     const compareNum = (a,b) => a-b;
     arg = arg.sort(compareNum);
     console.log(arg[1], arg[arg.length - 2]);
 }

 secondBigandSmall([5,55,0,22,69,32]);



 //12 perfect number

 const perfectNum = (num) => {
     let sum = 0;
     for(let i = 1; i < num; i++) {
         if(num % i === 0) {
             sum = sum + i;
         }
     }
     if(sum === num) {
         console.log("perfect number");
     }
     else {
         console.log("Not a perfecrt number")
     }
 }

 perfectNum(8129);


 //13 factor

 const factor = (num) => {
     let factor = [];
     for(let i = 1; i <= num; i++) {
         if(num % i === 0) {
             factor.push(i)
         }
     }
     console.log(factor)
 }

 factor(16)


 //14 coin

 const coin = (num) => {
     let remaining = num;
     let temp;
     let changes = [];
     let billAmount = 0;
     let calculateRemainder = (rem) => {
         temp = remaining % rem;
         billAmount = (Math.floor(remaining / rem));
         for(let i = 0; i < billAmount; i++) {
             changes.push(rem);
         }
         remaining = temp;
         
    }
     while(remaining > 0) {
         if(remaining >= 25) {
            calculateRemainder(25);
         }
         else if(remaining >= 10) {
             calculateRemainder(10);
         }
         else if(remaining >= 5) {
             calculateRemainder(5);
         }
         else if(remaining >= 2) {
             calculateRemainder(2);
         }
         else {
             calculateRemainder(1);
         }
     }
     console.log(changes);
 }

 coin(46);


 //16 Exponent 
const exponent = (base, exp) => {
    console.log(base ** exp);
}

exponent(2,3);

//16 Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function count(string) {
    let string1 = string.split("").sort().join("");
    let counter = 1;
    for (let i = 0; i < string.length; i++) {
      if (string1[i] === string1[i + 1]) {
        counter++;
      } else {
        console.log(string1[i] + " " + counter);
        counter = 1;
      }
    }
  }
  count("john");

  //17 BInary Search

  const binarySearch = (arr,searchValue) => {
      let mainMidValue = Math.floor((0 + arr.length - 1) / 2);
      if(arr[mainMidValue] === searchValue) {
          console.log("Search has been found")
      }
      else {
          while(arr[mainMidValue] !== searchValue) {
            if(arr[mainMidValue] < searchValue) {
                arr = arr.slice(mainMidValue);
                mainMidValue = Math.floor((0 + arr.length - 1) / 2);
            }
            else {
                arr = arr.slice(0, mainMidValue);
                mainMidValue = Math.floor((0 + arr.length - 1) / 2);
            }
          }
          if(arr[mainMidValue] === searchValue) {
              console.log("Search has been found")
          }
      }
  }

  binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23],6);

  //18 larger than element

  const larger = (arr,element) => {
      let larger = arr.filter(index => index > element);
      console.log(larger);
  }

  larger([2,5,10,22],7);

  //20 Write a JavaScript function that generates a string id (specified length) of random characters.

  const randomGenerator = (lengthOfRandom) => {
      let randomList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomNum;
      let randomedStr = '';
      for(let i = 0; i < lengthOfRandom; i++) {
          randomNum = Math.floor(Math.random() * randomList.length);
          let char = randomList[randomNum];
          randomedStr += char;
      }
      console.log(randomedStr);
  }


  randomGenerator(10);

  //21 subset array

  const subsetArray = (arr, subsetLength) => {
      let allArray = [];
      let subSetArray = [];
      for(let i = 0; i < arr.length; i++) {
          subSetArray.push(arr[i]); 
          for(let j = i + 1; j < subsetLength; j++) {
              if(i !== j) {
                  subSetArray.push(arr[j]);
              }
          }
          allArray.push(subSetArray);
          subSetArray = [];
      }
      console.log(allArray, "all array");
  }

  subsetArray([1, 2, 3], 2);

  //22 search character

  const searchChar = (str,char) => {
      str = str.split("");
      let specificChar = str.filter(strChar => strChar === char);
      console.log(`${char} occured ${specificChar.length} times`);
  }

  searchChar( 'microsoft.com', 'o' );

  //23 no repeat value
  const noRepeatValue = (str) => {
      str = str.split("").sort();
      let noRepeat;
      for(let i = 0; i < str.length; i++) {
          if(str[i] !== str[i+1]) {
              noRepeat = str[i];
              break;
          }
          i = i + 1;
      }
      console.log(`The first no repeat value is ${noRepeat}`);
  }

  noRepeatValue("bkkaajjoosseepphvh");

  //24 bubble sort

  const bubbleSort = (arr) => {
      let temp;
      let first,second;
  }



