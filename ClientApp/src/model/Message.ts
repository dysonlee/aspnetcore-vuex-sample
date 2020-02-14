export class Message {
    // 'Info', 'Success' or 'Error'
    public color: string = '';

    // Message Content
    public value: string = '';

    // Hide snackbar message after 'timeout' milliseconds, default is '6s'
    public timeout: number = 6000;

    // Show snackbar at which location of browser.
    // 'Top', 'Bottom', 'Left' or 'Right'
    public location: string = '';
}
