import {action, observable} from "mobx";

export default class RootStore {
    private static instance: RootStore;
    @action static getInstance(isServer = false, lastUpdate = Date.now()): RootStore {
        if (isServer) {
            return new RootStore(isServer, lastUpdate);
        }

        if (RootStore.instance == null) {
            RootStore.instance = new RootStore(isServer, lastUpdate);
        }
        return RootStore.instance;
    }


    @observable protected isServer: boolean;
    @observable protected lastUpdate: number;

    constructor(isServer: boolean, lastUpdate: number) {
        this.isServer = isServer;
        this.lastUpdate = lastUpdate;
    }

    getstores = () => {
        return {

        };
    };
}
