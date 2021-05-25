import createHtml from "./createHtml.js"
import {get_selective_variance, mean, get_varies_near_from_arr} from "./task1.js"
import PointFisher from "./PointFisher.js"
export default (arr1, arr2) => {
    let VN1 = get_varies_near_from_arr(arr1)
    let VN2 = get_varies_near_from_arr(arr2)
    VN1.set("sample_average", mean(VN1.get("sample"), VN1.get("repeat"), VN1.get("size")));
    VN2.set("sample_average", mean(VN2.get("sample"), VN2.get("repeat"), VN2.get("size")));

    VN1.set("variance", get_selective_variance(
        VN1.get("sample"), 
        VN1.get("repeat"), 
        VN1.get("size"),
        VN1.get("sample_average"))
        )
    VN2.set("variance", get_selective_variance(
        VN2.get("sample"), 
        VN2.get("repeat"), 
        VN2.get("size"),
        VN2.get("sample_average"))
        )
    let fisher = Fisher(VN1, VN2)
    
    createHtml('task2_1', 'span2_1', 'Hypothesis:', 'task2_container', null, '')

    createHtml('task2_1', 'span2_1', 'H0: ' + fisher['HO'], 'task2_container', null, '')

    createHtml('task2_1', 'span2_1', 'Power of freedom 1: ' + fisher['result']['FreedomPowe1'], 'task2_container', null, '')

    createHtml('task2_1', 'span2_1', 'Power of freedom 2: ' + fisher['result']['FreedomPowe2'], 'task2_container', null, '')

    createHtml('task2_1', 'span2_1', 'Variance 1: ' + fisher['result']['variance1Value'], 'task2_container', null, '')

    createHtml('task2_1', 'span2_1', 'Variance 2: ' + fisher['result']['variance2Value'], 'task2_container', null, '')

    createHtml('task2_1', 'span2_1', 'Observed value F: ' + fisher['result']['observedValue'], 'task2_container', null, '')

    createHtml('task2_1', 'span2_1', 'Critical point f: ' + fisher['result']['PointValue'], 'task2_container', null, '')

}

function Fisher(varies1, varies2) {
    const variance1Value = varies1.get("variance")
    const variance2Value = varies2.get("variance")
    let observedValue = 0
    let FreedomPowe1 = 0
    let FreedomPowe2 = 0

    if(varies1.get("variance") > varies2.get("variance")) {
        observedValue = varies1.get("variance") / varies2.get("variance")
        FreedomPowe1 = varies1.get("repeat").length - 1
        FreedomPowe2 = varies2.get("repeat").length - 1
    }
    else {
        observedValue = varies2.get("variance") / varies2.get("variance")
        FreedomPowe1 = varies2.get("repeat").length - 1
        FreedomPowe2 = varies1.get("repeat").length - 1
    }

    observedValue = Math.abs(observedValue)

    const PointValue = PointFisher(FreedomPowe1, FreedomPowe2)

    return {
        HO: observedValue < PointValue,
        result: {
            observedValue,
            PointValue,
            variance1Value,
            variance2Value,
            FreedomPowe1,
            FreedomPowe2
        }
    }

}