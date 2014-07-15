$(document).ready(function(){
   $("#add-address").click(function(){
      $("#new-addresses").append(
                                  '<div class="new-address">' +
                                  '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control" id="new-street">' + '</div>' +
                                  '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control" id="new-city">' +
                                  '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<input type="text" class="form-control" id="new-state">' +
                                  '</div>'
);
    });

  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    $("input#new-first-name").val("");
    var inputtedLastName = $("input#new-last-name").val();
    $("input#new-last-name").val("");
    var newContact = {firstName:inputtedFirstName, lastName:inputtedLastName, addresses:[], fullName: function() {
                     return this.firstName + " " + this.lastName;
                   }
                 };

  $(".new-address").each(function() {
    var inputtedStreet = $(this).find("input#new-street").val();
console.log(inputtedStreet);
    var inputtedCity = $(this).find("input#new-city").val();

    var inputtedState = $(this).find("input#new-state").val();


    var newAddress = {street: inputtedStreet, city: inputtedCity, state: inputtedState };
    newContact.addresses.push(newAddress);

    console.log(newContact)
     // console.log(newAddress);
  });



    $(".contact-submit").show();
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");


    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>"); //+
                            //"<li><span class='contact'>" + newAddress.fullAddress() + "</span></li>");











    $(".contact").last().click(function() {
      $("#show-contact").show();
      $(".first-name-detail").text(newContact.firstName);
      $(".last-name-detail").text(newContact.lastName);
      $("ul#addresses").text("");
      // $(".street-detail").text(newAddress.street);
      // $(".city-detail").text(newAddress.city);
      // $(".state-detail").text(newAddress.state);
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>")
      });
    });
  });
});//doc ready
