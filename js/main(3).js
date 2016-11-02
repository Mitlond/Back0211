var Person = Backbone.Model.extend({
	defaults:{
		name:'Иоанн 13',
		age: 700,
		job:'Папа Римский'
	}
});

var PeopleCollection=Backbone.Collection.extend({
model:Person
});

var PeopleView = Backbone.View.extend({
	tagName:'ul',
	
	initialize:function(){
	
	},
	render.function(){
		this.collection.each(function (person){
			var personView=new PersonView({model:person});
			
			this.$el.append(personView.render().el);
		}, this);
	
	}

});


var PersonView=Backbone.View.extend({
	tagName:'li',
	template: _.template('<strong><%=name%></strong> (<%=age%) - <%=job %>'),
	
	initialize:function(){
		this.render();
		},
		
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
		}
});

var peopleCollection=new PeopleCollection([;
{
	name:'Бонифаций 6',
	age:829,
	job:'Папа Римский'
},
{
	name:'Дмитрий Журин'
	age:19,
	job:'Его Светлость'
},
{
	name: 'Артем',
	job:'Бездарь'
}
]);		

var peopleView = new PeopleView({collection:peopleCollection});
$(document.body).append(peopleView.render().el);