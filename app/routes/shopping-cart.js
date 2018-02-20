import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		
		return { 
			data :[
			
				{
					"prodId": 1,
					"prodTitle": "Iphone X",
					"desc": "This phone is pants Avoid",
					"price": "2.99",
					"prodImage": "http://via.placeholder.com/150x150"
				},
				{
					"prodId": 2,
					"prodTitle": "Samsung 8+",
					"desc": "Samsung Phone is quick",
					"price": "300",
					"prodImage": "http://via.placeholder.com/150x150"
				},
				{
					"prodId": 3,
					"prodTitle": "HTC 9",
					"desc": "The HTC BEST",
					"price": "900",
					"prodImage": "http://via.placeholder.com/150x150"
				},
				{
					"prodId": 4,
					"prodTitle": "Nokia - 11",
					"desc": "The new thing",
					"price": "700",
					"prodImage": "http://via.placeholder.com/150x150"
				},
				{
					"prodId": 5,
					"prodTitle": "Xiomi Redmi 4",
					"desc": "Super quick super flat",
					"price": "500",
					"prodImage": "http://via.placeholder.com/150x150"
				}
			]

		}
	}
});