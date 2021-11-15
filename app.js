'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});

var songtext;
$(document).ready(function() {
                  $('#button').click(function() {
    songtext = [ // [text, duration]
    ];
    var value = $('#Gen1-1').text().split("");
      for(var i=0;i<value.length;i++) {
          songtext.push([value[i], $('#range').val()]);
      }
    var text="";
    $.each(songtext, function(a, b) {
        text += "<span id='p"+a+"'>" + b[0] + "</span>";
    });
    
    $('#Gen1-1').html(text);
    
    cc=0;
    
    nextWord();
})});

var cc = 0;
function nextWord() {
    $('#p'+cc).css("color", "red");
    cc++;
    if(cc> songtext.length-1) return;
    window.setTimeout(nextWord, songtext[cc-1][1]);
}