import { ref, reactive, watch } from "vue";

const useStateObject = entryObj => {
    const obj = reactive(entryObj);
    const set = valueObj => {
        Object.entries(valueObj).forEach(([key, val]) => {
            obj[key] = val;
        });
    };

    return [obj, set];
}

const useState = entryValue => {
    if (typeof entryValue === "object") {
        return useStateObject(entryValue);
    }
    const state = ref(entryValue);
    const set = value => {
        state.value = value;
    };

    return [state, set];
};

const useEffect = (effectHandler, dependencies) => {
    return watch(dependencies, (changedDependencies, prevDependencies, onCleanUp) => {
        const effectCleaner = effectHandler(changedDependencies, prevDependencies);
        if (typeof effectCleaner === "function") {
            onCleanUp(effectCleaner);
        }
    }, { immediate: true, deep: true });
}

export const useReact = () => {
    return { useState, useEffect }
}
