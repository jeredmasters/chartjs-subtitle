# Chart.js Subtitle Plugin
[![jered.cc]][jered-cc] [![NPM Package]][npm-url]

## Install
```bash
npm install --save chart.js chartjs-subtitle
```

## Options
The options for the subtitle are based on the options for the existing title
```javascript
  options: {
    ...

    plugins: {
      chartJsPluginSubtitle: {
        /**
         * is the title shown
         * @member {boolean} display
         * @default false
         */
        display:	false,

        /**
         * Font size in px
         * @member {Number}
         * @default 12
         */
        fontSize:	12,

        /**
         * Font family for the title text.
         * @member {String} fontFamily
         * @default "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"	
         */
        fontFamily:	"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        /**
         * Font color
         * @member {String} fontColor
         * @default '#999'
         */
        fontColor: '#999',

        /**
         * Font style
         * @member {String} 'fontStyle'
         * @default 'normal'
         */
        fontStyle: 'normal',

        /**
         * Subtitle text to display
         * @member {String}
         * @default ''
         */
        text:	''
      }
    }

  ...
}
```


## Building

```sh
npm install
npm run build
```


*** 

Built by [Jered Masters][jered-cc], [linkedin][linkedin]


[jered-cc]: http://jered.cc
[linkedin]: https://www.linkedin.com/in/jeredmasters/
[npm-url]: https://www.npmjs.com/package/chartjs-subtitle