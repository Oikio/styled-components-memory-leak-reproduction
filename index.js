const ReactDOM = require('react-dom');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Style } = require('./style');
const { ThemeProvider } = require('styled-components');
const { ServerStyleSheet, StyleSheetManager } = require('styled-components')

const create = () => {
  const sheet = new ServerStyleSheet()
  class Hello extends React.Component {
    render() {
      return React.createElement('head', null, [
        React.createElement(Style, { key: 0 }),
        React.createElement('div', { key: 1, className: 'some' }, 'test'),
      ]);
    }
  }

  ReactDOMServer.renderToString(React.createElement(StyleSheetManager, { sheet: sheet.instance }, React.createElement(Hello)));
  const tags = sheet.getStyleTags()
  sheet.seal()
  return tags
};

setInterval(create, 1);
