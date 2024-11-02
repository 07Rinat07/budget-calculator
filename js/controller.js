var controller = (function (budgetCtrl, uiCtrl) {

    var DOM = uiCtrl.getDomStrings();

    // Функция срабатывающая при отправке формы
    function ctrlAddItem (event){
        event.preventDefault();
        console.log("Fired!");

        // 1. Получить данные из формы
        var input = uiCtrl.getInput();
        console.log(input);

        // 2. Добавить полученные данные в модель

        // 3. Добавить "запись" в UI

        // 4. Посчитать бюджет

        // 5. Отобразить бюджет в UI

    }

    document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);

})(modelController, viewController);