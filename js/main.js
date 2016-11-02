var Person = Backbone.Model.extend({
	defaults: {
		name: 'Dimon', 
		fam: 'Zhurin',
		fallowers: 'друзей 30',
		age: 'возраст  19',
		grop: 'Рост 195',
		job: 'web developer',
		jo: 'ибо'
	
		
	}
	});
	
	var PersonView = Backbone.View.extend({
		tagName: 'li',
		
	template: '#person-id',
	template2:'#person2-id',
		
		   initialize: function () {
			   this.render();
		    },
		       render: function ()	{
				   var template = _.template( $(this.template).html() );
				   var template2 = _.template ( $(this.template).html() );
			//this.$el.html(this.model.get('name') + '(' + this.model.get('age') + ') - ' + this.model.get('job'));
		this.$el.html(template(this.model.toJSON() )+template2(this.model.toJSON()));
		//this.$el.html( this.template ( $(document.body).append(personView.el({age:40,job:'web developer',fam:'Zhurin',fallowers:30,grop:1,95}  ) ) );
		}
	});
	var person = new Person;
	var personView = new PersonView({model: person});
	
	var person2 = new Person({'name':'Artem', 'age': 10});
	var personView2 = new PersonView({model: person2});