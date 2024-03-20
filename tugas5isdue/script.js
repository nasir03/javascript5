$(document).ready(function(){
    $(".gambar").click(function(){
        
        var id = $(this).attr("id");
        
       
        var audioId = "#suara" + id.charAt(0).toUpperCase() + id.slice(1);
        
       
        $("audio").each(function(){
            if (!$(this)[0].paused) {
                $(this)[0].pause();
                $(this)[0].currentTime = 0;
            }
        });
        $(audioId)[0].play();
    });
});
