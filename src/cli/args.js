const parseArgs = () => {
    const args = process.argv;
    const preparedArguments = []
    for (let i = 0; i < args.length; i += 1) {
        if (args[i].startsWith('--')) {
            preparedArguments.push(`${args[i]} is value ${args[i + 1]}`);
        }
    }
    console.log(preparedArguments.join(', '))
};

parseArgs();