var socket = io();
var datalist = $('datalist#rooms');
var button = $('button#refresh');

socket.emit('loadIndex', function(rooms) {}); 

socket.on('roomSelector', function(rooms) {
  var sortedRoomNames = Object.keys(rooms);
  sortedRoomNames.sort();
  datalist.children().remove();
  $.each(sortedRoomNames, function(index, roomName) {
    var option = $('<option>');
    console.log(option);
    option.attr('value',roomName);
    datalist.append(option);
  });
});

// datalist.on('change', function() {
//   if(this.value === 'createNew') {
//     $('input[name=room]').attr('type','text').attr('placeholder','type room name').focus();
//       select.hide();
//       return;
//   }
//   $('input[name=room]').val(this.value);
// });

