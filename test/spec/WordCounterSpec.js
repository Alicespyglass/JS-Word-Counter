describe('WordCounter', function () {
  var testString = 'How now, Peter\'s Brown cow is brown now?';
  var wordcounter = new WordCounter(testString);

  describe('#cleanString', function () {
    it('cleans string to lowercase and removes punctuation (leaving single quote and spaces)', function () {
      wordcounter.cleanString();
      expect(wordcounter.cleanedString).toEqual([ 'how', 'now', 'peter\'s', 'brown', 'cow', 'is', 'brown', 'now' ]);
    });
  });

  describe('#count', function () {
    it('returns the words and number of occurances', function () {
      wordcounter.count();
      expect(wordcounter.countsResult).toEqual({ how: 1, now: 2, 'peter\'s': 1, brown: 2, cow: 1, is: 1 });
    });
  });
});
