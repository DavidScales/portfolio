# Portfolio
This is my personal [portfolio website], and first significant web development project. The project was an exercise for learning hypertext markup language (HTML5), cascading style sheets (CSS3), and responsive design and images. I also utilized [Bootstrap], a popular CSS & JS framework, and [Grunt], a command-line task runner.

A major goal of the project was responsive and "mobile-first" design. This means that the site not only needs to look good on a wide range of devices, but it also needs to perform well, especially on mobile.

I achieved this with multiple tools and techniques.

## Bootstrap and Media Queries
Using the Bootstrap's grid functionality allows me to ensure that the visual sections of the site would 'flow' as the size of the browser changed, scaling elements up or down, and fluidly changing the structure of the site itself. This is enhanced further by additional media queries. The project sections transition from just a single column on mobile or small screens, to two or three columns on wider screens like tablets and laptops, respectively.

## Responsive Images
Responsive design demands that images scale well and look good on every device. At the same time however, we need to keep our data usage low, especially on weaker mobile networks where images can be particularly expensive. Utilizing the 'srcset' tag and 'sizes' attribute, allows the browser to choose the site's images from multiple files (generated automatically by Grunt, see "Automation" section). Based on the information given in the tag, the window size, and the screen pixel density, the browser can pick the cheapest image file without sacrificing visual quality for the user.

## Performance Optimization
While I am still currently learning optimization techniques, I have applied a few tricks that I've learned from [another project] here:
- Applying lossless compression reduces image sizes substantially.

- Inlining the site's Google font directly into the main css file reduces the number of render blocking resources, and ensures that the delay for text rendering is minimal. (A browser needs to read and combine all of a page's HTML and CSS before it knows which fonts will be used, and can then send a request for them. While waiting for these requests, however, the browser may not be able to display text. Inlining fonts directly into the page's CSS causes these requests to be sent before the HTML and CSS have been completely analyzed. This ensures that the font files arrive as soon as possible, and that there is a minimal delay for text rendering.)

- Content Delivery Networks (CDN) are optimized for delivering external files like Bootstrap and jQuery, and using these is typically faster at delivering these resources than conventional servers.

- Minification of a file removes whitespace and other non-essential redundancies that are useful only for human viewing. This can allow a significant savings of data. Minifying and internalizing the main CSS file, provides a reduction in file size and also reduces the number of critical resources by combining a CSS file with an HTML file. Minification of the HTML file itself also reduces its file size.

## Automation
A portfolio page will always need work, as it will have to be updated with content over time. As such, it would be very cumbersome to perform these optimization processes by hand. To solve this, I have set up a command line task runner called [Grunt], to automatically resize and optimize the site's images, as well as inline CSS, and minify files.

## Update
The original project has been updated to utilize JavaScript (JS) to dynamically generate HTML, rather than hard coding it. The JS code retrieves data from JSON objects to populate the site's content.

#### License
MIT

[portfolio website]: <http://davidscales.github.io/portfolio/>
[Bootstrap]: <http://getbootstrap.com/>
[Grunt]: <http://gruntjs.com/>
[another project]:<https://github.com/DavidScales/FEND-website-optimization>
