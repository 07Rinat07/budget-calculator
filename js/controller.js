var controller = (function (budgetCtrl, uiCtrl) {

    var setupEventListeners = function(){
        var DOM = uiCtrl.getDomStrings();
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
    }

    // Функция срабатывающая при отправке формы
    function ctrlAddItem (event){
        event.preventDefault();

        // 1. Получить данные из формы
        var input = uiCtrl.getInput();

        // Проверка что поля не пустые
        if (input.description !== "" && !isNaN(input.value) && input.value > 0 ) {
            // 2. Добавить полученные данные в модель
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            budgetCtrl.test();

            // 3. Добавить "запись" в UI
            uiCtrl.renderListItem(newItem, input.type);
            uiCtrl.clearFields();
            generateTestData.init();

            // 4. Посчитать бюджет
            updateBudget();

        } // endIf




    }

    function updateBudget (){
        // 1. Расчитать бюджет в модели
        budgetCtrl.calculateBudget();

        // 2. Получить расчитанный бюджет из модели
        budgetObj = budgetCtrl.getBudget();
        console.log("updateBudget -> budgetObj", budgetObj)

        // 3. Отобразить бюджет в Шаблоне
        uiCtrl.updateBudget(budgetObj);

    }

    return {
        init: function(){
            console.log("App started!");
            setupEventListeners();
            uiCtrl.updateBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
        }
    }


})(modelController, viewController);

controller.init();
