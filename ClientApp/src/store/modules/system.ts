import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';
import { GlobalLoading } from '@/model/GlobalLoading';
import { Message } from '@/model/Message';

@Module
export default class SystemModule extends VuexModule {
    //#region Vuex State
    /**
     * Loading spinner needs to be realized on the interface until 'count' less equal than '0'
     */
    private globalLoading: GlobalLoading = new GlobalLoading();

    /**
     * List of messages cache. Snackbar will popup when new message pushed into list.
     */
    private messageList: Message[] = new Array<Message>();
    //#endregion

    //#region Vuex Getter
    public getGlobalLoading() {
        return this.globalLoading;
    }

    public getMessageList() {
        return this.messageList;
    }
    //#endregion

    //#region Vuex Actions
    /**
     * Add loading numbers by one
     */
    @Action
    public increaseLoading() {
        this.globalLoading.count++;
    }

    /**
     * Reduce loading numbers by one
     */
    @Action
    public decreaseLoading() {
        this.globalLoading.count--;
    }

    /**
     * Send 'info' (Normal) message. Default is 'blue' color.
     * @param value Message Content
     * @param location 'top', 'bottom', 'left' or 'right'
     */
    @Action
    public sendInfoMessage(value: string, location: string = 'top') {
        const msg = new Message();
        msg.color = 'info';
        msg.location = location;
        msg.value = value;

        this.messageList.push(msg);
    }

    /**
     * Send 'sucess' message. Default is 'green' color.
     * @param value Message Content
     * @param location 'top', 'bottom', 'left' or 'right'
     */
    @Action
    public sendSuccessMessage(value: string, location: string = 'top') {
        const msg = new Message();
        msg.color = 'Success';
        msg.location = location;
        msg.value = value;

        this.messageList.push(msg);
    }

    /**
     * Send 'error' message. Default is 'red' color.
     * @param value Message Content
     * @param location 'top', 'bottom', 'left' or 'right'
     */
    @Action
    public sendErrorMessage(value: string, location: string = 'top') {
        const msg = new Message();
        msg.color = 'Error';
        msg.location = location;
        msg.value = value;

        this.messageList.push(msg);
    }
    //#endregion
}
