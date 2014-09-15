Item = can.Model({
	findAll: 'GET /items',
	findOne: "GET /class_items/{class}",
	create  : "POST /items",
	update  : "PUT /items/{id}",
	destroy : "DELETE /items/{id}"
}, {});