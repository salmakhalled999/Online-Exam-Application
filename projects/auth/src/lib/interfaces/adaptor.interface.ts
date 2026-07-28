import { RegisterRes } from "./register.interface";

export interface Adaptor {
    adapt (data:any): RegisterRes
}
