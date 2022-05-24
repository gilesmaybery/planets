class StateManager {
    private static instance: StateManager = new StateManager();
    private selectedPlanet: string = '';
    constructor() {
        if (StateManager.instance) {
            return StateManager.instance;
        }

        this.member = 0;
        StateManager.instance = this;
    }

    member: number;

    setSelectedPlanet(name: string) {
        if (name != ''){
            this.selectedPlanet = name;
        }
    }

    getSelectedPlanet() {
        return this.selectedPlanet;
    }
}

export default StateManager;