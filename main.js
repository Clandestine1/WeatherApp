
$(function() {

    $('#submit').on('click',function(){
         let enterZipCode = $('#zipCodeInput').val()
         console.log(enterZipCode);
         $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + enterZipCode + ',us?units=imperial&appid=3cbb855ff80db1ef4bd92862e862fa9f')
         .done(function(res){
             $('#name').html('City name is...' + res.name);
             $('#low').html('Low temp is...' + converse(res.main.temp_min));
             $('#high').html('High temp is...' + converse(res.main.temp_max));
             $('#forecast').html('Average temp is...' + converse(res.main.temp));
             $('#weather').html('Weather description is...' +res.weather[0].description);
             console.log(res.main.temp);
             console.log(res.name);
             console.log(res.main.temp_min);
             console.log(res.main.temp_max);
             console.log(res.weather[0].description);
             $('#zipCodeInput').val("");

         if (converse(res.main.temp) < 40) {
            document.getElementById('#forecast').innerHTML = converse(res.main.temp);
            document.getElementById('#forecast').style.color = 'blue';
        } 
          else if (converse(res.main.temp) > 90) {
            document.getElementById('#forecast').innerHTML = converse(res.main.temp);
            document.getElementById('#forecast').style.color = 'red';
        }  else {     
        document.getElementById('#forecast').innerHTML = converse(res.main.temp);
        }
         })
         function converse(k) {
            let fa;
            fa = k * 9/5 - 459.67
            return Math.floor(fa);
         } 
      })
     });

