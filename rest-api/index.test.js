// Pick a past project that is fetching (hardcoded, api, or database)

// Create a test that shows that you can successfully fetch data from your project. 

/*
PSEUDOCODE:
- npm install jest  
- import manga.js to test file
- add "test": "jest" to package.json under scripts
- it('fetches data from hardcoded manga.js file')
    - define mockResponse = object at index 0
    - fetch data
    - check tested fetch with expect and toSomething (toEqual, toBe)


Edge Cases:
- test an error
    - see if user fetched data from DB, then it would send an error to the console
    - import pkg and set pool inside test file
    - set pool to be new Pool of environment variables in .env file
    - query for data from pool with command 'SELECT * from manga', with parameters err & results
    - set new var, dbData = res.json(results.rows)
    - set consoleErr = console.error(err)
    - expect(mockResponse).toEqual(dbData[0]);
    - expect("Err ~~~~").toEqual(consoleErr);

*/

const manga = require("./manga.js");

it('fetches data from hardcoded manga.js file', () => {
    // define mockResponse = object at index 0
    const mockResponse = {
        "id": 4,
        "title": "The Promised Neverland",
        "author": "Shirai Kairi",
        "genre": "Dark Fantasy, Psychological Thriller, Horror",
        "volumes": 20,
        "yearPublished": 2016
    };

    // fetch data
    const testData = manga[0];

    // check tested fetch with expect and toSomething (toEqual, toBe)
    expect(mockResponse).toEqual(testData);
});
    