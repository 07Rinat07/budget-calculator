var modelController = (function() {

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    function addItem (type, desc, val){
        var newItem, ID;

        // Генерируем ID
        if (data.allItems[type].length > 0 ) {
            var lastIndex = data.allItems[type].length - 1;
            ID = data.allItems[type][lastIndex].id + 1;
        } else {
            ID = 0;
        }

        // В зависимости от типа записи используем соответствующий конструктор и создаем объект
        if ( type === "inc") {
            newItem = new Income(ID, desc, val);
        } else if ( type === "exp" ) {
            newItem = new Expense(ID, desc, val);
        }

        // Записываем "запись" / объект в нашу структуру данных
        data.allItems[type].push(newItem);

        // Возвращаем новый объект
        return newItem;

    }

    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    }var modelController = (function() {

        var Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    
        var Expense = function (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    
        function addItem (type, desc, val){
            var newItem, ID;
    
            // Генерируем ID
            if (data.allItems[type].length > 0 ) {
                var lastIndex = data.allItems[type].length - 1;
                ID = data.allItems[type][lastIndex].id + 1;
            } else {
                ID = 0;
            }
    
            // В зависимости от типа записи используем соответствующий конструктор и создаем объект
            if ( type === "inc") {
                newItem = new Income(ID, desc, parseFloat(val));
            } else if ( type === "exp" ) {
                newItem = new Expense(ID, desc, parseFloat(val));
            }
    
            // Записываем "запись" / объект в нашу структуру данных
            data.allItems[type].push(newItem);
    
            // Возвращаем новый объект
            return newItem;
    
        }
    
        function calculateTotalSum(type){
            var sum = 0;
    
            data.allItems[type].forEach(function(item){
                sum = sum + item.value;
            });
    
            return sum;
    
        }
    
        function calculateBudget(){
            // Посчитать все Доходы
            data.totals.inc = calculateTotalSum("inc");
    
            // Посчитать все Расходы
            data.totals.exp = calculateTotalSum("exp");
    
            // Посчитать общий Бюджет
            data.budget = data.totals.inc - data.totals.exp;
    
            // Посчитать % для расходов
            if (data.totals.inc > 0 ) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
    
        }
    
        var data = {
            allItems: {
                inc: [],
                exp: []
            },
            totals: {
                inc: 0,
                exp: 0
            },
            budget: 0,
            percentage: -1
        }
    
        return {
            addItem: addItem,
            calculateBudget: calculateBudget,
            test: function(){
                console.log(data);
            }
        }
    
    })();

    return {
        addItem: addItem,
        test: function(){
            console.log(data);
        }
    }

})();