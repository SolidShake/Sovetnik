//scrolling
$('a[href^="#"]').bind('click.smoothscroll', function (e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $('html, body').stop().animate({
    'scrollTop':$target.offset().top
  }, 1000, 'swing', function() {
    window.location.hash = target;
  });
});

var h_hght = 131;
var side_hght = 228;
var h_mrg = 0;
$(function() {
	$(window).scroll(function() {
		var top = $(this).scrollTop();
		var elem = $('#top-nav');
		var elem2 = $('#sidebar');
		if(h_hght - top > 0) {
			elem.css('top', (h_hght-top));
			elem2.css('top', (side_hght-top));
		} else {
			elem.css('top', h_mrg);
		}
	});
});