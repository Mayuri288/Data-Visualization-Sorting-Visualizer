import { colorTransition, swapSVG, colors, resetColors } from '../App'

function merge(array, low, mid, high, t, state, setSortedArray, canvas) {
    let left = array.slice(low, mid + 1);
    let right = array.slice(mid + 1, high + 1);
    let i = 0, j = 0, k = low;
    let rect_mod = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array[k] = left[i];
            t = swapSVG(array, k, low+i, t, state.dur, canvas);
            t = colorTransition(array[k], t, state.dur, colors.lesser);
            rect_mod.push(array[k]);
            i++;
        } else {
            array[k] = right[j];
            t = swapSVG(array, k, mid+j+1, t, state.dur, canvas);
            t = colorTransition(array[k], t, state.dur, colors.lesser);
            rect_mod.push(array[k]);
            j++;
        }
        k++;
    }

    while (i < left.length) {
        array[k] = left[i];
        t = swapSVG(array, k, low+i, t, state.dur, canvas);
        t = colorTransition(array[k], t, state.dur, colors.lesser);
        rect_mod.push(array[k]);
        i++;
        k++;
    }

    while (j < right.length) {
        array[k] = right[j];
        t = swapSVG(array, k, mid+j+1, t, state.dur, canvas);
        t = colorTransition(array[k], t, state.dur, colors.lesser);
        rect_mod.push(array[k]);
        j++;
        k++;
    }

    rect_mod.forEach((d) => {
        colorTransition(d, t, state.dur, colors.rec);
    })
}

function mergeSort(state, sortedArray, setSortedArray, setButtonState, canvas, first_call=false, low, high, t) {
    if (first_call) {
        resetColors(sortedArray);
        setButtonState(1);
    }

    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        t = mergeSort(state, sortedArray, setSortedArray, setButtonState, canvas, false, low, mid, t);
        t = mergeSort(state, sortedArray, setSortedArray, setButtonState, canvas, false, mid + 1, high, t);
        merge(sortedArray, low, mid, high, t, state, setSortedArray, canvas);
    }

    if (first_call) {
        setTimeout(() => {
            setButtonState(0);
        }, t)
    }

    return t;
}

export default mergeSort;
