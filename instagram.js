new InstagramFeed({
    'lilianofli': 'instagram',
    'container': "#instagram-feed-demo",
    'display_profile': true,
    'display_biography': true,
    'display_gallery': true,
    'display_igtv': false,
    'items': 10 , 
    'items_per_row': 3 , 
    'image_size': 480 , 
    display_captions: false, 
});

new InstagramFeed({
    'host': 'https://images' + ~~(Math.random() * 3333) + '-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/lilianofli/'
  });