import {CounterTwoModel} from "./CounterTwoModel";
import {Controller} from "../../types/controller";

export class CounterTwoController implements Controller {
    model: CounterTwoModel;

    constructor() {
        this.model = new CounterTwoModel();
    }

    handleIncrement() {
        console.log('increment', this.model)
        return this.model.increment();
    }

    handleDecrement() {
        console.log('handleDecrement')
        return this.model.decrement();
    }

    handleMultiply() {
        console.log('handleMultiply')
        return this.model.multipleAndDivide();
    }
}
