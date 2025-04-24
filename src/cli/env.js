
const ENVIRONMENT_KEY = 'RSS_'

const parseEnv = () => {
    const environments = process.env;
    const filteredEnvironments = Object.entries(environments)
        .filter(([key]) => key.startsWith(ENVIRONMENT_KEY));
    console.log(filteredEnvironments
        .map(environment => environment.join('='))
        .join('; '));
};

parseEnv();