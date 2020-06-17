import React, { Component } from "react";

import Spinner from "../spinner";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      loading: true,
      error: false,
      data: null,
    };

    componentDidMount() {
      const { getData } = this.props;

      getData()
        .then((data) => {
          this.setState({
            data,
          });
        })
        .catch(this.onError);
    }

    onError = () => {
      this.setState({
        error: true,
        loading: false,
      });
    };

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
