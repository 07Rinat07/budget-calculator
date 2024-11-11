var viewController = (function() {
    var DOMstrings = {
        inputType: "#input__type",
        inputDescription: "#input__description",
        inputValue: "#input__value",
        form: "#budget-form",
        incomeContainer: "#income__list",
        expenseContainer: "#expenses__list",
        budgetLabel: "#budget-value",
        incomeLabel: "#income-label",
        expensesLabel: "#expense-label",
        expensesPercentLabel: "#expense-percent-label",
        budgetTable: "#budget-table",
    };

    function getInput() {
        return {
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription)
                .value,
            value: document.querySelector(DOMstrings.inputValue).value
        };
    }

    function renderListItem(obj, type) {
        var containerElement, html;

        if (type === "inc") {
            containerElement = DOMstrings.incomeContainer;
            html = `<li id="inc-%id%" class="budget-list__item item item--income">
                        <div class="item__title">%description%</div>
                        <div class="item__right">
                            <div class="item__amount">%value%</div>
                            <button class="item__remove">
                                <img
                                    src="./img/circle-green.svg"
                                    alt="delete"
                                />
                            </button>
                        </div>
                    </li>`;
        } else {
            containerElement = DOMstrings.expenseContainer;
            html = `<li id="exp-%id%" class="budget-list__item item item--expense">
                        <div class="item__title">%description%</div>
                        <div class="item__right">
                            <div class="item__amount">
                                %value%
                                <div class="item__badge">
                                    <div class="item__percent badge badge--dark">
                                        15%
                                    </div>
                                </div>
                            </div>
                            <button class="item__remove">
                                <img src="./img/circle-red.svg" alt="delete" />
                            </button>
                        </div>
                    </li>`;
        }

        newHtml = html.replace("%id%", obj.id);
        newHtml = newHtml.replace("%description%", obj.description);
        newHtml = newHtml.replace("%value%", obj.value);

        document
            .querySelector(containerElement)
            .insertAdjacentHTML("beforeend", newHtml);
    }

    function clearFields() {
        var inputDesc, inputVal;

        inputDesc = document.querySelector(DOMstrings.inputDescription);
        inputVal = document.querySelector(DOMstrings.inputValue);

        inputDesc.value = "";
        inputDesc.focus();

        inputVal.value = "";
    }

    function updateBudget (obj){
        /*
        {
            budget: data.budget,
            totalInc: data.totals.inc,
            totalExp: data.totals.exp,
            percentage: data.percentage
        }
        budgetLabel: "#budget-value",
        incomeLabel: "#income-label",
        expensesLabel: "#expense-label",
        expensesPercentLabel: "#expense-percent-label"
        */

        document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
        document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
        document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;

        if (obj.percentage > 0) {
            document.querySelector(DOMstrings.expensesPercentLabel).textContent = obj.percentage;
        } else {
            document.querySelector(DOMstrings.expensesPercentLabel).textContent = "--";
        }


    }

    function deleteListItem(itemID){
        document.getElementById(itemID).remove();
    }

    function updateItemsPercentages(items){

        items.forEach(function(item){

            // Выводим каждую запись массива во время прохода
            console.log("updateItemsPercentages -> item", item);  // [5, 26]

            // Находим блок с процентами внутри текущей записи
            var el = document.getElementById(`exp-${item[0]}`).querySelector(".item__percent");
            console.log("updateItemsPercentages -> el", el);

            // el.textContent = item[1] + "%";

            // Делаю проверку если значение % = "-1" когда нет доходов
            if ( item[1] >= 0) {
                // Если есть - то показываем блок с %
                el.parentElement.style.display = "block";
                // Меняем контент внутри бейджа с процентами
                el.textContent = item[1] + "%";
            } else {
                // Если нет - то скрываем бейдж с процентами
                el.parentElement.style.display = "none";
            }


        })
    }

    return {
        getInput: getInput,
        renderListItem: renderListItem,
        clearFields: clearFields,
        updateBudget: updateBudget,
        deleteListItem: deleteListItem,
        updateItemsPercentages: updateItemsPercentages,
        getDomStrings: function() {
            return DOMstrings;
        }
    };
})();
