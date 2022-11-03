import {CounterTwoView} from "./modules/counterTwo/CounterTwoView";
import {UsersView} from "./modules/users/UsersView";
import {UsersController} from "./modules/users/usersController";
import {UsersModel} from "./modules/users/UsersModel";

const counterView = new CounterTwoView(document.getElementById('counter1')!)

counterView.mount();

const usersModel = new UsersModel();
const usersController = new UsersController(usersModel)
const usersView = new UsersView(
    document.getElementById('users')!,
    usersController
)

usersView.mount();
