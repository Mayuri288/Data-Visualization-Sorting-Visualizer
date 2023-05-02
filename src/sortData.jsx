import selectionSort from './SortingAlgorithms/selectionSort'
import bubbleSort from './SortingAlgorithms/bubbleSort'
import insertionSort from './SortingAlgorithms/insertionSort'
import quickSort from './SortingAlgorithms/quickSort'
import mergeSort from './SortingAlgorithms/mergeSort'

export const sortData = [
  {
    name: "Selection Sort",
    url: "/selectionSort",
    func: selectionSort,
    desc: [
      `The World Happiness Report ranks countries by happiness levels using data from the Gallup World Poll.
       It informs policy-making decisions as experts from various fields explain well-being measurements' 
       effectiveness in assessing national progress. Happiness scores derive from the Cantril ladder question, 
       which asks respondents to rate their current lives on a scale of 0 to 10. Data is nationally
       representative and considers six factors: economic production, social support,
       life expectancy, freedom, absence of corruption, and generosity. 
       These factors don't impact total scores but explain differences in countries' rankings,
        helping governments and organizations better understand happiness variations.`,

      `Selection Sort is an in-place sorting algorithm, which means that it does not require any 
      additional memory. However, it can be slow on large data structures due to its quadratic time complexity.
       Other sorting algorithms, such as Merge Sort or Quick Sort, can be more efficient for sorting large 
       data structures.`
    ], 
    comp: ["O(n²)", "O(n²)", "O(n²)", "O(1)"]
  },
  {
    name: "Bubble Sort",
    url: "/bubbleSort",
    func: bubbleSort,
    desc: [
      `The World Happiness Report ranks countries by happiness levels using data from the Gallup World Poll.
      It informs policy-making decisions as experts from various fields explain well-being measurements' 
      effectiveness in assessing national progress. Happiness scores derive from the Cantril ladder question, 
      which asks respondents to rate their current lives on a scale of 0 to 10. Data is nationally
      representative and considers six factors: economic production, social support,
      life expectancy, freedom, absence of corruption, and generosity. 
      These factors don't impact total scores but explain differences in countries' rankings,
       helping governments and organizations better understand happiness variations.`,

      `The algorithm iterates through the data structure multiple times until no more swaps are needed. 
      While Bubble Sort is easy to understand and implement, it is not very efficient compared to other 
      sorting algorithms. On average, it has a quadratic time complexity, which means that sorting large 
      data structures with Bubble Sort can be slow. Other sorting algorithms such as Selection Sort or 
      Insertion Sort can perform better than Bubble Sort with the same time complexity.`
    ], 
    comp: ["O(n²)", "O(n)", "O(n²)", "O(1)"]
  },
  {
    name: "Insertion Sort",
    url: "/insertionSort",
    func: insertionSort,
    desc: [
      `The World Happiness Report ranks countries by happiness levels using data from the Gallup World Poll.
      It informs policy-making decisions as experts from various fields explain well-being measurements' 
      effectiveness in assessing national progress. Happiness scores derive from the Cantril ladder question, 
      which asks respondents to rate their current lives on a scale of 0 to 10. Data is nationally
      representative and considers six factors: economic production, social support,
      life expectancy, freedom, absence of corruption, and generosity. 
      These factors don't impact total scores but explain differences in countries' rankings,
       helping governments and organizations better understand happiness variations.`,

      `Insertion sort may not be the most efficient sorting algorithm for large data structures, 
      but it has some advantages. One of its major advantages is that it is easy to understand and implement.
       It also requires only a small amount of additional memory, making it a good choice for systems with 
       limited memory resources`
    ], 
    comp: ["O(n²)", "O(n)", "O(n²)", "O(1)"]
  },
  {
    name: "Quick Sort",
    url: "/quickSort",
    func: quickSort,
    desc: [
      `The World Happiness Report ranks countries by happiness levels using data from the Gallup World Poll.
      It informs policy-making decisions as experts from various fields explain well-being measurements' 
      effectiveness in assessing national progress. Happiness scores derive from the Cantril ladder question, 
      which asks respondents to rate their current lives on a scale of 0 to 10. Data is nationally
      representative and considers six factors: economic production, social support,
      life expectancy, freedom, absence of corruption, and generosity. 
      These factors don't impact total scores but explain differences in countries' rankings,
       helping governments and organizations better understand happiness variations.`,

      `The performance of Quick Sort depends on the choice of the pivot. The pivot should be chosen in a
       way that the partitions are evenly divided, so that the recursion tree is balanced. 
       If the pivot is poorly chosen, the recursion tree may be unbalanced, leading to worst-case performance.
        However, on average, Quick Sort has a time complexity of O(n log n), 
        which makes it a very efficient sorting algorithm.
      `
    ], 
    comp: ["O(n × log n)", "O(n × log n)", "O(n²)", "O(n)"]
  },
  {
    name: "Merge Sort",
    url: "/mergeSort",
    func: mergeSort,
    desc: [
      `The World Happiness Report ranks countries by happiness levels using data from the Gallup World Poll.
      It informs policy-making decisions as experts from various fields explain well-being measurements' 
      effectiveness in assessing national progress. Happiness scores derive from the Cantril ladder question, 
      which asks respondents to rate their current lives on a scale of 0 to 10. Data is nationally
      representative and considers six factors: economic production, social support,
      life expectancy, freedom, absence of corruption, and generosity. 
      These factors don't impact total scores but explain differences in countries' rankings,
       helping governments and organizations better understand happiness variations.`,

      `Merge Sort is a divide-and-conquer sorting algorithm that works by dividing the data structure 
      into two halves, recursively sorting each half, and then merging the sorted halves back together. 
      During the merge process, the algorithm compares the elements in each half and inserts them in 
      sorted order into a new array. Merge Sort has a time complexity of O(n log n) and is often 
      preferred over other sorting algorithms for large data structures because it has a stable runtime 
      and is very efficient in terms of memory usage. However, its main disadvantage
      is that it requires additional memory to store the sorted sub-arrays during the merge step.
      `
    ], 
    comp: ["O(n × log n)", "O(n × log n)", "O(n × log n)", "O(n)"]
  }
];