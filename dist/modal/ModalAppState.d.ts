export interface ModalAppState {
    show: boolean;
}
export declare const modalAppStateInit: ModalAppState;
export declare const modalShow: (s: ModalAppState) => ModalAppState;
export declare const modalHide: (s: ModalAppState) => ModalAppState;
