import createHtml from "./createHtml.js"
import {get_selective_variance, mean, get_varies_near_from_arr} from "./task1.js"
import CriticalPointT from "./CriticalPointT.js"
import laplaceIntegralReversed from "./laplaceIntegralReversed.js"

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

    let middle = Middle(VariesNear1, VariesNear2)
    
    createHtml('task3_1', 'span2_1', 'Hypothesis:', 'task3_container', null, '')

    createHtml('task3_1', 'span2_1', 'H0 (T-test): ' + middle['HO']['T'], 'task3_container', null, '')

    createHtml('task3_1', 'span2_1', 'H0 (Z-test): ' + middle['HO']['Z'], 'task3_container', null, '')

    createHtml('task3_1', 'span2_1', 'Observed value |T|: ' + middle['result']['ValueT'], 'task3_container', null, '')

    createHtml('task3_1', 'span2_1', 'Observed value |Z|: ' + middle['result']['ValueZ'], 'task3_container', null, '')

    createHtml('task3_1', 'span2_1', 'Critical point T: ' + middle['result']['criticalPointT'], 'task3_container', null, '')

    createHtml('task3_1', 'span2_1', 'Critical point Z: ' + middle['result']['criticalPoinZ'], 'task3_container', null, '')

}

function Middle(varies1, varies2) {
    const mean1 = varies1.get("sample_average")
    const mean2 = varies2.get("sample_average")

    const variance1 = varies1.get("variance")
    const variance2 = varies2.get("variance")

    const n1 = varies1.get("repeat").length
    const n2 = varies2.get("repeat").length

    const FreedomPower = (n1 +n2) - 2

    const ValueT = Math.abs(mean1 - mean2) / Math.sqrt((n1 * variance1 + n2 * variance2) / FreedomPower * (1 / n1 + 1 / n2))
    const criticalPointT = CriticalPointT(FreedomPower)

    const ValueZ = Math.abs(mean1 - mean2) / Math.sqrt(variance1 / n1 + variance2 / n2)
    const criticalPoinZ = laplaceIntegralReversed((1 - 0.05) / 2)

    return {
        HO: {
            T: ValueT < criticalPointT,
            Z: ValueZ < criticalPoinZ
        },
        result: {
            ValueT,
            criticalPointT,
            ValueZ,
            criticalPoinZ
        }
    }
}