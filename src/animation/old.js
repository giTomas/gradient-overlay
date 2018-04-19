animationOverlayOn2 = (delay=this.state.delay, duration=this.state.duration) => {
  this.setState({
    inProgress: true
  });
  const start = Date.now();
  // const duration = 750;
  const step = 100/(duration/delay);


  let timer = setInterval(() => {
    const timePassed = Date.now() - start;
    if (timePassed >= duration) {
      clearInterval(timer);
      this.setState({
        inProgress: false,
        progress: 100
      });
      return;
    }
    this.setState((prevState, props) => ({
      progress: prevState.progress+step
    }));
  }, delay)
}

animationOverlayOff2 = (delay=this.state.delay, duration=this.state.duration) => {
  this.setState({
    inProgress: true
  });
  const start = Date.now();
  const step = 100/(duration/delay);

  let timer = setInterval(() => {
    const timePassed = Date.now() - start;
    if (timePassed >= duration) {
      clearInterval(timer)
      this.setState({
        inProgress: false,
        progress: 0
      });
      return;
    }
    // console.log(this.state.progress)
    this.setState((prevState, props) => ({
      progress: prevState.progress-step
    }));
  }, delay)
}
