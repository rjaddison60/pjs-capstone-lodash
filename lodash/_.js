// Lodash project submitted by RJ Addison
// rjaddison.rja@gmail.

// #1 Create _ variable
const _ = {
// The numeric methods
	// #3-6 .clamp method
  clamp(number, lower, upper) {
    // find lower clamped value
    const lowerClampedValue = Math.max(number, lower);
    // find upper clamped value
    const clampedValue = Math.min(lowerClampedValue, upper);
    // return clamped value
    return clampedValue;
  },

  // #7-10 .inRange method
  inRange(number, start, end) {
    // if the is no end value set start to 0 and end to start
  	if (!end) {
  		end = start;
  		start = 0;
		}
    // if start is greater than end swap them using temp
		if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    // create isInRange and check for valid ranges and return appropriate response
		let isInRange;
		if (start < number && number < end) {
			return isInRange = true;
    } else {
      return isInRange = false;
    }
	},

// The string methods
  // #11-14 .word method
  words(string) {
    // create words and split the string into words by finding spaces
    const words = string.split(' ');
    return words;
	},

  // #15-18 .pad method
  pad(string, length) {
    // if the padding length is less than or equal to the string lenghth return the string
  	if (length <= string.length) {
  	return string;
	}
    // split the padding lenght in half
  	let startPaddingLength = Math.floor((length - string.length)/2);
    // calculate the end padding. will be 1 shorter than start padding if length is an odd number
		let endPaddingLength = length - string.length - startPaddingLength;
    // build the string with the padding and return
		let paddedString = ' '.repeat(startPaddingLength) + string + ' ' .repeat(endPaddingLength);
		return paddedString;
	},

// The new object methods
  // #19-22 .has method
  has(object, key) {
    // if there is a key in the object return true otherwise return false
    if (key in object) {
      return true;
    } else {
      return false;
    }
  },

  // #23-26 .invert method
  invert(object) {
    // create and empty inverted object
    let invertedObject = {};
    // for the key in the object swap the key with the object and the object with the key and return the inverted object
    for (key in object) {
      let originalValue = object[key];
      if (invertedObject != null) {
      invertedObject[originalValue] = key;
      }
      return invertedObject;
    }
  },
  // #27-30 .findKey method
  findKey(object, predicate) {
    // check to see if the key is null
    let value;
    if (object === null) {
      return value;
    }
    // find the key in the object and return the key
    for (key in object) {
      const value = object[key];
      if (predicate(value, key, object)) {
        return key;
      }
    }
  },

  // The array object methods
  // #31-34 .drop method
  drop(array, num) {
    // check to see if the number exists. If it doesn't set it to 1
    if (!num) {
      num = 1;
    }
    // slice the remaining elements in the array and return the dropped array
    let droppedArray = array.slice(num, array.length);
    return droppedArray;
  },

  // #35-38 .dropWhile method
  dropWhile (array, predicate) {
    // create and empty array for the remaining elements
    let droppedArray = [];
    // check each element to determine if the predicate is false. If it returns false, return the remaining array
    let dropNumber = array.findIndex((element, index) => {
      if (!predicate(array[index], index, array)) {
	    	droppedArray = array.slice(index, array.lenghth);
      }
    });
    return droppedArray;
 },

  // #39-42 .chunk method
  chunk(array, size) {
    // check to see if size is null. if it is set it to 1
    if (!size) {
      size = 1;
    }
    // create and new array and cycle through the exist in array to split it in to the selected chunks and return.
    let newArray = [];
    let j;
for (let i=0, j=array.length; i<j; i+=size) {
    newArray.push(array.slice(i,i+size));
		}
    return newArray;
  }
};

// Do not write or modify code below this line.
module.exports = _;




// Do not write or modify code below this line.
module.exports = _;
