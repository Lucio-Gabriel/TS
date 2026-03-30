enum Colors {
    RED,
    GREEN,
    BLUE,
}

const selectColor = (cor: Colors): void => {
    console.log(Colors[cor]);
};

selectColor(Colors.RED);
