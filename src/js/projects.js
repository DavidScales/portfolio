/*
 *
 * Project data - each json object is a project
 *
 */

var projects = [
  {
    'id': '1',

    // Thumbnail
    'title': 'Neighborhood Map',
    'short': 'A restaurant finding application',
    'images_src': 'images/thumbnail_neighborhood_map-300.png',
    'images_srcset':'images/thumbnail_neighborhood_map-1000.png 1000w, '+
                    'images/thumbnail_neighborhood_map-900.png 900w, '+
                    'images/thumbnail_neighborhood_map-800.png 800w, '+
                    'images/thumbnail_neighborhood_map-700.png 700w, '+
                    'images/thumbnail_neighborhood_map-600.png 600w, '+
                    'images/thumbnail_neighborhood_map-500.png 500w, '+
                    'images/thumbnail_neighborhood_map-400.png 400w, '+
                    'images/thumbnail_neighborhood_map-300.png 300w ',

    /* Potential images sizes are broken into the three views: triple column,
    double column, single column. For each view, the size of the image is the
    fraction of the page taken up by the column, minus margins around the columns.
    E.g. 3 column view: .333 of the screen, minus 6 sets of 20px margins */
    'sizes':'(min-width: 992px) calc(.333 * (100vw - 120px)), (min-width: 768px)'+
            ' calc(.5 * (100vw - 80px), calc(100vw - 40px)',

    // Modal
    'skills': ['Knockout.js', 'AJAX', 'JavaScript', 'HTML5', 'CSS3', 'Grunt', 'Responsive Design'],
    'description': 'In this project I built a responsive single page application'+
                   ' (SPA) featuring a neighborhood map that contains information'+
                   ' on local restaurants. Data from multiple 3rd party API\'s '+
                   '(Yelp API, Google Maps API) were integrated using AJAX. I '+
                   'utilized the Knockout JavaScript framework for an MV* design,  '+
                   'Grunt for optimization, and LocalStorage for user data persistence.',

    /* For triple column view, the image takes up about 60%, for double column,
    about 75%, and for single column (default mobile), basically 100% */
    'sizes_modal':'(min-width: 992px) 60vw, (min-width: 768px) 75vw, 100vw',
    'readme': 'https://github.com/DavidScales/neighborhood-map-project/blob/master/README.md',
    'github': 'https://github.com/DavidScales/neighborhood-map-project',
    'website': 'http://davidscales.github.io/neighborhood-map-project/dist/'
  },
  {
    'id': '2',

    // Thumbnail
    'title': 'Website Optimization',
    'short': 'CRP & performance optimization',
    'images_src': 'images/thumbnail_website_optimization-300.png',
    'images_srcset':'images/thumbnail_website_optimization-1000.png 1000w, '+
                    'images/thumbnail_website_optimization-900.png 900w, '+
                    'images/thumbnail_website_optimization-800.png 800w, '+
                    'images/thumbnail_website_optimization-700.png 700w, '+
                    'images/thumbnail_website_optimization-600.png 600w, '+
                    'images/thumbnail_website_optimization-500.png 500w, '+
                    'images/thumbnail_website_optimization-400.png 400w, '+
                    'images/thumbnail_website_optimization-300.png 300w ',

    /* Potential images sizes are broken into the three views: triple column,
    double column, single column. For each view, the size of the image is the
    fraction of the page taken up by the column, minus margins around the columns.
    E.g. 3 column view: .333 of the screen, minus 6 sets of 20px margins */
    'sizes':'(min-width: 992px) calc(.333 * (100vw - 120px)), (min-width: 768px)'+
            ' calc(.5 * (100vw - 80px), calc(100vw - 40px)',
    // Modal
    'skills': ['Critical Rendering Path', 'Chrome Developer Tools', 'Grunt', 'JavaScript'],
    'description': 'In this project I optimized the critical rendering path of a '+
                   'sample site, increasing its PageSpeed score from 27 to 95. '+
                   'Scrolling was also improved from 13 to 60 frames per second '+
                   'by eliminating inefficiencies, and I reduced a function\'s '+
                   'execution three orders of magnitude to remove a janky animation.',

    /* For triple column view, the image takes up about 60%, for double column,
    about 75%, and for single column (default mobile), basically 100% */
    'sizes_modal':'(min-width: 992px) 60vw, (min-width: 768px) 75vw, 100vw',
    'readme': 'https://github.com/DavidScales/FEND-website-optimization/blob/master/README.md',
    'github': 'https://github.com/DavidScales/FEND-website-optimization',
    'website': 'https://github.com/DavidScales/FEND-website-optimization'
  },
  {
    'id': '3',

    // Thumbnail
    'title': 'Frogger Clone',
    'short': 'A classic arcade game',
    'images_src': 'images/thumbnail_arcade_game-300.png',
    'images_srcset':'images/thumbnail_arcade_game-1000.png 1000w, '+
                    'images/thumbnail_arcade_game-900.png 900w, '+
                    'images/thumbnail_arcade_game-800.png 800w, '+
                    'images/thumbnail_arcade_game-700.png 700w, '+
                    'images/thumbnail_arcade_game-600.png 600w, '+
                    'images/thumbnail_arcade_game-500.png 500w, '+
                    'images/thumbnail_arcade_game-400.png 400w, '+
                    'images/thumbnail_arcade_game-300.png 300w ',

    /* Potential images sizes are broken into the three views: triple column,
    double column, single column. For each view, the size of the image is the
    fraction of the page taken up by the column, minus margins around the columns.
    E.g. 3 column view: .333 of the screen, minus 6 sets of 20px margins */
    'sizes':'(min-width: 992px) calc(.333 * (100vw - 120px)), (min-width: 768px) '+
            'calc(.5 * (100vw - 80px), calc(100vw - 40px)',

    // Modal
    'skills': ['JavaScript', 'Object-Oriented Programming', 'HTML5 Canvas'],
    'description': 'In this project I built an HTML5 Canvas game based on the '+
                   'classic Frogger, with a provided engine and graphic assets. '+
                   'I coded the player, enemies, and other game entities in '+
                   'JavaScript’s object-oriented pseudo-classical style. The game '+
                   'engine was also modified to increase the map size and game difficulty.',

    /* For triple column view, the image takes up about 60%, for double column,
    about 75%, and for single column (default mobile), basically 100% */
    'sizes_modal':'(min-width: 992px) 60vw, (min-width: 768px) 75vw, 100vw',
    'readme': 'https://github.com/DavidScales/FEND-arcade-game/blob/master/README.md',
    'github': 'https://github.com/DavidScales/FEND-arcade-game',
    'website': 'http://davidscales.github.io/FEND-arcade-game/'
  },
  {
    'id': '4',

    // Thumbnail
    'title': 'Dynamic Resume',
    'short': 'A dynamically generated resume',
    'images_src': 'images/thumbnail_dynamic_resume-300.png',
    'images_srcset':'images/thumbnail_dynamic_resume-1000.png 1000w, '+
                    'images/thumbnail_dynamic_resume-900.png 900w, '+
                    'images/thumbnail_dynamic_resume-800.png 800w, '+
                    'images/thumbnail_dynamic_resume-700.png 700w, '+
                    'images/thumbnail_dynamic_resume-600.png 600w, '+
                    'images/thumbnail_dynamic_resume-500.png 500w, '+
                    'images/thumbnail_dynamic_resume-400.png 400w, '+
                    'images/thumbnail_dynamic_resume-300.png 300w ',

    /* Potential images sizes are broken into the three views: triple column,
    double column, single column. For each view, the size of the image is the
    fraction of the page taken up by the column, minus margins around the columns.
    E.g. 3 column view: .333 of the screen, minus 6 sets of 20px margins */
    'sizes':'(min-width: 992px) calc(.333 * (100vw - 120px)), (min-width: 768px) '+
            'calc(.5 * (100vw - 80px), calc(100vw - 40px)',

    // Modal
    'skills': ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
    'description': 'Here I built a resume site, that dynamically modifies the DOM '+
                   'with jQuery to populate my resume fields with JSON data.',

    /* For triple column view, the image takes up about 60%, for double column,
    about 75%, and for single column (default mobile), basically 100% */
    'sizes_modal':'(min-width: 992px) 60vw, (min-width: 768px) 75vw, 100vw',
    'readme': 'https://github.com/DavidScales/FEND-resume/blob/master/README.md',
    'github': 'https://github.com/DavidScales/FEND-resume',
    'website': 'http://davidscales.github.io/FEND-resume/'
  },
  {
    'id': '5',

    // Thumbnail
    'title': 'Portfolio',
    'short': 'A responsive portfolio site',
    'images_src': 'images/thumbnail_portfolio-300.png',
    'images_srcset':'images/thumbnail_portfolio-1000.png 1000w, '+
                    'images/thumbnail_portfolio-900.png 900w, '+
                    'images/thumbnail_portfolio-800.png 800w, '+
                    'images/thumbnail_portfolio-700.png 700w, '+
                    'images/thumbnail_portfolio-600.png 600w, '+
                    'images/thumbnail_portfolio-500.png 500w, '+
                    'images/thumbnail_portfolio-400.png 400w, '+
                    'images/thumbnail_portfolio-300.png 300w ',

    /* Potential images sizes are broken into the three views: triple column,
    double column, single column. For each view, the size of the image is the
    fraction of the page taken up by the column, minus margins around the columns.
    E.g. 3 column view: .333 of the screen, minus 6 sets of 20px margins */
    'sizes':'(min-width: 992px) calc(.333 * (100vw - 120px)), (min-width: 768px) '+
            'calc(.5 * (100vw - 80px), calc(100vw - 40px)',

    // Modal
    'skills': ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Grunt', 'Responsive Design'],
    'description': 'This is the portfolio site that you are currently looking at! '+
                   'I used HTML5, CSS3, and the Bootstrap framework to build it. '+
                   'It has a mobile-first design and is fully responsive (try '+
                    're-sizing your browser window or opening the site on your '+
                    'phone if you\'d like to test it). I used responsive image '+
                    'techniques and Grunt to optimize loading speed.',

    /* For triple column view, the image takes up about 60%, for double column,
    about 75%, and for single column (default mobile), basically 100% */
    'sizes_modal':'(min-width: 992px) 60vw, (min-width: 768px) 75vw, 100vw',
    'readme': 'https://github.com/DavidScales/portfolio/blob/master/README.md',
    'github': 'https://github.com/DavidScales/portfolio',
    'website': 'http://davidscales.github.io/portfolio/'
  },
  {
    'id': '6',

    // Thumbnail
    'title': 'Health Tracker',
    'short': 'A calorie counter application',
    'images_src': 'http://placekitten.com/500/300',
    'images_srcset':'http://placekitten.com/500/300 500w',

    /* Potential images sizes are broken into the three views: triple column,
    double column, single column. For each view, the size of the image is the
    fraction of the page taken up by the column, minus margins around the columns.
    E.g. 3 column view: .333 of the screen, minus 6 sets of 20px margins */
    'sizes':'(min-width: 992px) calc(.333 * (100vw - 120px)), (min-width: 768px) '+
            'calc(.5 * (100vw - 80px), calc(100vw - 40px)',

    // Modal
    'skills': ['TBD'],
    'description': 'This project is curently in progress...',

    /* For triple column view, the image takes up about 60%, for double column,
    about 75%, and for single column (default mobile), basically 100% */
    'sizes_modal':'(min-width: 992px) 60vw, (min-width: 768px) 75vw, 100vw',
    'readme': '#',
    'github': '#',
    'website': '#'
  }
];

