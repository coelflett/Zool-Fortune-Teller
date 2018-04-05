window.onload = function () {

document.addEventListener("deviceready", init, false); // check that Mobile devices is ready, if it is, run init() function.
//init(); // use for testing on chrome - dont need to have for phone gap 
};

function init() {  // Application code
    
        
    var options = {
        quality: 100,
        sourceType: Camera.PictureSourceType.CAMERA
         }    

  
    $("#takepic").on("click", takePic)
    
    function takePic() {
        navigator.camera.getPicture(success, error, options);
        
        start()
    }
 
    function success(imageData) {
        var desc = prompt ("Give Your Picture A Description ");
        var $desc = $("<h3>");
        $desc.text(desc);
        
        //create the image
        var $img= $("<img>");
        $img.attr("src", imageData);
        console.log(imageData);
        
        //created our div for the image and description
        var $div = $("<div>");
        $div.addClass("galleryImg");
        
        // put the image and description in the div
        $div.append($img);
//        $div.append($desc);
        
        //add the completed div to gallery   
        $("#gallery").append($div);
        $("#description").append( $desc );
        
//        $("#gallery").append(img);
        
//document.write(imageData);
//$("#result").append("<img src='" + imageData + "'>");
        
    }
    
    function error(message) {
        document.write(message);
    }
    
   ////////////////////////word gen///////////////
    
    function start(){   
    $('h2').text(randomEl(PhotoItem));
    selectElementContents($('h2')[0]);
    }
    
    var PhotoItem = ["CAT", "DOG", "RED PEN", "FLOWER", "LAMP", "KNIFE", "APPLE", "HAT", "CUP", "GUITAR", "BIRD", "BUSH", "PLAID", "PENNY"]; 

    start()

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

    ////////////////////score counter///////////////////////
    
    //url// https://www.codecademy.com/courses/a-simple-counter/0/1
    
    function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;

    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}


//        var button = document.getElementById("takepic"),
//        count = 0;
//    button.onclick = function() {
//        count += 1;
//    button.innerHTML = "Click me: " + count;
//};

    
    
    
    
    
       
}













//
//     var x;
// $("#submit").on("click", function(event) {
//    x = Math.floor((Math.random() * 2) + 1);
////    document.getElementById("output").innerHTML = x;
//
//     if ( x == 1 ) {
//    //     answer = "do it";
//    //      document.getElementById("output2").innerHTML = answer;
//         var myImage = new Image();
//        $('#myImage').attr('src','imgs/answer_no.png');
//       }
//
//    if ( x == 2 ) {
//    //     answer = "it works";
//    //      document.getElementById("output2").innerHTML = answer;
//        var myImage = new Image();
//        $('#myImage').attr('src','imgs/answer_yes.png');
//       }
//     
//     $("#msg").text($("input[name=question]").val());
//     
//     console.log($("#msg"));
// 
// });
     



























