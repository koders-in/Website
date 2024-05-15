import React from "react";

class ErrorBoundary extends React.Component<any,any> {
  state = {
    hasError: false,
    errorMessage: "",
    errorInfo: null
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorMessage: error.toString(), errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-600">
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            <summary>Error Details</summary>
            {this.state.errorMessage && (
              <p>{this.state.errorMessage}</p>
            )}
            {this.state.errorInfo && (
              <p>{this.state.errorInfo.componentStack}</p>
            )}
          </details>
        </div>
      );
    }

    return this.props?.children;
  }
}

export default ErrorBoundary;
