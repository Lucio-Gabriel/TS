const person = {
    firstName: "Lucio" as const,
    lastName: "Azevedo",
};

const selectColors = (color: "Vermelho" | "Amarelo" | "Azul") => {
    return color;
};

const selectRed = selectColors("Vermelho");
console.log(selectRed);

export default person;
