function startQuiz() {
    let response = prompt("Você costuma deixar a torneira aberta enquanto escova os dentes? (sim/não)");
    let resultDiv = document.getElementById("quiz-result");

    if (response.toLowerCase() === "sim") {
        resultDiv.innerHTML = "<p>Tente fechar a torneira enquanto escova os dentes! Você pode economizar até 12 litros de água por dia.</p>";
    } else {
        resultDiv.innerHTML = "<p>Parabéns! Fechar a torneira ajuda a economizar muita água!</p>";
    }
}

// Calculadora de Consumo de Água
function calculateWater() {
    let shower = document.getElementById("shower").value;
    let dishes = document.getElementById("dishes").value;

    // Estimativa de litros usados por minuto
    let showerWater = shower * 9; // Média de 9 litros por minuto no banho
    let dishesWater = dishes * 12; // Média de 12 litros por minuto lavando pratos

    let totalWater = showerWater + dishesWater;
    let resultDiv = document.getElementById("calc-result");

    resultDiv.innerHTML = `<p>Você utiliza aproximadamente ${totalWater} litros de água por dia.</p>`;
}
