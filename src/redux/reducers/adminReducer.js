import { ADD_ADMIN } from "../actions/utilities";
const INITIAL_STATE = {
    getFilteredListLoading: false,
    getFilteredListSuccess: false,
    getFilteredListFailure: false,
    getFilteredListError: null,
    getFilteredList: [],
    getFilteredListReset: false,


    getSingleOrListLoading: false,
    getSingleOrListSuccess: false,
    getSingleOrListFailure: false,
    getSingleOrListError: null,
    getSingleOrList: [],

    addAdminLoading: false,
    addAdminSuccess: false,
    addAdminFailure: false,
    addAdminError: null,
    addAdmin: [],
    addAdminReset: false,

    deleteAdminLoading: false,
    deleteAdminSuccess: false,
    deleteAdminFailure: false,
    deleteAdminError: null,
    deleteAdmin: [],
    deleteAdminReset: false,

    adminGetAllOrListLoading: false,
    adminGetAllOrListSuccess: false,
    adminGetAllOrListFailure: false,
    adminGetAllOrListError: null,
    adminGetAllOrList: [],

    changeActiveStatusLoading: false,
    changeActiveStatusSuccess: false,
    changeActiveStatusFailure: false,
    changeActiveStatusError: null,
    changeActiveStatus: [],

    filterTestReportLoading: false,
    filterTestReportSuccess: false,
    filterTestReportFailure: false,
    filterTestReportError: null,
    filterTestReport: [],

    testReportCountLoading: false,
    testReportCountSuccess: false,
    testReportCountFailure: false,
    testReportCountError: null,
    testReportCount: [],

    changeActiveBlockStatusLoading: false,
    changeActiveBlockStatusSuccess: false,
    changeActiveBlockStatusFailure: false,
    changeActiveBlockStatusError: null,
    changeActiveBlockStatus: [],
    submitForReviewLoading: false,
    submitForReviewSuccess: false,
    submitForReviewFailure: false,
    submitForReviewError: null,
    submitForReview: [],

    takeDecisionLoading: false,
    takeDecisionSuccess: false,
    takeDecisionFailure: false,
    takeDecisionError: null,
    takeDecision: [],

    reActivateDeviceLoading: false,
    reActivateDeviceSuccess: false,
    reActivateDeviceFailure: false,
    reActivateDeviceError: null,
    reActivateDevice: [],

  

};

