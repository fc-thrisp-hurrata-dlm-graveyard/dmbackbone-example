App.Controllers.Documents = Backbone.Controller.extend({
    routes: {
        "documents/:id":            "edit",
        "":                         "index",
        "new":                      "newDoc"
    },
    
    edit: function(id) {
        var doc = new Document({ id: id });
        doc.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: doc });//was: {model: doc}
            },
            error: function() {
                new Error({ message: 'Could not find that document.' });
                window.location.hash = '#';
            }
        });
    },
    
    index: function() {
      var documents = new App.Collections.Documents();
      documents.fetch({
        success: function() {
          new App.Views.Index({ collection: documents });
        },
        error: function() {
          new Error({ message: "Error loading documents." });
        }
      });
    },


    old_index: function() {
        $.getJSON('/documents', function(data) {
            if(data) {
                //each element of 'data' is {:document=>{..the attributes..}
                var documents = _(data).map(function(i) { return new Document(i.document); });
                new App.Views.Index({ documents: documents });
            } else {
                new Error({ message: "Error loading documents." });
            }
        });
    },
    
    newDoc: function() {
        new App.Views.Edit({ model: new Document() });
    }
});
