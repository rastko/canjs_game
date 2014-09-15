Character = can.Model({
	findAll: 'GET /characters',
	findOne: "GET /characters/{id}",
	create  : "POST /characters",
	update  : "PUT /characters/{id}",
	destroy : "DELETE /characters/{id}"
},{});