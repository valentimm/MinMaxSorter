const main = (params) => {
    const generateNumbers = () => {
        const randomNumbers = [];
        for (let i = 0; i < 20; i ++) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            randomNumbers.push(randomNumber);
        }
        return randomNumbers;
    };

    const findMinMax = (numbers) => {
        if (!numbers || numbers.length === 0) {
            return "Array empty";
        }

        let min = numbers[0];
        let max = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return {min, max };
    };

    const randomNumbersArray = generateNumbers();
    console.log ("Generated numbers:", randomNumbersArray);

    const minMaxValues = findMinMax(randomNumbersArray);
    console.log("Minimum value: ", minMaxValues.min);
    console.log("Maximum value: ", minMaxValues.max);
};

main()