// kenburns on one featured image header image

var bgs = [];
$(".bg-images").find('img').each( function() {
	bgs.push($(this).attr('src'));
});

$('#kenburns').attr('width', bodyWidth);
$('#kenburns').attr('height', bodyWidth/375*640);
$('#kenburns').kenburns({
	images: bgs,
	frames_per_second: 30,
	display_time: 5000,
	fade_time: 1000,
	zoom: 1.2,
	background_color:'#F7F6F5'
});

var banner = new Swiper('.home-banner', {
	autoplay: true,
	speed: 500,
	loop: true,
	pagination: {
		el: '.home-banner .swiper-page .pagination',
    	clickable :true
	},
	navigation: {
		prevEl: '.home-banner .swiper-arrow.prev',
		nextEl: '.home-banner .swiper-arrow.next'
	}
});

var client = new Swiper('.client-logo', {
	autoplay: false,
	speed: 500,
	slidesPerView: 6,
	slidesPerColumn: 3,
	slidesPerGroup: 6,
	spaceBetween: 4,
	breakpoints: {
		768: {//当屏幕宽度小于等于768
			slidesPerView: 4,
			slidesPerColumn: 5,
			slidesPerGroup: 4,
			spaceBetween: 1
		},
	},
	pagination: {
		el: '.client-logo .swiper-page .pagination',
    	clickable :true
	},
	navigation: {
		prevEl: '.client-logo .swiper-arrow.prev',
		nextEl: '.client-logo .swiper-arrow.next'
	}
});

var vision = new Swiper('.home-vision-swiper', {
	autoplay: false,
	speed: 500,
	slidesPerView: 4,
	slidesPerColumn: 2,
	slidesPerGroup: 4,
	spaceBetween: 4,
	breakpoints: {
		768: {//当屏幕宽度小于等于768
			slidesPerView: 2,
			slidesPerColumn: 2,
			slidesPerGroup: 2,
			spaceBetween: 1
		},
	},
	pagination: {
		el: '.home-vision-swiper .swiper-page .pagination',
    	clickable :true
	},
	navigation: {
		prevEl: '.home-vision-swiper .swiper-arrow.prev',
		nextEl: '.home-vision-swiper .swiper-arrow.next'
	}
});

var team = new Swiper('.home-team-list', {
	autoplay: false,
	speed: 500,
	slidesPerView: 6,
	slidesPerColumn: 1,
	slidesPerGroup: 6,
	spaceBetween: 4,
	breakpoints: {
		768: {//当屏幕宽度小于等于768
			slidesPerView: 3,
			slidesPerColumn: 2,
			slidesPerGroup: 3,
			spaceBetween: 1
		},
	},
	pagination: {
		el: '.home-team-list .swiper-page .pagination',
    	clickable :true
	},
	navigation: {
		prevEl: '.home-team-list .swiper-arrow.prev',
		nextEl: '.home-team-list .swiper-arrow.next'
	}
});

var news = new Swiper('.home-news-swiper', {
	autoplay: false,
	speed: 500,
	slidesPerView: 4,
	slidesPerColumn: 2,
	slidesPerGroup: 4,
	spaceBetween: 4,
	breakpoints: {
		768: {//当屏幕宽度小于等于768
			slidesPerView: 2,
			slidesPerColumn: 2,
			slidesPerGroup: 2,
			spaceBetween: 1
		},
	},
	pagination: {
		el: '.home-news-swiper .swiper-page .pagination',
    	clickable :true
	},
	navigation: {
		prevEl: '.home-news-swiper .swiper-arrow.prev',
		nextEl: '.home-news-swiper .swiper-arrow.next'
	}
});
