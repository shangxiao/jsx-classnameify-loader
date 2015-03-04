A [Webpack](http://webpack.github.io/) loader that searches for HTML "class", "for" tokens & replaces with "className", "htmlFor" respectively

The HTML "class" attribute is silently ignored in JSX, you're supposed to use "className".
I hate XML and I will only work with it if it's for HTML or extensions of HTML,
so the less my JSX diverges from HTML, the better.

Install
-------

`npm install rapilabs/jsx-classnameify-loader`

Usage
-----

Run this loader before running any JSX loader.

Todo
----

Map style strings to objects as expected by the JSX parser
