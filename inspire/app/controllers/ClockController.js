

//WIP
export class ClockController {
    constructor() {
        this.startClock();
    }

    startClock() {
        console.log('Clock started');
        setInterval(() => {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString();
        }, 1000);
        this.logCurrentTime();
    }

    logCurrentTime() {
        const now = new Date();
        console.log('Current time:', now.toLocaleTimeString());
    }
}