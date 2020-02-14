<template>
    <div>
        <v-snackbar
            dark
            :top="snackbarMessage.location === 'top'"
            :bottom="snackbarMessage.location === 'bottom'"
            :left="snackbarMessage.location === 'left'"
            :right="snackbarMessage.location === 'right'"
            :color="snackbarMessage.color"
            v-model="snackbar"
        >
            {{ snackbarMessage.value }}
            <v-btn small dark text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { systemModule } from '../../store';
import { Watch } from 'vue-property-decorator';
import { Message } from '../../model/Message';

@Component
export default class SnackbarMesssage extends Vue {
    /**
     * Show or hide snackbar
     */
    private snackbar: boolean = false;

    /**
     * Initial a message object for current displayed Vuetify -> Snackbar Component
     */
    private snackbarMessage: Message = new Message();

    /**
     * Mapping 'messages' to SystemModule 'messages' list
     */
    get messages() {
        return systemModule.getMessageList();
    }

    /**
     * Watching 'messages', when list changed show snackbar component.
     */
    @Watch('messages')
    private onMessagesChanges(newVals: Message[]) {
        // Message list doesn't allow push multiple message,
        // so here new message only will be the first one
        this.snackbarMessage = newVals[0];
        this.snackbar = true; // Show snackbar component
    }
}
</script>

<style lang="css">
.v-snack {
    padding-top: 30px !important;
}
</style>
