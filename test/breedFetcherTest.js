
// breedFetcherTest.js
const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = `The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. `;
      // compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it("should return an valid error and description to be null, via callback", done => {
    fetchBreedDescription("wowc", (err, desc) => {
      // we expect description to be null here
      assert.equal(desc, null);
      // we expect error not to be null
      assert.equal(err, 'No!!! such a Breed');
      done();
    });
  });
  
});

