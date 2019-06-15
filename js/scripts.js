// Backend logic






	// UI logic


	$(document).ready(function() {
	  $("form").submit(function(event) {
	    var favoritelanguage = $("#language").val();
      var favoriteVacation=$("input:radio[name=vacation]:checked").val();
      var favoriteVacation=$("input:radio[name=vacation]:checked").val();
	    var favoriteCusine = $("input:radio[name=cusine]:checked").val();
	    var favoriteAccomodations = $("input:radio[name=accomodations]:checked").val();
	    var favoriteApproach = $("input:radio[name=approach]:checked").val();
	    var favoriteRandom = $("input:radio[name=random]:checked").val();
			console.log(language);


	    if (favoriteVacation === "tropics" && favoriteCusine === "seafood" && favoriteAccomodations === "youth hostel" && favoriteApproach === "visual concept" && favoriteRandom === "i am always on time") {
	      $('#ruby').show();
	      $('#java, #plusplus, #python, #no-match').hide();
	    } else if (favoriteVacation === "mountians" && favoriteCusine === "exotic" && favoriteAccomodations === "all inclusive" && favoriteApproach === "demonstration" && favoriteRandom === "i am the life of the party") {
        $('#java').show();
        $('#ruby, #plusplus, #python, #no-match').hide();
	    } else if (favoriteVacation === "dessert" && favoriteCusine === "traditional" && favoriteAccomodations === "hotel" && favoriteApproach === "online" && favoriteRandom === "i never give up on true love") {
        $('#plusplus').show();
        $('#java, #ruby, #python, #no-match').hide();
	    } else if (favoriteVacation === "stacation" && favoriteCusine === "meat & taters" && favoriteAccomodations === "tent" && favoriteApproach === "classroom" && favoriteRandom === "i will be rich some day") {
        $('#python').show();
        $('#java, #plusplus, #ruby, #no-match').hide();
	    } else {
        $('#no-match').show();
        $('#java, #plusplus, #python, #ruby').hide();
	    }


	  event.preventDefault();
	  });
	});
