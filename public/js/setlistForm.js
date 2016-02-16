var addItem = document.getElementById('addItem')
var kit = document.getElementById('kitter')

var i = 2;
$(addItem).on('click', function(){
  console.log("working");
  $(kit).append($.jade(
    '.halferL' + i
  ))
  i++
})

// $('.halferL' + i).append($.jade(
//   'input.form-control.left(name="brand"' + i + ')'
// ))
// $(kit).append($.jade(
//   '.halferR' + i
// ))
// $('.halferR' + i).append($.jade(
//   'input.form-control.left(name="name"' + i + ')'
// ))
