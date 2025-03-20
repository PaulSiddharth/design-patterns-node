// class StrategyManager {
//     constructor(){
//         this._strategy = null;
//     }

//     set strategy(strategy){
//         this._strategy = strategy
//     }
//     get strategy(){
//         return this._strategy
//     }
//     doAction() {
//         this._strategy.doAction()
//     }
// }

// class Strategy1 {
//     doAction() {
//         console.log('strategy 1')
//     }
// }

// class Strategy2 {
//     doAction() {
//         console.log('strategy 2')
//     }
// }

// const strategyManager = new StrategyManager();
// const strategy1 = new Strategy1()
// const strategy2 = new Strategy2()

// strategyManager.strategy = strategy1;
// strategyManager.doAction()

class StrategyManager {
    constructor(){
        this._strategies = [];
    }

    addStrategy(strategy){
        this._strategies = [...this._strategies, strategy]
    }

    getStrategyName(name){
        return this._strategies.find(strategy => strategy._name === name)
    }
}

class Strategy {
    constructor(name, handler){
        this._name = name;
        this._handler = handler;
    }

    doAction(){
        this._handler();
    }
}

const strategyManager = new StrategyManager();
const strategy1 = new Strategy('strategy1', () => console.log("strategy 1"))
const strategy2 = new Strategy('strategy1', () => console.log("strategy 2"))

strategyManager.addStrategy(strategy1);
strategyManager.addStrategy(strategy2);

const strategyA = strategyManager.getStrategyName("strategy1");
strategyA.doAction();