/*
 *
 * Project population - append each project to the page
 *
 */

$.each(projects, function(index, project) {
  $('.content').append(

    // Project thumbnail
    '<div class="col-md-4 col-sm-6 col-xs-12">'+
      '<!-- Wrap project in link for modal activation -->'+
      '<a href="#" data-toggle="modal" data-target="#Modal'+project.id+
      '" class="projectWrapLink">'+
        '<!-- Project - holds thumbnail and info -->'+
        '<div class="project">'+
            '<img class="project-image img-responsive" src="'+project.images_src+
            '" srcset="'+project.images_srcset+'" sizes="'+project.sizes+'" alt="'+
            project.title+'">'+
            '<div class="project-info">'+
              '<h3 class="project-info-title">'+project.title+'</h3>'+
              '<p class="project-info-description">'+project.short+'</p>'+
            '</div>'+
        '</div>'+
      '</a>'+
    '</div>'+

    // Project modal
    '<!-- Bootstrap modal -->'+
    '<div class="modal fade" id="Modal'+project.id+
    '" tabindex="-1" role="dialog" aria-labelledby="Modal'+project.id+'Label">'+
      '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
            '<span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="Modal'+project.id+'Label">'+project.title+'</h4>'+
          '</div>'+
          '<div class="modal-body">'+
            '<div class="row">'+
              '<div class="modal-column">'+
                '<img class="project-image img-responsive" src="'+project.images_src+
                '" srcset="'+project.images_srcset+'" sizes="'+project.sizes_modal+'" alt="'+
                project.title+'">'+
              '</div>'+
            '</div>'+
            '<div class="row">'+
              '<div class="modal-column text-center">'+
                '<div class="modal-skills" id="modal-skills-'+project.id+'"></div>'+
              '</div>'+
            '</div>'+
            '<div class="row">'+
              '<div class="modal-column">'+
                '<p class="modal-description">'+project.description+'</p>'+
              '</div>'+
            '</div>'+
            '<div class="row">'+
              '<div class="text-center">'+
                '<div class="modal-more">'+
                  '<a class="btn btn-default modal-more-btn" target="_blank" href="'+
                  project.readme+'" role="button">README</a>'+
                  '<a class="btn btn-default modal-more-btn" target="_blank" href="'+
                  project.github+'" role="button">GitHub</a>'+
                  '<a class="btn btn-default modal-more-btn" target="_blank" href="'+
                  project.website+'" role="button">Website</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
  );

  // For each skill in this project
  $.each(project.skills, function(i, skill) {
    // Append a skill element to the skills section
    $('#modal-skills-'+project.id+'').append(
      '<span class="modal-skill"> '+skill+' </span>'
    );
  });
});