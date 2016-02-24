# Portfolio
This is my personal portfolio website, and first significant web development project. The project was an exercise for learning hypertext markup language (HTML5), cascading style sheets (CSS3), and responsive design. I also utilized [Bootstrap], a popular CSS framework, and [Grunt], a command-line task runner.

A major goal of the project was responsive and "mobile-first" design. This means that the site not only needs to look good on a wide range of devices, but it also needs to perform well, especially on mobile.

I achieved this with multiple tools and techniques.

## Bootstrap and Media Queries
Using the Bootstrap framework allows me to ensure that the visual sections of the site would 'flow' as the size of the browser changed, scaling elements up or down, and fluidly changing the structure of the site itself. This is enhanced further by additional media queries. The project sections transition from just a single column on mobile or small screens, to two or three columns on wider screens like tablets and laptops.

## Responsive Images
Responsive design demands that images scale well and look good on every device. At the same time however, we need to keep our data usage low, especially on weaker mobile networks where images can be particularly expensive. Utilizing the 'srcset' tag and 'sizes' attribute, allows the browser to choose the site's images from multiple files. Based on the information given in the tag, the window size, and the screen pixel density, the browser can pick the cheapest image file without sacrificing visual quality for the user. For example, on a Samsung Galaxy S3 device, the image loaded is a 8.4kb file, whereas on the higher resolution Samsung Galaxy S4, a bigger 14kb file is used.

## Navbar
~~Adding a collapsible navigation bar adds some level of interactivity to the site, as well as allowing further space savings. This can be particularly valuable on mobile, where screen real estate is limited. If the screen is large, the hamburger icon is removed and the navigation bar remains fixed. The nav bar is set to automatically collapse for small or mobile screens, and can be toggled with the hamburger icon. This icon is also set to approximately 48x48px, ensuring that it is large enough to easily activate with a finger on touch screens.~~
_I have since heard arguments against hamburger icons and collapsible menu's in general, and have re-designed the site without them._

## Performance Optimization
While I am still currently learning optimization techniques, I have applied a few tricks that I've learned from another project here:
- Applying lossless compression reduced the size of logo images by an average of 29%, and the favicon image by 46%.

- Inlining the site's Google font directly into the main css file reduced the number of render blocking resources, and ensures that the delay for text rendering is minimal. (A browser needs to read and combine all of a page's HTML and CSS before it knows which fonts will be used, and can then send a request for them. While waiting for these requests, however, the browser may not be able to display text. Inlining fonts directly into the page's CSS causes these requests to be sent before the HTML and CSS have been completely analyzed. This ensures that the font files arrive as soon as possible, and that there is a minimal delay for text rendering.)

- Using a Content Delivery Network (CDN) for CSS files like Bootstrap is typically faster to deliver resources than normal servers, however after testing I observed that my hosting server  ([GitHub Pages])  was delivering the Bootstrap file in only 60-100ms, while the CDN was taking over 500ms. This may be because of my location, but my hosting server is performing better, so I'm sticking with that for now.

- Minification of a file removes whitespace and other non-essential redundancies that are useful only for human viewing. This can allow a significant savings of data. Minifying and internalizing the main CSS file, provides a roughly 30% reduction in file size, and also reduces the number of critical resources by combining a CSS file with an HTML file. Minification of the HTML file itself also reduces its file size about 10% or so.

Overall, this brings my PageSpeed Insights scores from 74 on mobile and 89 on desktop to 84 on mobile and 93 on desktop. While this could be better, the site is relatively quick and loads in under 1000ms on a 3G mobile network, so it will do for now. To optimize further, I could probably eliminate the use of Bootstrap altogether, or at least reduce it substantially, as I am using relatively few features of the framework.

## Automation
The page still needs work, and will have to be updated with content over time. As such, it would be very cumbersome to perform these optimization processes by hand. To solve this, I have set up a command line task runner called Grunt, to automatically resize and optimize the site's images, as well as inline CSS, and minify files.

### TODO
- Build Contact (with an hmtl form) & About pages
- Build project pages
- Refactor into an MVC framework with php(?) now that there will be multiple pages requiring similar appearance
- Update content as other projects are completed

#### License
MIT

[Bootstrap]: <http://getbootstrap.com/css/>
[Grunt]: <http://gruntjs.com/>
[GitHub Pages]: <https://pages.github.com/>
