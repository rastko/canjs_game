var Characters = can.Control({
	init:function(element,options){
		var el = this.element;
 		this.character = Character.findAll({},function(characters){
			el.html(can.view('views/characters.moustache',{
				characters: characters[0],
			}));
		});
	},
	
	removeUnused: function(el){
		$(el).siblings('div.character').remove();
	},

	".select click" : function(el){
		var selectedChar = el.attr('value');
		this.selected = el.attr('value');
		this.removeUnused(el.parent('div.character'));
		player.attr("character", { name: el.data('name'), proffession: el.data('profession') });
		el.remove();
		window.location.hash = ("items/" + selectedChar);
	} 
});