export const addAdminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ADMIN.CLIENT_FILTERED_LIST_REQUEST:
            return {
                ...state,
                getFilteredListLoading: true,
                getFilteredListSuccess: false,
                getFilteredListFailure: false,
                getFilteredListError: null,
                getFilteredList: [],
                getFilteredListReset: false,
            };
        case ADD_ADMIN.CLIENT_FILTERED_LIST_SUCCESS:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: true,
                getFilteredListFailure: false,
                getFilteredListError: null,
                getFilteredList: action.payload,
                getFilteredListReset: false,
            };
        case ADD_ADMIN.CLIENT_FILTERED_LIST_FAILURE:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: false,
                getFilteredListFailure: true,
                getFilteredListError: action.payload,
                getFilteredListReset: false,
            };
        case ADD_ADMIN.CLIENT_FILTERED_LIST_RESET:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: false,
                getFilteredListFailure: false,
                getFilteredListError: null,
                getFilteredList: [],
            };

        case ADD_ADMIN.GET_CLIENT_SINGLE_OR_LIST_REQUEST:
            return {
                ...state,
                getSingleOrListLoading: true,
                getSingleOrListSuccess: false,
                getSingleOrListFailure: false,
                getSingleOrListError: null,
                getSingleOrList: [],
            };
        case ADD_ADMIN.GET_CLIENT_SINGLE_OR_LIST_SUCCESS:
            return {
                ...state,
                getSingleOrListLoading: false,
                getSingleOrListSuccess: true,
                getSingleOrListFailure: false,
                getSingleOrListError: null,
                getSingleOrList: action.payload,
            };
        case ADD_ADMIN.GET_CLIENT_SINGLE_OR_LIST_FAILURE:
            return {
                ...state,
                getSingleOrListLoading: false,
                getSingleOrListSuccess: false,
                getSingleOrListFailure: true,
                getSingleOrListError: action.payload,
            };

        case ADD_ADMIN.ADD_ADMIN_REQUEST:
            return {
                ...state,
                addAdminLoading: true,
                addAdminSuccess: false,
                addAdminFailure: false,
                addAdminError: null,
                addAdmin: [],
                addAdminReset: false,
            };
        case ADD_ADMIN.ADD_ADMIN_SUCCESS:
            return {
                ...state,
                addAdminLoading: false,
                addAdminSuccess: true,
                addAdminFailure: false,
                addAdminError: null,
                addAdmin: action.payload,
                addAdminReset: false,
            };
        case ADD_ADMIN.ADD_ADMIN_FAILURE:
            return {
                ...state,
                addAdminLoading: false,
                addAdminSuccess: false,
                addAdminFailure: true,
                addAdminError: action.payload,
                addAdminReset: false,
            };

        case ADD_ADMIN.DELETE_ADMIN_REQUEST:

            return {
                ...state,
                deleteAdminLoading: true,
                deleteAdminSuccess: false,
                deleteAdminFailure: false,
                deleteAdminError: null,
                deleteAdmin: [],
            };
        case ADD_ADMIN.DELETE_ADMIN_SUCCESS:

            let allList = state.adminGetAllOrList;
            for (let i = 0; i < allList.length; i++) {
                if (allList[i].userId === action.payload) {
                    allList.splice(i, 1);
                }
            }
            return {
                ...state,
                deleteAdminLoading: false,
                deleteAdminSuccess: true,
                deleteAdminFailure: false,
                deleteAdminError: null,
                adminGetAllOrList: allList,
            };
        case ADD_ADMIN.DELETE_ADMIN_FAILURE:
            return {
                ...state,
                deleteAdminLoading: false,
                deleteAdminSuccess: false,
                deleteAdminFailure: true,
                deleteAdminError: action.payload,
            };
        case ADD_ADMIN.ADMIN_GET_ALL_OR_LIST_REQUEST:
            return {
                ...state,
                adminGetAllOrListLoading: true,
                adminGetAllOrListSuccess: false,
                adminGetAllOrListFailure: false,
                adminGetAllOrListError: null,
                adminGetAllOrList: [],
            };
        case ADD_ADMIN.ADMIN_GET_ALL_OR_LIST_SUCCESS:
            return {
                ...state,
                adminGetAllOrListLoading: false,
                adminGetAllOrListSuccess: true,
                adminGetAllOrListFailure: false,
                adminGetAllOrListError: null,
                adminGetAllOrList: action.payload,
            };
        case ADD_ADMIN.ADMIN_GET_ALL_OR_LIST_FAILURE:
            return {
                ...state,
                adminGetAllOrListLoading: false,
                adminGetAllOrListSuccess: false,
                adminGetAllOrListFailure: true,
                adminGetAllOrListError: action.payload,
            };

        case ADD_ADMIN.FILTER_TEST_REPORT_REQUEST:
            return {
                ...state,
                filterTestReportLoading: true,
                filterTestReportSuccess: false,
                filterTestReportFailure: false,
                filterTestReportError: null,
                filterTestReport: [],
            };
        case ADD_ADMIN.FILTER_TEST_REPORT_SUCCESS:
            return {
                ...state,
                filterTestReportLoading: false,
                filterTestReportSuccess: true,
                filterTestReportFailure: false,
                filterTestReportError: null,
                filterTestReport: action.payload,
            };
        case ADD_ADMIN.FILTER_TEST_REPORT_FAILURE:
            return {
                ...state,
                filterTestReportLoading: false,
                filterTestReportSuccess: false,
                filterTestReportFailure: true,
                filterTestReportError: action.payload,
            };

        case ADD_ADMIN.CHANGE_ACTIVE_STATUS_REQUEST:
            return {
                ...state,
                changeActiveStatusLoading: true,
                changeActiveStatusSuccess: false,
                changeActiveStatusFailure: false,
                changeActiveStatusError: null,
                changeActiveStatus: [],
            };
        case ADD_ADMIN.CHANGE_ACTIVE_STATUS_SUCCESS:
            let list = state.adminGetAllOrList
            console.log("list", list, action.payload)
            for (let i = 0; i < list.length; i++) {
                if (list[i].userId === action.payload.userId) {
                    list[i].isActive = !list[i].isActive
                }
            }
            return {
                ...state,
                changeActiveStatusLoading: false,
                changeActiveStatusSuccess: true,
                changeActiveStatusFailure: false,
                changeActiveStatusError: null,
                changeActiveStatus: action.payload,
                adminGetAllOrList: list
            };
        case ADD_ADMIN.CHANGE_ACTIVE_STATUS_FAILURE:
            return {
                ...state,
                changeActiveStatusLoading: false,
                changeActiveStatusSuccess: false,
                changeActiveStatusFailure: true,
                changeActiveStatusError: action.payload,
            };

        case ADD_ADMIN.TEST_REPORT_COUNT_REQUEST:
            return {
                ...state,
                testReportCountLoading: true,
                testReportCountSuccess: false,
                testReportCountFailure: false,
                testReportCountError: null,
                testReportCount: [],
            };
        case ADD_ADMIN.TEST_REPORT_COUNT_SUCCESS:
            return {
                ...state,
                testReportCountLoading: false,
                testReportCountSuccess: true,
                testReportCountFailure: false,
                testReportCountError: null,
                testReportCount: action.payload,
            };
        case ADD_ADMIN.TEST_REPORT_COUNT_FAILURE:
            return {
                ...state,
                testReportCountLoading: false,
                testReportCountSuccess: false,
                testReportCountFailure: true,
                testReportCountError: action.payload,
            };
        case ADD_ADMIN.CHANGE_ACTIVE_BLOCKS_STATUS_REQUEST:
            return {
                ...state,
                changeActiveBlockStatusLoading: true,
                changeActiveBlockStatusSuccess: false,
                changeActiveBlockStatusFailure: false,
                changeActiveBlockStatusError: null,
                changeActiveBlockStatus: [],
            };
        case ADD_ADMIN.CHANGE_ACTIVE_BLOCKS_STATUS_SUCCESS:
            return {
                ...state,
                changeActiveBlockStatusLoading: false,
                changeActiveBlockStatusSuccess: true,
                changeActiveBlockStatusFailure: false,
                changeActiveBlockStatusError: null,
                changeActiveBlockStatus: action.payload,
            };
        case ADD_ADMIN.CHANGE_ACTIVE_BLOCKS_STATUS_FAILURE:
            return {
                ...state,
                changeActiveBlockStatusLoading: false,
                changeActiveBlockStatusSuccess: false,
                changeActiveBlockStatusFailure: true,
                changeActiveBlockStatusError: action.payload,
            }
        case ADD_ADMIN.SUBMIT_FOR_REVIEW_REQUEST:
            return {
                ...state,
                submitForReviewLoading: true,
                submitForReviewSuccess: false,
                submitForReviewFailure: false,
                submitForReviewError: null,
                submitForReview: [],
            };
        case ADD_ADMIN.SUBMIT_FOR_REVIEW_SUCCESS:
            return {
                ...state,
                submitForReviewLoading: false,
                submitForReviewSuccess: true,
                submitForReviewFailure: false,
                submitForReviewError: null,
                submitForReview: action.payload,
            };
        case ADD_ADMIN.SUBMIT_FOR_REVIEW_FAILURE:
            return {
                ...state,
                submitForReviewLoading: false,
                submitForReviewSuccess: false,
                submitForReviewFailure: true,
                submitForReviewError: action.payload,
            };

        case ADD_ADMIN.TAKE_DECISION_REQUEST:
            return {
                ...state,
                takeDecisionLoading: true,
                takeDecisionSuccess: false,
                takeDecisionFailure: false,
                takeDecisionError: null,
                takeDecision: [],
            };
        case ADD_ADMIN.TAKE_DECISION_SUCCESS:
            return {
                ...state,
                takeDecisionLoading: false,
                takeDecisionSuccess: true,
                takeDecisionFailure: false,
                takeDecisionError: null,
                takeDecision: action.payload,
            };
        case ADD_ADMIN.TAKE_DECISION_FAILURE:
            return {
                ...state,
                takeDecisionLoading: false,
                takeDecisionSuccess: false,
                takeDecisionFailure: true,
                takeDecisionError: action.payload,
            };

        case ADD_ADMIN.REACTIVE_DEVICES_REQUEST:
            return {
                ...state,
                reActivateDeviceLoading: true,
                reActivateDeviceSuccess: false,
                reActivateDeviceFailure: false,
                reActivateDeviceError: null,
                reActivateDevice: [],
            };
        case ADD_ADMIN.REACTIVE_DEVICES_SUCCESS:
            return {
                ...state,
                reActivateDeviceLoading: false,
                reActivateDeviceSuccess: true,
                reActivateDeviceFailure: false,
                reActivateDeviceError: null,
                reActivateDevice: action.payload,
            };
        case ADD_ADMIN.REACTIVE_DEVICES_FAILURE:
            return {
                ...state,
                reActivateDeviceLoading: false,
                reActivateDeviceSuccess: false,
                reActivateDeviceFailure: true,
                reActivateDeviceError: action.payload,
            };

     

        default:
            return state;
    }
};