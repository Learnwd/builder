var isOpen = false;
var newItem;
var isEmpty;

$(function () {
   $("#dropArea").sortable({
      start: function (event, ui) {
         console.log('did it start?');
         if (ui.helper.hasClass('test') && isOpen === true) {
            $('#myTrashbar').css('width', '250px');
         }

      },

      stop: function (event, ui) {
         console.log('did it stop?');

         $('#myTrashbar').css('width', '0px');


      },

      revert: true
   });

   $(".draggable").draggable({
      start: function (event, ui) {},
      stop: function (event, ui) {},
      connectToSortable: "#dropArea",
      helper: "clone",
      appendTo: '#dropArea',
      revert: "invalid",
      drag: function (event, ui) {
         console.log('Dragging');
      }
   });

   $("#dropArea").droppable({
      over: function (event, ui) {
         $('#dropArea').css('background', '#bfc5ca');
      },
      tolerance: "pointer",
      out: function (event, ui) {
         $('#dropArea').css('background', '#ffffff');
      },
      drop: function (event, ui) {
         isPageEmpty();
         $('#dropArea').css('background', '#ffffff');
         $(ui.draggable).addClass('test');
      }
   });

   $("#mySidenav").droppable({
      accept: 'img',
      tolerance: "pointer",
      over: function (event, ui) {
         if (ui.helper.hasClass('test')) {
            $('#myTrashbar').css('background', '#ff0000');
         }
      },
      out: function (event, ui) {
         if (ui.helper.hasClass('test')) {
            $('#myTrashbar').css('background', '#111');
         }
      },
      drop: function (event, ui) {
         if (ui.helper.hasClass('test')) {
            ui.helper.remove();
            $('#myTrashbar').css('background', '#111');
            $('#myTrashbar').css('width', '0px');
         }
         isPageEmpty();
      }
   });

   $().disableSelection();
});


function isPageEmpty() {
   
   if($('#dropArea').children().length > 1){
      console.log('Items on the page');
      $('#dropArea').css('min-height', '0px');
      isEmpty = false;
   } else {
      console.log('page is empty');
      $('#dropArea').css('min-height', '600px');
      isEmpty = true;
   }
   
}

//sidebar stuff
function toggleNav() {
   if (isOpen === false) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      document.getElementById('toggleIcon').classList.remove("fa-angle-double-right");
      document.getElementById('toggleIcon').classList.add("fa-angle-double-left");
      document.getElementById('toggle').style.left = '260px';
      isOpen = true;
   } else {
      document.getElementById('mySidenav').style.width = '0px';
      document.getElementById('main').style.marginLeft = '0px';
      document.getElementById('toggleIcon').classList.remove("fa-angle-double-left");
      document.getElementById('toggleIcon').classList.add("fa-angle-double-right");
      document.getElementById('toggle').style.left = '20px';
      isOpen = false;
   }

}
