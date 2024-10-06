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
export declare const alertsAddC: (a2: {
    type: bootstrapType;
    message?: string;
    id?: string;
}) => (a1: AlertsAppState) => AlertsAppState;
export declare const alertsDel: (alerts: AlertsAppState, alertId: string) => AlertsAppState;
export declare const alertsDelC: (a2: string) => (a1: AlertsAppState) => AlertsAppState;
