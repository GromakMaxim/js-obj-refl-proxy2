const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
        }
    ]
}

function getFields(obj) {
    const result = [];
    obj.special.forEach((elem) => {
        const {
            id, name, icon, description = 'Описание недоступно',
        } = elem;
        result.push({
            id, name, icon, description,
        });
    });
    return result;
}

let o = getFields(character);
console.log(o)