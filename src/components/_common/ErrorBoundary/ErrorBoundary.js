import React from 'react';
import FallbackUI from './FallbackUI';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.info(info);
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackUI/>
    }

    return this.props.children;
  }
}
