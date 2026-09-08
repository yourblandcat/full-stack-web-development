// Function to display all elements of an array
function displayArray(arr) {
    console.log("Array Elements:", arr.join(" "));
}

// Function to calculate the sum of array elements
function calculateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// Function to calculate the average
function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return calculateSum(arr) / arr.length;
}

// Function to find the largest element
function findLargest(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Function to find the smallest element
function findSmallest(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

// Function to search for an element
function searchElement(arr, element) {
    return arr.includes(element);
}

// Function to return only even numbers
function getEvenNumbers(arr) {
    return arr.filter(function (number) {
        return number % 2 === 0;
    });
}

// Function to add an element to the array
function addElement(arr, element) {
    arr.push(element);
    return arr;
}

// Function to remove the last element
function removeLastElement(arr) {
    arr.pop();
    return arr;
}


// -------------------------
// Test Data
// -------------------------

let numbers = [10, 25, 30, 45, 50];

console.log("===== JavaScript Arrays and Functions =====");
console.log();


// Test 1: Display array
console.log("1. Display Array");
displayArray(numbers);
console.log();


// Test 2: Sum
console.log("2. Sum of Array Elements");
console.log("Sum =", calculateSum(numbers));
console.log();


// Test 3: Average
console.log("3. Average of Array Elements");
console.log("Average =", calculateAverage(numbers));
console.log();


// Test 4: Largest element
console.log("4. Largest Element");
console.log("Largest =", findLargest(numbers));
console.log();


// Test 5: Smallest element
console.log("5. Smallest Element");
console.log("Smallest =", findSmallest(numbers));
console.log();


// Test 6: Search existing element
console.log("6. Search for Existing Element (30)");
console.log("Found =", searchElement(numbers, 30));
console.log();


// Test 7: Search non-existing element
console.log("7. Search for Non-existing Element (100)");
console.log("Found =", searchElement(numbers, 100));
console.log();


// Test 8: Even numbers
console.log("8. Even Numbers");
console.log("Even Numbers =", getEvenNumbers(numbers));
console.log();


// Test 9: Add an element
console.log("9. Add Element (60)");
let updatedArray = addElement([...numbers], 60);
displayArray(updatedArray);
console.log();


// Test 10: Remove last element
console.log("10. Remove Last Element");
let modifiedArray = removeLastElement([...numbers]);
displayArray(modifiedArray);
