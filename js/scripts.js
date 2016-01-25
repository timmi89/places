function Places(city, country, landmark, year, notes){
  this.city = city;
  this.country = country;
  this.landmark = landmark;
  this.year = year;
  this.notes = notes;
};

Places.prototype.fullName = function () {
  return this.city + ", " + this.country;
};

Places.prototype.dearDiary = function () {
  return this.year + " Dear Diary, Today in " + this.city + ", " + this.notes;
};


$(function() {
  $("form#newPlace").submit(function(event){
    event.preventDefault();

    var inputCity = $("input#newCity").val();
    var inputCountry = $("input#newCountry").val();
    var inputLandmark = $("input#newlandmark").val();
    var inputYear = $("input#newYear").val();
    var inputNotes = $("input#newNotes").val();
    var newPlace = new Places(inputCity, inputCountry, inputLandmark, inputYear, inputNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.fullName() + "</span></li>");
    $("p#diaryEntry").text(newPlace.dearDiary());
    $(".dearDiary").show();

    $("input#newCity").val("");
    $("input#newCountry").val("");
    $("input#newLandmark").val("");
    $("input#newYear").val("");
    $("input#newNotes").val("");


    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.fullName());
      $(".city").text(newPlace.city);
      $(".country").text(newPlace.country);
      $(".landmark").text(newPlace.landmark);
      $(".year").text(newPlace.year);
      $(".notes").text(newPlace.notes);
    })

  });
});


// $(function() {
//   $("form#new-contact").submit(function(event) {
//
//       var inputtedFirstName = $("input#new-first-name").val();
//       var inputtedLastName = $("input#new-last-name").val();
//       var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
//       $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//       $("input#new-first-name").val("");
//       $("input#new-last-name").val("");
//
//       $(".contact").last().click(function() {
//         $("#show-contact").show();
//         $("#show-contact h2").text(newContact.fullName());
//         $(".first-name").text(newContact.firstName);
//         $(".last-name").text(newContact.lastName);
//       });
//       event.preventDefault();
//     });
//   });
