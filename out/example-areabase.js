"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReduxArea_1 = require("./ReduxArea");
// It's recommented to create a custom AreaBase
var ActionTracking;
(function (ActionTracking) {
    ActionTracking["Requested"] = "Requested";
    ActionTracking["Succeeded"] = "Succeeded";
    ActionTracking["Failed"] = "Failed";
})(ActionTracking = exports.ActionTracking || (exports.ActionTracking = {}));
exports.initAppAreaBaseState = () => ({
    loading: false,
    trackingMap: {},
    errorMap: {}
});
exports.AppAreaBase = new ReduxArea_1.default({
    baseNamePrefix: "@@App",
    addNameSlashes: true,
    addShortNameSlashes: true,
    baseState: exports.initAppAreaBaseState(),
    baseFailureAction: (error) => ({ error }),
    baseFailureProducer: (draft, { error, actionName }) => {
        draft.errorMap[actionName] = {
            error,
            message: error.message,
            count: draft.errorMap[actionName]
                ? draft.errorMap[actionName].count + 1
                : 1,
            currentCount: draft.errorMap[actionName]
                ? draft.errorMap[actionName].count + 1
                : 1
        };
    },
    baseActionsIntercept: ({ actionName }) => ({
        actionName
    }),
    baseInterceptors: {
        Request: [
            (draft, { actionName }) => {
                draft.loading = true;
                draft.trackingMap[actionName] = ActionTracking.Requested;
            }
        ],
        Success: [
            (draft, { actionName }) => {
                draft.loading = false;
                draft.trackingMap[actionName] = ActionTracking.Succeeded;
                if (draft.errorMap[actionName]) {
                    draft.errorMap[actionName].currentCount = 0;
                }
            }
        ],
        Failure: [
            (draft, { actionName }) => {
                draft.loading = false;
                draft.trackingMap[actionName] = ActionTracking.Failed;
            }
        ],
        Clear: [
            (draft, { actionName }) => {
                delete draft.trackingMap[actionName];
            }
        ]
    }
});
exports.default = exports.AppAreaBase;
//# sourceMappingURL=example-areabase.js.map