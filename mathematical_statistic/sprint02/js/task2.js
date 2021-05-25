import createHtml from "./createHtml.js"
import {get_selective_variance, mean, get_varies_near_from_arr} from "./task1.js"
import PointFisher from "./PointFisher.js"
export default (arr1, arr2) => {
    let VariesNear1 = get_varies_near_from_arr(arr1)
    let VariesNear2 = get_varies_near_from_arr(arr2)
    VariesNear1.set("sample_average", mean(VariesNear1.get("sample"), VariesNear1.get("repeat"), VariesNear1.get("size")));
    VariesNear2.set("sample_average", mean(VariesNear2.get("sample"), VariesNear2.get("repeat"), VariesNear2.get("size")));

    VariesNear1.set("variance", get_selective_variance(
        VariesNear1.get("sample"), 
        VariesNear1.get("repeat"), 
        VariesNear1.get("size"),
        VariesNear1.get("sample_average"))
        )
    VariesNear2.set("variance", get_selective_variance(
        VariesNear2.get("sample"), 
        VariesNear2.get("repeat"), 
        VariesNear2.get("size"),
        VariesNear2.get("sample_average"))
        )
    let fisher = Fisher(VariesNear1, VariesNear2)
    
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