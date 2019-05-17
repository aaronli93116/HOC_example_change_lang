import React, { Component } from "react";
import ReactDOM from "react-dom";

// HOC
const localization = OldComponenet => {
  class NewComponent extends Component {
    render() {
      const template = {
        en: {
          greeting: "hello",
          farewell: "bye"
        },
        cn: {
          greeting: "你好",
          farewell: "再见"
        },
        jp: {
          greeting: "おはよう",
          farewell: "さよなら"
        }
      };
      const lang = this.props.lang || "en";
      const showLang = template[lang];
      return <OldComponenet showLang={showLang} />;
    }
  }
  return NewComponent;
};

const ButtonWithLang = localization(Button);
const TextWithLang = localization(Text);
// App componenet
class App extends Component {
  state = {
    lang: "en"
  };
  switchToCN = () => {
    this.setState({
      lang: "cn"
    });
  };
  switchToEN = () => {
    this.setState({
      lang: "en"
    });
  };
  switchToJP = () => {
    this.setState({
      lang: "jp"
    });
  };
  render() {
    var curlang = this.state.lang;
    return (
      <div>
        <ButtonWithLang lang={curlang} />
        <TextWithLang lang={curlang} />
        <button onClick={this.switchToEN}>EN</button>
        <button onClick={this.switchToCN}>CN</button>
        <button onClick={this.switchToJP}>JP</button>
      </div>
    );
  }
}

function Button(props) {
  return <button>{props.showLang.greeting}</button>;
}
function Text(props) {
  return <p>{props.showLang.farewell}</p>;
}
const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
