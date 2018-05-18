function create() {
    return IDS.ajax({
        method: "post",
        module: "MDM",
        controller: "MaterialFlow",
        action: "StartCreateFlow",
        data: {
            values: [
                { FieldId: 4, FieldValue: "1" },
                { FieldId: 5, FieldValue: "e" },
                { FieldId: 8, FieldValue: "s" }
            ],
            count: 1
        }
    });
}

function s1(activityId, desc) {
    return IDS.ajax({
        method: "post",
        module: "MDM",
        controller: "MaterialFlow",
        action: "ProcessWorkflow",
        data: {
            flowId: flowId,
            activityId: 3089,
            values: [
                {
                    TableName: "MDM_MaterialMasterRecord",
                    FieldName: "DESCR",
                    Value: desc
                }
            ]
        }
    });
}

function s2(activityId, unit) {
    return IDS.ajax({
        method: "post",
        module: "MDM",
        controller: "MaterialFlow",
        action: "ProcessWorkflow",
        data: {
            flowId: flowId,
            activityId: 3084,
            values: [
                {
                    TableName: "MDM_MaterialMasterRecord",
                    FieldName: "UNIT",
                    Value: unit
                }
            ]
        }
    });
}

function s3(activityId, code, price) {
    return IDS.ajax({
        method: "post",
        module: "MDM",
        controller: "MaterialFlow",
        action: "ProcessWorkflow",
        data: {
            flowId: flowId,
            activityId: 3083,
            values: [
                {
                    TableName: "MDM_MaterialMasterRecord",
                    FieldName: "CODE",
                    Value: code
                },
                {
                    TableName: "MDM_MaterialMasterRecord",
                    FieldName: "PRICE",
                    Value: price
                }
            ]
        }
    });
}
function s4(activityId, code, price) {
    return IDS.ajax({
        method: "post",
        module: "MDM",
        controller: "MaterialFlow",
        action: "ProcessWorkflow",
        data: {
            flowId: flowId,
            activityId: 3086,
            values: [
                {
                    TableName: "MDM_MaterialMasterRecord",
                    FieldName: "CODE",
                    Value: code
                },
                {
                    TableName: "MDM_MaterialMasterRecord",
                    FieldName: "PRICE",
                    Value: price
                }
            ]
        }
    });
}
function s5(activity) {
    return IDS.ajax({
        method: "post",
        module: "MDM",
        controller: "MaterialFlow",
        action: "Finish",
        data: {
            flowId: flowId,
            activityId: 3088
        }
    });
}

var flowId = 1167;
create()
    .done(() => s1(3089, "a compute"))
    .done(() => s2(3084, "tai"))
    .done(() => s3(3083, "CODECODE", 2339))
    .done(() => s4(3086, "CODECODE", 2339))
    .done(() => s5(3088))
    .done(() => console.log("over"));
