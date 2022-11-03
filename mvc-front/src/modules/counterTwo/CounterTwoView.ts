import {CounterTwoController} from "./CounterTwoController";
import {View} from '../../types/view'

export class CounterTwoView implements View {
    controller: CounterTwoController;
    root: HTMLElement;

    private title: HTMLElement;
    private incrementButton: HTMLElement;
    private decrementButton: HTMLElement;
    private multipleButton: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;
        this.controller = new CounterTwoController();

        this.title = document.createElement('h1');
        this.title.innerText = 'Value = 0';

        this.incrementButton = document.createElement('button');
        this.incrementButton.innerText = 'increment';
        this.decrementButton = document.createElement('button');
        this.decrementButton.innerText = 'decrement';
        this.multipleButton = document.createElement('button');
        this.multipleButton.innerText = 'multiply';

        this.bindListeners();
    }

    private onIncrementClick = () => {
        this.updateTitle(this.controller.handleIncrement())
    }

    private onDecrementClick = () => {
        this.updateTitle(this.controller.handleDecrement())
    }

    private onMultiplyClick = () => {
        this.updateTitle(this.controller.handleMultiply())
    }

    private bindListeners() {
        this.incrementButton.addEventListener('click', this.onIncrementClick);
        this.decrementButton.addEventListener('click', this.onDecrementClick);
        this.multipleButton.addEventListener('click', this.onMultiplyClick);
    }

    public updateTitle(value: number) {
        this.title.innerText = `Value = ${value}`;
    }

    public mount() {
        this.root.appendChild(this.title);
        this.root.appendChild(this.incrementButton);
        this.root.appendChild(this.decrementButton);
        this.root.appendChild(this.multipleButton);
    }
}
