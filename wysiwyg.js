ko.bindingHandlers.wysivalue = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // Create instance of Trumbowyg WYSIWYG on div.
        var wysi = $(element).trumbowyg();
        
        // Load latest value in observable into Trumbowyg instance.
        $(element).trumbowyg('html', ko.unwrap(valueAccessor()));

    },

    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        // On key up, load current HTML content of Trumbowyg instance into observable.
        var updates = $(element).keyup(function(){
            if (ko.isWritableObservable(valueAccessor())){
                valueAccessor()($(element).trumbowyg('html'));               
            };
        });
        
        // Captures any style changes made.
        var updates = $(element).focusout(function(){
            if (ko.isWritableObservable(valueAccessor())){
                valueAccessor()($(element).trumbowyg('html'));               
            };
        });
    }
};
