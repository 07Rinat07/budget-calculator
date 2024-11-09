var controller = (function (budgetCtrl, uiCtrl) {

    var setupEventListeners = function(){
        var DOM = uiCtrl.getDomStrings();
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
    }

    // Функция срабатывающая при отправке формы
    function ctrlAddItem (event){
        event.preventDefault();
        console.log("Fired!");

        // 1. Получить данные из формы
        var input = uiCtrl.getInput();
        console.log(input);

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

            // 5. Отобразить бюджет в UI

        } // endIf



    }

    return {
        init: function(){
            console.log("App started!");
            setupEventListeners();
        }
    }


})(modelController, viewController);

controller.init();
