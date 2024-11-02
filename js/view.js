var viewController = (function () {

    var DOMstrings = {
        inputType: "#input__type",
        inputDescription: "#input__description",
        inputValue: "#input__value",
        form: "#budget-form"
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },
        getDomStrings: function(){
            return DOMstrings
        }
    }

})();