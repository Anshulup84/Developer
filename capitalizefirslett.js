function capialfrstname(name) {
    const firslett = name[0];
    const capitlfistlett = firslett.toUpperCase();
    const modifiedname = firslett === capitlfistlett ? name : capitlfistlett + name.slice(1);
    return modifiedname;
}

const inputname = prompt("Ener your name:");
const modifyname = capialfrstname(inputname);

console.log(modifyname);
alert(modifyname)