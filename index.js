

  
       //1)calculateDifference

        function calculateDifference(a, b) {
            return a - b
        }
        const result = calculateDifference(10, 5);
        console.log(result);

        

        //2)isOdd

        function isOdd(num){
            return num % 2 !== 0;
        }
        console.log(isOdd(3));
        console.log(isOdd(4));



        //3)findMin
        
        function findMin(numbers) {
            if (numbers.length === 0) {
            return undefined; 
            }
    
            let min = numbers[0]; 
            for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
            min = numbers[i]; 
            }
          }
          return min;
        }

        let resul = findMin([3, 5, 1, 8, 2]); 
        console.log(resul);



        //4)filterEvenNumbers

        function filterEvenNumbers(numbers){
            return numbers.filter(num => num % 2 === 0);
        }
        const res = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])
        console.log(res)



        //5)sortArrayDescending

        function sortArrayDescending(numbers) {
            return numbers.sort((a, b) => b - a);
        }
        const numbers = [5, 3, 8, 1, 2];
        const sortedNumbers = sortArrayDescending(numbers);
        console.log(sortedNumbers);



        //6)lowercaseFirstLetter

        function lowercaseFirstLetter(str) {
            if (str.length === 0) return str; 
            return str[0].toLowerCase() + str.slice(1);
        } 
        console.log(lowercaseFirstLetter("Hello World"));
        console.log(lowercaseFirstLetter("JavaScript"));
               



        //7)findAverage

        function findAverage(numbers) {
            if (numbers.length === 0) return 0; 
            const total = numbers.reduce((sum, num) => sum + num, 0);
            return total / numbers.length; 
        }
        console.log(findAverage([1, 2, 3, 4, 5])); 
        console.log(findAverage([10, 20, 30]));   
                       



        function countVowels(str) {
            const vowels = 'aeiouAEIOU'; 
            return Array.from(str).filter(char => vowels.includes(char)).length;
        }
        console.log(countVowels("Hello World"));
        console.log(countVowels("JavaScript"));              
        console.log(countVowels("AEIOUaeiou"));






