import {Controller} from "./controller";

export interface View {
    mount: () => void;
    controller: Controller;
}
