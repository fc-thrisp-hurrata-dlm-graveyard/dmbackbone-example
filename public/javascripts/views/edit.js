App.Views.Edit = Backbone.View.extend({
  events: {
    "submit form":  "save"
  },

  initialize: function() {
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.render();
  },

  save: function() {
    var self = this;
    var msg = this.model.isNew() ? 'Successfully created!' : 'Saved!';

    this.model.save({ title: this.$( '[name=title]').val(), body: this.$( '[name=body]' ).val() }, {
      success: function(model, resp) {
        new App.Views.Notice({ message: msg });

        self.model = model; //why is the model being passed?
        //self.render(); //wrong..this will erase the previous successful save message from notice..
        //self.delegateEvents(); //why call explicitly? 

        Backbone.history.saveLocation('documents/' + model.id);
        //Whenever you reach a point in your application that you'd like to save as a URL, call saveLocation in order to update the URL fragment without triggering a hashchange event. (If you would prefer to trigger the event and routing, you can just set the hash directly.)

      },
      error: function() {
        new App.Views.Error();
      }
    });

    return false;
  },

  render: function() {
    $(this.el).html(JST.document({ model: this.model }));
    $('#app').html(this.el);

  }
});




