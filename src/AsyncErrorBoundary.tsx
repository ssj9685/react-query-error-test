import React from "react";

interface AsyncErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface AsyncErrorBoundaryState {
  hasError: boolean;
}

class AsyncErrorBoundary extends React.Component<
  AsyncErrorBoundaryProps,
  AsyncErrorBoundaryState
> {
  constructor(props: AsyncErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(
    error: Error
  ): Partial<AsyncErrorBoundaryState> {
    console.error(error);

    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error, info.componentStack);
  }

  componentDidMount() {
    window.addEventListener("unhandledrejection", this.captureReject);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.captureReject);
  }

  captureReject = (e: PromiseRejectionEvent) => {
    e.preventDefault();

    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }

    return <>{this.props.children}</>;
  }
}

export default AsyncErrorBoundary;
