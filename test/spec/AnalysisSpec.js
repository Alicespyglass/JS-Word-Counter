describe('Analysis', function () {
  var countsResult = { how: 1, now: 2, 'peter\'s': 1, brown: 2, cow: 1, is: 1 };
  var analysis = new Analysis();

  describe('#storeAnalysis', function () {
    it('stores analysis in array', function () {
      analysis.storeAnalysis(countsResult);
      expect(analysis.results).toEqual(['how: 1', 'now: 2', 'peter\'s: 1', 'brown: 2', 'cow: 1', 'is: 1']);
    });
  });

  describe('#resetResults', function () {
    it('resets analysis storage array', function () {
      analysis.resetResults();
      expect(analysis.results).toEqual([]);
    });
  });
});
