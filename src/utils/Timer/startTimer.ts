const startTimer = (start: number): number => {
    let startTime = 0;

    start === 0 ? startTime = Date.now() : startTime = start

    return startTime;
}

export default startTimer;