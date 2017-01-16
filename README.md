# Running Locally

#### clone the repository
`git clone git@github.com:davidandrus/frontend-nanodegree-mobile-portfolio.git`

#### cd into the folder that was just created
`cd frontend-nanodegree-mobile-portfolio`

#### install dependencies
`npm install`

#### build the production assets
`npm build`

#### Running the server
`npm start`

#### Make available to the web
`npm run ngrok`

# Optimizations Made

## index.html

Added a build pipeline using gulp which does the following
* runs all image assets through image minifier
* minifies html
* inlines all screen styles to prevent an unnecessary blocking
* minifies all css

Made manual edits to `index.html`
* made google analytics script run async
* made the google font async by using the web font loader (https://github.com/typekit/webfontloader)
* fixed issue where Cam's Pizza image was being included at a much larger size than was displayed by creating a smaller image at the display size `src/views/images/pizzeria-thumb.jpg`

## main.js

* updated `updatePositions` function to not force layout / reflow by moving `scrollTop` check out of `for` loop
* updated `scroll` listener to call it's callback inside of `requestAnimationFrame`
* updated `determineDx` signature to `(oldSize, size, windowWidth)` where before it was `(elem, size)`. Accordingly I updated `changePizzaSizes` to calculate `oldWidth, windowWidth, and oldSize` once each before entering the `for` loop which in turn calls `determineDx`. This change prevent another force reflow / layout issue.
