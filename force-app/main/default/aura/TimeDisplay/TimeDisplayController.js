({
    init: function(component, event, helper) {
        var action = component.get("c.fetchWorldTime");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var timeData = response.getReturnValue();
                component.set("v.timeData", timeData);
            } else {
                console.error("Error retrieving world time: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})