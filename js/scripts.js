// business logic
$(document).ready(function() {
		// when user submitsm it will determine what is inputted and outputted
	  $("form").submit(function(event) {
			//next few lines will gather and save into variable whatever the user inputs
	    var favoritelanguage = $("#language").val();
			console.log("favoriteLanguage " + favoritelanguage);
      var favoriteVacation=$("input:radio[name=vacation]:checked").val();
			console.log("favoriteVacation " + favoriteVacation);
	    var favoriteCusine = $("input:radio[name=cusine]:checked").val();
			console.log("favoriteCusine " + favoriteCusine);
	    var favoriteAccomodations = $("input:radio[name=accomodations]:checked").val();
			console.log("favoriteAccomodations " + favoriteAccomodations);
	    var favoriteApproach = $("input:radio[name=approach]:checked").val();
			console.log("favoriteApproach " + favoriteApproach);
	    var favoriteRandom = $("input:radio[name=random]:checked").val();
			console.log("favoriteApproach " + favoriteApproach);
// user interface logic
//these ifs evaluate the users input to determine what to display
	    if (favoriteVacation === "tropics" && favoriteCusine === "seafood" && favoriteAccomodations === "youth hostel" && favoriteApproach === "visual concept" && favoriteRandom === "i am always on time") {
	      $('#ruby').show();
	      $('#java, #cplusplus, #python, #no-match').hide();
	    } else if (favoriteVacation === "mountains" && favoriteCusine === "exotic" && favoriteAccomodations === "all inclusive" && favoriteApproach === "demonstration" && favoriteRandom === "i am the life of the party") {
        $('#java').show();
        $('#ruby, #cplusplus, #python, #no-match').hide();
	    } else if (favoriteVacation === "dessert" && favoriteCusine === "traditional" && favoriteAccomodations === "hotel" && favoriteApproach === "online" && favoriteRandom === "i never give up on true love") {
        $('#cplusplus').show();
        $('#java, #ruby, #python, #no-match').hide();
	    } else if (favoriteVacation === "staycation" && favoriteCusine === "meat&taters" && favoriteAccomodations === "tent" && favoriteApproach === "classroom" && favoriteRandom === "i will be rich one day") {
        $('#python').show();
        $('#java, #cplusplus, #ruby, #no-match').hide();
	    } else {
        $('#no-match').show();
        $('#java, #cplusplus, #python, #ruby').hide();
	    }
//this prevents refresh after submit is clicked
	  event.preventDefault();
	  });
	});

