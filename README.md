## View on github pages
https://davidandrus.github.io/frontend-nanodegree-mobile-portfolio/

## Running Locally

1. #### clone the repository
`git clone git@github.com:davidandrus/frontend-nanodegree-mobile-portfolio.git`

2. #### cd into the folder that was just created
`cd frontend-nanodegree-mobile-portfolio`

3. #### install dependencies
`npm install`

4. #### build the production assets
`npm run build`

5. #### run the server
`npm start`

## Make available to web

1. #### Open new terminal
2. #### cd into the folder created in Running Locally - step 1

3. #### expose to internet
`npm run ngrok`

4. #### In a browser window open ngrok url

  ```
  Session Status                online
  Version                       2.1.18
  Region                        United States (us)
  Web Interface                 http://127.0.0.1:4040
  Forwarding                    http://bb7d56d0.ngrok.io -> localhost:8080
  Forwarding                    https://bb7d56d0.ngrok.io -> localhost:8080

  Connections                   ttl     opn     rt1     rt5     p50     p90
                                0       0       0.00    0.00    0.00    0.00
  ```
So in the example above **http://bb7d56d0.ngrok.io**

## Test in PageSpeed Insights
https://developers.google.com/speed/pagespeed/insights

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
