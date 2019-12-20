import {NativeModules, Platform} from 'react-native';

const LAYOUT_PARAMS = {
    SOFT_INPUT_ADJUST_NOTHING: 48,
    SOFT_INPUT_ADJUST_PAN: 32,
    SOFT_INPUT_ADJUST_RESIZE: 16,
    SOFT_INPUT_ADJUST_UNSPECIFIED: 0,
};

const getSoftInputMode = () => Platform.select({
    android: NativeModules.RNSoftInputMode.getSoftInputMode,
    ios: Promise.resolve,
})();

const setSoftInputMode = (mode) => Platform.select({
    android: NativeModules.RNSoftInputMode.setSoftInputMode,
    ios: Promise.resolve,
})(mode);

export default {
    LAYOUT_PARAMS,
    getSoftInputMode,
    setSoftInputMode,
};
