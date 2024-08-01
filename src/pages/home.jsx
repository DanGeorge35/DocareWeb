import React, { Component } from "react";
import Header from "../components/header";
class Home extends Component {
  handleNotimessage = (var1, var2) => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        title: var1,
        content: var2,
        notiType: "push_notification",
        type: "success",
      })
    );
  };
  handleToastmessage = (var1, var2) => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        title: var1,
        content: var2,
        notiType: "toast_notification",
        type: "success",
      })
    );
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <button
            className="btn btn-primary "
            onClick={() => {
              this.handleNotimessage("test", "testing");
            }}
          >
            Notification
          </button>
          <button
            className="btn btn-success "
            onClick={() => {
              this.handleToastmessage("test", "testing");
            }}
          >
            Notification
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
