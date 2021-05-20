/*global document*/
/*eslint-env browser*/

$(window).on('scroll', function() {
                if($(window).scrollTop()) {
                    $('navbar').addClass('move');
                }
                else {

                    $('navbar').removeClass('move');
                }
            })

function updateRoundTripInfo() {
    var deptDropBox = document.getElementById("fromDepature");
    var destDropBox = document.getElementById("toDestination");   
    var destRT = deptDropBox.options[deptDropBox.selectedIndex].value;
    var deptRT = destDropBox.options[destDropBox.selectedIndex].value; 
    document.getElementById("FromRoundTrip").setAttribute("value", deptRT);
    document.getElementById("ToRoundTrip").setAttribute("value", destRT);
}
    function hideDiv(id) { 
          
            $(id).hide(300);
}

function showDiv(id) { 
      
            $(id).show(300);
}

function toggleDiv(id){
$(id).toggle(300);
}
