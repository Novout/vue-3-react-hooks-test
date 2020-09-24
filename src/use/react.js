import { ref, reactive } from "vue";

const useStateObject = entryObj => {
    const obj = reactive(entryObj);
    const set = valueObj => {
        Object.entries(valueObj).forEach(([key, val]) => {
            // @ts-ignore
            obj[key] = val;
        });
    };

    return [obj, set];
}

export const useState = entryValue => {
    if (typeof entryValue === "object") {
        return useStateObject(entryValue);
    }
    const state = ref(entryValue);
    const set = value => {
        state.value = value;
    };

    return [state, set];
};

export const useReact = () => {
    return { useState }
}
