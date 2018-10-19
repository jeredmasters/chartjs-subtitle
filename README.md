# Chart.js Subtitle Plugin
[NPM Package][npm-url]
Simple subtitle plugin for [Chart.Js][chartjs]

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

## Examples
![image](https://user-images.githubusercontent.com/10936951/47202480-cef99200-d3af-11e8-968f-b81677b0b7fd.png)
![image](https://user-images.githubusercontent.com/10936951/47202502-e2a4f880-d3af-11e8-8117-e9ec3d869477.png)
![image](https://user-images.githubusercontent.com/10936951/47202528-036d4e00-d3b0-11e8-98fa-81d378eb7536.png)


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
[chartjs]: https://www.chartjs.org/