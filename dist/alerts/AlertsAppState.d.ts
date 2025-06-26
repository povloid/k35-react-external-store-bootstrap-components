import { bootstrapType } from "../types";
export interface AlertAppState {
    id: string;
    type: bootstrapType;
    message?: string;
}
export type AlertsAppState = AlertAppState[];
export declare const alertsAppStateInit: AlertsAppState;
export declare const alertsClear: () => AlertsAppState;
export declare const alertsAdd: (alerts: AlertsAppState, { type, message, id }: {
    type: bootstrapType;
    message?: string;
    id?: string;
}) => AlertsAppState;
export declare const alertsAddU: (arg2: {
    type: bootstrapType;
    message?: string;
    id?: string;
}) => (arg1: AlertsAppState) => AlertsAppState;
export declare const alertsDel: (alerts: AlertsAppState, alertId: string) => AlertsAppState;
export declare const alertsDelU: (arg2: string) => (arg1: AlertsAppState) => AlertsAppState;
