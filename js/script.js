function areacirc() {
    let inp = document.getElementById("input-raio-circ")
    let out = document.getElementById("output-raio-circ")
    out.value = (parseFloat(inp.value)*parseFloat(inp.value)) * 3.14
}

function hipotenusa() {
    let ca = document.getElementById("input-cateto-a")
    let co = document.getElementById("input-cateto-o")
    let out = document.getElementById("output-hipotenusa")

    let num = (parseFloat(ca.value) * parseFloat(ca.value)) + (parseFloat(co.value) * parseFloat(co.value))
    out.value = Math.sqrt(num)
    console.log(out)
}

function realdoll() {
    let real = document.getElementById("input-real")
    let cotadoll = document.getElementById("input-cota-doll")
    let outdolls = document.getElementById("output-dolls")

    outdolls.value = parseFloat(real.value) / parseFloat(cotadoll.value)

}

function celsofarenrait() {
    let celsos = document.getElementById("input-celso")
    let outfar = document.getElementById("output-far-and-hight")

    outfar.value =  ((celsos.value *1.8) + 32).toFixed(3) //(celsius * 1.8) + 32
}

function medianota() {
    let inputs = document.getElementsByClassName("input-media");
    console.log(inputs);
    let outmedia = document.getElementById("output-media");
    let out = 0;
    let i = 0;
    for (valor in inputs) {
        console.log(i,out,outmedia);
        i++;
        out = out + parseFloat(valor.value);
    }
    outmedia.value = out;

}

function maskara() {


}
