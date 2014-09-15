var Router = can.Control({
	init: function () {
		window.location.hash = "menu"
	},

	"route": function(){
	},

	"menu route" : function(){

		//this code should be moved to Menu Control
		this.element.html(can.view('views/index.moustache', {}));
		if(typeof(player.character.name) != "undefined" && typeof(player.items.weapon) != "undefined"){
			//on this spot we should really save character.id, weapon/armor id's + current user id. But since this is just a demo, let's keep it like this :) 
			var pl = new Player({name: player.character.name, weapon: player.items.weapon, armor: player.items.armor });
			pl.save(function(saved){
				//saved obj. contains the ID of the saved player
				if(saved){
					var panel = $("#modal");
					panel.find("h3").html("You character has been saved!");
					panel.find(".panel-body").html("Name: " + player.character.name + "<br>Weapon: " + player.items.weapon + "<br>Armor: " + player.items.armor);
					panel.removeClass('hidden');
				}
			});
		}
	},

	"characters route": function(){
		new Characters("#content", {player: player});
	},

	"items/:class route": function(data){
		new Items("#items", data);
	}

});