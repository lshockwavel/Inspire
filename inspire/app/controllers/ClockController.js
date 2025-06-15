

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
    }


    // Method without the seconds. REVIEW Is this how I would do the formatting without the seconds?
    // startClock() {
    //     console.log('Clock started');
    //     setInterval(() => {
    //         const now = new Date();
    //         document.getElementById('clock').innerText = now.toLocaleTimeString([], {
    //             hour: '2-digit',
    //             minute: '2-digit',
    //             hour12: true
    //         });
    //     }, 1000);
    // }
}