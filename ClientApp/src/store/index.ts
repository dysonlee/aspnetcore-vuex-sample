import Vue from 'vue';
import Vuex from 'vuex';
import { ModuleNamespace } from './types';
import SystemModule from './modules/system';

Vue.use(Vuex);

// Create Vuex Store, this will import at file 'main.ts'
export const store = new Vuex.Store({});

// Registre Vuex Modules to store
export const systemModule = new SystemModule({ store, name: ModuleNamespace.System });
