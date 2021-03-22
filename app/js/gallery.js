$(document).ready(function() {

    var _gallery_loading = false;

    $("a[data-gallery]").click(function(){
        if(_gallery_loading) return;
        _gallery_loading = true;

        var mode = $(this).data("gallery");
        var url = "/inc/gallery_ajax.asp?mode=" + mode;

        if(mode == 1 || mode == 2) {
            url += "&id=" + $(this).data("gallery-id");
        }
        

        $.getJSON(url,{format: "json"}).done(function(e){

            $(this).lightGallery({
                hash: false,
                share:false,
                dynamic: true,
                dynamicEl: e,
                download: false,
                backdropDuration: 500
            });

        }).fail(function(e, textStatus, error){
            alert("Nastala chyba při načítání galerie. Prosím zkuste to znovu.");
            console.error("getJSON failed, status: " + textStatus + ", error: " + error);
            console.error(e);

        }).always(function(){
            _gallery_loading = false;
        });

        return false;
    });


});

