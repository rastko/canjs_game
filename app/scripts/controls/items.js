var Items = can.Control({
	init: function(element, options){
		var el = this.element;
		this.items = Item.findOne({class: options.class }, function(items){
			el.html(can.view('views/items.moustache', {
				data: items
			}));
		});

	},

	".item-select click" : function(el) {
		var weapon = $("#weapons li.selected"),
			armor = $("#armor li.selected"),
			items = {};
		if( (weapon.length > 0)  && (armor.length > 0)){
			weapon.siblings("li").remove();
			armor.siblings("li").remove();
			player.attr("items", { weapon: weapon.text(), armor: armor.text() });
			el.remove();
			$("#confirmation").removeClass('hidden');
		}else{
			alert("you must choose your gear!")
		}

	},

	"#armor li, #weapons li click" : function(el){
		el.siblings('li').removeClass('selected');
		el.addClass("selected");
	},

	"#btn-ok click": function(){
		window.location.hash = "menu"
	},

	"#btn-no click": function(){
		window.location.hash = "characters"
	}
})
