function noReturn(...args: string[]): void {
    console.log(args.join(" "));
}

const person = {
    firstName: "Bruce",
    lastName: "Wayne",

    exibleName(): void {
        console.log(this.firstName + " " + this.lastName);
    },
};

person.exibleName();
noReturn("Lucio", "Azevedo");

export { person };
