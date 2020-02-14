<template>
    <v-app>
        <v-content>
            <router-view />
        </v-content>

        <RollerLoading />
        <SnackbarMessage />
    </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
