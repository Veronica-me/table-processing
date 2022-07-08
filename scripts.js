
/*alt*/

var requestURL = 'assets/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var orderData = request.response;
    if (orderData) {
        $(document).ready(function () {
            $('#table').bootstrapTable({
                data: orderData
            });
            addProgressBar();
            var sortButton = document.querySelector('.sort');
            sortButton.addEventListener('click', addProgressBar);
            sortButton.addEventListener('click', setColors);
            setColors();  
            
        }
        );
    } else {document.querySelector(".error").innerHTML = "Brak danych!";}
    
}


   
