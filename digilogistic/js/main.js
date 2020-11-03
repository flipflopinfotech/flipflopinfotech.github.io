
(function ($) {
    "use strict";


     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



// //-------- progress bar---------------//    
// var ring = document.getElementsByTagName('path')[0];
// var range = document.getElementsByTagName('input')[0];
// var text = document.getElementsByTagName('text')[0];
// var toRadians = Math.PI / 180;
// var r = 100;

// function draw() {
//   // Update the wheel giving to it a value in degrees,
//   // getted from the percentage of the input value
//   // a.k.a. (value * 360) / 100
//   var degrees = range.value * 3.5999;
//   // Convert the degrees value to radians
//   var rad = degrees * toRadians;
//   // Determine X and cut to 2 decimals
//   var x = (Math.sin(rad) * r).toFixed(2);
//   // Determine Y and cut to 2 decimals
//   var y = -(Math.cos(rad) * r).toFixed(2);
//   // The another half ring. Same as (deg > 180) ? 1 : 0
//   var lenghty = Number(degrees > 180);
//   // Moveto + Arcto
//   var descriptions = ['M', 0, 0, 'v', -r, 'A', r, r, 1, lenghty, 1, x, y, 'z'];
//   // Apply changes to the path
//   ring.setAttribute('d', descriptions.join(' '));
//   // Update the numeric display
//   text.textContent = range.value;
// }

// // Translate the center axis to a half of total size
// ring.setAttribute('transform', 'translate(' + r + ', ' + r + ')');
// // Bind the change event to the input
// range.addEventListener('input', draw);
// // Force to init the first time
// draw();


function initImageUpload(box) {
    let uploadField = box.querySelector('.image-upload');
  
    uploadField.addEventListener('change', getFile);
  
    function getFile(e){
      let file = e.currentTarget.files[0];
      checkType(file);
    }
    
    function previewImage(file){
      let thumb = box.querySelector('.js--image-preview'),
          reader = new FileReader();
  
      reader.onload = function() {
        thumb.style.backgroundImage = 'url(' + reader.result + ')';
      }
      reader.readAsDataURL(file);
      thumb.className += ' js--no-default';
    }
  
    function checkType(file){
      let imageType = /image.*/;
      if (!file.type.match(imageType)) {
        throw 'Datei ist kein Bild';
      } else if (!file){
        throw 'Kein Bild gewählt';
      } else {
        previewImage(file);
      }
    }
    
  }
  
  // initialize box-scope
  var boxes = document.querySelectorAll('.box');
  
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    initDropEffect(box);
    initImageUpload(box);
  }
  
  
  
  /// drop-effect
  function initDropEffect(box){
    let area, drop, areaWidth, areaHeight, maxDistance, dropWidth, dropHeight, x, y;
    
    // get clickable area for drop effect
    area = box.querySelector('.js--image-preview');
    area.addEventListener('click', fireRipple);
    
    function fireRipple(e){
      area = e.currentTarget
      // create drop
      if(!drop){
        drop = document.createElement('span');
        drop.className = 'drop';
        this.appendChild(drop);
      }
      // reset animate class
      drop.className = 'drop';
      
      // calculate dimensions of area (longest side)
      areaWidth = getComputedStyle(this, null).getPropertyValue("width");
      areaHeight = getComputedStyle(this, null).getPropertyValue("height");
      maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));
  
      // set drop dimensions to fill area
      drop.style.width = maxDistance + 'px';
      drop.style.height = maxDistance + 'px';
      
      // calculate dimensions of drop
      dropWidth = getComputedStyle(this, null).getPropertyValue("width");
      dropHeight = getComputedStyle(this, null).getPropertyValue("height");
      
      // calculate relative coordinates of click
      // logic: click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center
      x = e.pageX - this.offsetLeft - (parseInt(dropWidth, 10)/2);
      y = e.pageY - this.offsetTop - (parseInt(dropHeight, 10)/2) - 30;
      
      // position drop and animate
      drop.style.top = y + 'px';
      drop.style.left = x + 'px';
      drop.className += ' animate';
      e.stopPropagation();
      
    }
  }
  

/************************** service points dropdown  ****************/ 


$(".dropdown dt a").on('click', function () {
  $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function () {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
   return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});


$('.mutliSelect input[type="checkbox"]').on('click', function () {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
      title = $(this).val() + ",";

  if ($(this).is(':checked')) {
      var html = '<span title="' + title + '">' + title + '</span>';
      $('.multiSel').append(html);
      $(".hida").hide();
  } 
  else {
      $('span[title="' + title + '"]').remove();
      var ret = $(".hida");
      $('.dropdown dt a').append(ret);
      
  }
});
    

})(jQuery);