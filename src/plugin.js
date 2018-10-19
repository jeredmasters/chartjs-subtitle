

import Chart from 'chart.js';

const defaultOptions = {
  /**
   * is the title shown
   * @member {boolean} display
   * @default false
   */
  display: false,

  /**
   * Font size in px
   * Expects either a string with `pt` or `px`, or an number of px
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
   * Subtitle text to display
   * @member {String}
   * @default ''
   */
  text: '',
};

const SubtitlePlugin = {
  id: 'chartJsPluginSubtitle',

  resolveStyle(options) {
    if (!(typeof options.fontStyle === 'string' || options.fontStyle instanceof String)) {
      return '';
    }
    switch (options.fontStyle.toLowerCase()) {
      case 'normal':
        return '';
      default:
        // allow any string
        return options.fontStyle;
    }
  },

  resolveSize(options) {
    const { fontSize } = options;
    if (typeof fontSize === 'string' || fontSize instanceof String) {
      return fontSize;
    }
    if (typeof fontSize === 'number') {
      return `${fontSize}px`;
    }
    return '12px';
  },

  resolveFont(options) {
    return `${this.resolveStyle(options)} ${this.resolveSize(options)} ${options.fontFamily}`;
  },

  /**
   * plugin hook to draw the sub title
   * @param chart chartjs instance
   * @param easingValue animation function
   * @param options plugin options
   */
  beforeDraw(chart, easingValue, rawOptions) {
    const options = Object.assign({}, defaultOptions, rawOptions);
    if (options.display) {
      const { text } = options;
      const { width, ctx } = chart.chart;
      ctx.restore();
      ctx.font = this.resolveFont(options);
      ctx.textBaseline = 'middle';
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = 31;
      ctx.fillStyle = options.fontColor;
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  },
};

Chart.pluginService.register(SubtitlePlugin);

export default SubtitlePlugin;
