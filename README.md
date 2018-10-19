# Chart.js Subtitle Plugin
[NPM Package][npm-url]

Simple subtitle plugin for [Chart.Js][chartjs]

Works with all four title positions and multi-line titles.
See more information on standard [title options](https://www.chartjs.org/docs/latest/configuration/title.html)

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
        display: false,

        /**
         * Font size
         * Expects either a string with `pt` or `px`, or a number of px
         * @member {Number}
         * @default 12
         */
        fontSize: 12,

        /**
         * Font family for the title text.
         * @member {String} fontFamily
         * @default "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
         */
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        /**
         * Font color
         * @member {String} fontColor
         * @default '#888'
         */
        fontColor: '#888',

        /**
         * Font style
         * @member {String} fontStyle
         * @enum 'normal' | 'bold' | 'italic' | 'italic bold'
         * @default 'normal'
         */
        fontStyle: 'normal',

        /**
         * Padding between the title and the subtitle
         * @member {Number}
         * @default 4
         */
        paddingTop: 4,

        /**
         * Subtitle text to display
         * @member {String}
         * @default ''
         */
        text: '',
      }
    }

  ...
}
```

## Examples
![image](https://user-images.githubusercontent.com/10936951/47205090-8e9e1200-d3b7-11e8-91cc-b81a572c8283.png)
![image](https://user-images.githubusercontent.com/10936951/47205101-9a89d400-d3b7-11e8-8098-bdb8acf3a5b4.png)
![image](https://user-images.githubusercontent.com/10936951/47205132-a9708680-d3b7-11e8-975f-58f35e88d67b.png)
![image](https://user-images.githubusercontent.com/10936951/47209222-62d45980-d3c2-11e8-8de3-d16d9aa1f3d2.png)
![image](https://user-images.githubusercontent.com/10936951/47209273-81d2eb80-d3c2-11e8-998f-53c7c5fa8561.png)

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