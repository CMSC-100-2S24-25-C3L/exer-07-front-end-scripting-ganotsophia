document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("foodForm");
    const foodList = document.getElementById("foodList");
    let foodArray = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("foodName").value.trim();
        const desc = document.getElementById("foodDesc").value.trim();
        const img = document.getElementById("foodImg").value.trim();
        const rank = parseInt(document.getElementById("foodRank").value.trim(), 10);


        const newFood = { name, desc, img, rank };
        foodArray.push(newFood);

        foodArray.sort((a, b) => a.rank - b.rank);
        renderFoodList();
        form.reset();
    });

    function renderFoodList() {
        foodList.innerHTML = "";

        for (let a = 0; a < foodArray.length; a++) {
            const food = foodArray[a];
            const card = document.createElement("div");
            card.innerHTML = `
                <h3>${food.name} (Rank: ${food.rank})</h3>
                <p>${food.desc}</p>
                <img src="${food.img}" alt="${food.name}" width="100">
                <button onclick="deleteFood(${a})">Delete</button>
                <hr>
            `;
            foodList.appendChild(card);
        }
    }

    window.deleteFood = (index) => {
        foodArray.splice(index, 1);
        renderFoodList();
    };
});
