(function(){

	var CHARACTERS = [
		{
			id: 0,
			name: 'Claudius',
			class: 'paladin',
			quote: 'Put your faith into the light!',
			str: '17',
			int: '12',
			con: '15',
			cha: '18',
			image: "pala.jpg",
			schools: ['holy', 'martial']
		},
		{
			id: 1,
			name: "Frostitude",
			class: 'sorceress',
			quote: "I don't remember casting Slow on you...",
			str: '8',
			int: '18',
			con: '12',
			cha: '13',
			image: "wizzy.png",
			schools: ['arcane', 'frost', 'fire']

		}
		
	];
	
	can.fixture('GET /characters', function(){
		return [CHARACTERS];
	});

	can.fixture('GET /characters/{id}', function(request){
		return CHARACTERS[(+request.data.id)-1];
	});

	can.fixture("POST /characters", function( request, response) {
		var id = CHARACTERS.length+1;
		CHARACTERS.push($.extend({id:id},request.data));
		return {id:id};
	});

	can.fixture("PUT /characters/{id}", function(request){
		$.extend(CHARACTERS[(+request.data.id)-1],request.data);
		return {};
	});

	can.fixture("DELETE /characters/{id}", function(request){
		CHARACTERS = $.grep(CHARACTERS, function(val) { 
			if (val.id != request.data.id) {
				return val;
			}
		});
		return {};
	});

	var ITEMS = {
		paladin:{
			weapons: [
				{ name: "Holy Avenger", damage: "+2" }, 
				{ name: "Scourgebane" }, 
				{ name: "Trueilver Champion"} 
			],
			armor: [
				{ name: "Lightbringer armor" },
				{ name: "Defender's regalia" },
				{ name: "Dragonscale mail" }
			]	
		},
		sorceress: {
			weapons: [
				{ name: "Staff of frost"},
				{ name: "Staff of flame" },
				{ name: "Stick of Truth" }
			],
			armor: [
				{ name: "Robe of the magi" },
				{ name: "Spellfire vest" },
				{ name: "Archmage's robe" }
			]
		}
	}
	


	can.fixture('GET /items', function(){
		return [ITEMS];
	});

	can.fixture('GET /class_items/{class}', function(request){
		console.log(request.data.class);
		return ITEMS[request.data.class];
		//return ITEMS[(+request.data.id)-1];
	});

	can.fixture("POST /items", function( request, response) {
		var id = ITEMS.length+1;
		ITEMS.push($.extend({id:id},request.data));
		return {id:id};
	});

	can.fixture("PUT /items/{id}", function(request){
		$.extend(ITEMS[(+request.data.id)-1],request.data);
		return {};
	});

	can.fixture("DELETE /items/{id}", function(request){
		ITEMS = $.grep(ITEMS, function(val) { 
			if (val.id != request.data.id) {
				return val;
			}
		});
		return {};
	});

	can.fixture('POST /players', function(request, response){
		var id = 1;
		return {id: id};
	})

 })();