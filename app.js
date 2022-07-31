// Storage controller

// Item controller
const ItemCtrl = (function(id, name, calories) {
    // Item constructor
    const Item = function() {
        this.id = id;
        this.name = name;
        this.calories = calories;     
    }
    // Data structure
    const data = {
        items: [
            {id: 0, name: 'steak Dinner', calories
        : 1200},
        {id: 0, name: 'Cookie', calories
        : 400}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public methods
    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        }
    }

})();

// UI controller
const UICtrl = (function() {
    const UISelector = {
        itemList: '#item-list'
    }

    // Public methods
    return {
        populateItemList: function(items) {
            let html = '';

            items.forEach(function(item) {
                html += ` 
                <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
                </li>
                `
            })

            document.querySelector(UISelector.itemList).innerHTML = html;
        }
    }

})();

// App controller
const App = (function(ItemCtrl, UICtrl) {

    // Public methods
    return {
        init: function() {
            // fetch item from data structure
            const items = ItemCtrl.getItems();

            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);

App.init();