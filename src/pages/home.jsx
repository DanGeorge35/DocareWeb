import React, { Component } from "react";
import Header from "../components/header";
class Home extends Component {
  handlemessage = (var1, var2) => {
    alert("Hello, World!");
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        title: var1,
        content: var2,
        notiType: "push_notification",
        type: "success",
      })
    );
  };
  render() {
    return (
      <div>
        <Header />
        <div>
          <button
            className="btn btn-primary "
            onClick={() => {
              this.handlemessage("test", "testing");
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
