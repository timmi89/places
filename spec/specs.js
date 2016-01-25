describe('Places', function(){

  it("creates a new place with the given specifications", function() {
    var testPlaces = new Places("Budapest", "Hungary", "The Chain Bridge", "2011", "I was attacked by guinea pigs!");
    expect(testPlaces.city).to.equal("Budapest");
    expect(testPlaces.country).to.equal("Hungary");
    expect(testPlaces.landmark).to.equal("The Chain Bridge");
    expect(testPlaces.year).to.equal("2011");
    expect(testPlaces.notes).to.equal("I was attacked by guinea pigs!");
    expect(testPlaces.dearDiary()).to.equal("2011 Dear Diary, Today in Budapest, I was attacked by guinea pigs!");

  });

  it("adds city and country to the name of places", function() {
    var testPlaces = new Places("Budapest", "Hungary");
    expect(testPlaces.fullName()).to.equal("Budapest, Hungary");
  });

});
