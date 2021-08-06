# Find all positions given an element in an array:
# Example: array = [1,2,4,5,4]; findPositions(array, 4) will produce [2,4] 

const findPositions = (first, second) => {
      const indicies = [];
      first.forEach((element, index) => {
         if(second.includes(element)){
            indicies.push(index);
         };
      });
      return indicies;
   };
   

# Find if two arrays have the same elements:
# a = [1,2,3]; b=[1,2,3]; equals(a,b) will product true

 const equals = (a, b) =>
      a.length === b.length &&
      a.every((v, i) => v === b[i]);
