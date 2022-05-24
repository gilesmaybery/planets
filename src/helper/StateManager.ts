// An exmple of a typescript singleton that 
// could be used for state management across the app
class StateManager {
    private static instance: StateManager = new StateManager();
    private selectedPlanet: string = '';
    constructor() {
        if (StateManager.instance) {
            return StateManager.instance;
        }
        StateManager.instance = this;
    }

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