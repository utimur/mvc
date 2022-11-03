import {UsersController} from "./usersController";
import {SortField, SortOrder, User} from "./UsersModel";
import './user.css';

export class UsersView {
    controller: UsersController;
    root: HTMLElement;

    private form: HTMLDivElement;
    private users: HTMLElement;
    private usernameInput: HTMLInputElement;
    private ageInput: HTMLInputElement;
    private createButton: HTMLButtonElement;

    private sortSelectors: HTMLDivElement;
    private fieldSelect: HTMLSelectElement;
    private orderSelect: HTMLSelectElement;
    private sortButton: HTMLButtonElement;

    constructor(root: HTMLElement, controller: UsersController) {
        this.root = root;
        this.controller = controller;


        this.createUserForm()
        this.createSortSelectors()
        this.createUsersList();

        this.bindListeners();

    }

    private onCreateClick = () => {
        try {
            const newUser = this.controller.handleCreate(this.usernameInput.value, Number(this.ageInput.value))
            this.renderNewUser(newUser);
        } catch (e) {
            this.showError((e as Error).message)
        }
    }

    private onSortClick = () => {
        const newUsers = this.controller.handleSort(this.fieldSelect.value as SortField, this.orderSelect.value as SortOrder)
        this.renderUsers(newUsers);
    }

    private bindListeners() {
        this.createButton.addEventListener('click', this.onCreateClick)
        this.sortButton.addEventListener('click', this.onSortClick)
    }

    private showError(message: string) {
       alert(message);
    }

    private getUserElement(user: User) {
        return `
                 <div class="user">
                    <h3>Username = ${user.username}</h3>
                    <h5>Age = ${user.age}</h5>
                </div>
            `
    }

    private renderNewUser(user: User) {
        const userNode = document.createElement('div');
        userNode.innerHTML = this.getUserElement(user);

        this.users.appendChild(userNode)
    }

    private renderUsers(users: User[]) {
        const usersElements = users.map(user => {
            return this.getUserElement(user);
        })

        this.users.innerHTML = usersElements.join('')
    }

    private createUsersList() {
        this.users = document.createElement('div');
    }

    private createSortSelectors() {
        this.sortSelectors = document.createElement('div');

        this.fieldSelect = document.createElement('select');
        const usernameOption = document.createElement('option');
        usernameOption.value = 'username';
        usernameOption.innerText = 'Имя пользователя';
        const ageOption = document.createElement('option');
        ageOption.value = 'age';
        ageOption.innerText = 'Возраст';

        this.fieldSelect.add(usernameOption);
        this.fieldSelect.add(ageOption);

        this.orderSelect = document.createElement('select');
        const ascOption = document.createElement('option');
        ascOption.value = 'asc';
        ascOption.innerText = 'По возрастанию';
        const descOption = document.createElement('option');
        descOption.value = 'desc';
        descOption.innerText = 'по убыванию';

        this.orderSelect.add(ascOption);
        this.orderSelect.add(descOption);

        this.sortButton = document.createElement('button');
        this.sortButton.innerText = 'сортировать';

        this.sortSelectors.appendChild(this.fieldSelect)
        this.sortSelectors.appendChild(this.orderSelect)
        this.sortSelectors.appendChild(this.sortButton)
    }

    private createUserForm() {
        this.form = document.createElement('div');
        this.usernameInput = document.createElement('input');
        this.usernameInput.placeholder = 'Введите имя пользователя'
        this.ageInput = document.createElement('input');
        this.ageInput.placeholder = 'Введите возраст'
        this.createButton = document.createElement('button');
        this.createButton.innerText = 'Создать'
        this.form.appendChild(this.usernameInput)
        this.form.appendChild(this.ageInput)
        this.form.appendChild(this.createButton)
    }

    public mount() {
        this.root.innerHTML = `
            <h1>Пользователи</h1>
        `
        this.root.appendChild(this.sortSelectors)
        this.root.appendChild(this.form)
        this.root.appendChild(this.users)
    }
}
