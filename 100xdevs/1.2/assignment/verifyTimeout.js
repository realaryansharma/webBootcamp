const startTime = performance.now();

const timeoutId = setTimeout(() => {
    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    console.log(`Time taken: ${timeTaken} milliseconds`);
}, 1000); // Set a delay of 1000 milliseconds (1 second)
