App.Views.Notice = Backbone.View.extend({
  initialize: function() {
    this.message = this.options.message;
    this.render();
  },  

  render: function() {
    $(this.el).html(this.message);//el is initially only an empty div
    $('#app').html(this.el);
  }
});

