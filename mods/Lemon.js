(function() {
    const lemon = {
        name: "Lemon",
        color: "yellow",
        size: "medium",
        properties: {
            edible: true,
            sour: true,
            juice: true,
            vitaminC: true,
            uses: ["cooking", "drinks", "cleaning"]
        }
    };

    function addLemon() {
        const gameItems = document.getElementById('game-items');
        if (!gameItems) {
            console.error('Game items container not found');
            return;
        }

        const lemonElement = document.createElement('div');
        lemonElement.className = 'item lemon';
        lemonElement.innerText = `${lemon.name} - Size: ${lemon.size}`;
        lemonElement.style.backgroundColor = lemon.color;

        // Improved tooltip formatting
        const propertiesInfo = Object.entries(lemon.properties)
            .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
            .join(', ');

        lemonElement.title = `Properties: ${propertiesInfo}`;
        gameItems.appendChild(lemonElement);
        console.log(`${lemon.name} added to the game!`);
    }

    function removeLemon() {
        const lemonElements = document.querySelectorAll('.item.lemon');
        if (lemonElements.length === 0) {
            console.warn('No lemon items to remove.');
            return;
        }
        lemonElements.forEach(element => element.remove());
        console.log('All lemon items removed from the game.');
    }

    function updateLemonProperties(newProperties) {
        if (typeof newProperties !== 'object' || newProperties === null) {
            console.error('Invalid properties. Must be a non-null object.');
            return;
        }

        Object.entries(newProperties).forEach(([key, value]) => {
            if (key in lemon.properties) {
                lemon.properties[key] = value;
            } else {
                console.warn(`Property "${key}" does not exist on lemon.`);
            }
        });
        console.log('Lemon properties updated:', lemon.properties);
    }

    window.addEventListener('load', function() {
        addLemon();

        // Example of updating properties
        updateLemonProperties({ organic: true });
    });
})();
