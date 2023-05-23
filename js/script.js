function areacirc() {
    let inp = document.getElementById("input-raio-circ")
    let out = document.getElementById("output-raio-circ")
    out.value = (parseFloat(inp.value) * parseFloat(inp.value)) * 3.14
}

function arearetangulo() {
    n
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

    outfar.value = ((celsos.value * 1.8) + 32).toFixed(3) //(celsius * 1.8) + 32
}

function medianota() {
    let inputs = document.getElementsByClassName("input-media");
    let outmedia = document.getElementById("output-media");
    let out = 0;
    for (let nota of inputs) {
        out += parseFloat(nota.value)
    }
    outmedia.value = out / inputs.length
}

function maskara() {
    let ina = document.getElementById("input-a-maskara")
    let inb = document.getElementById("input-b-maskara")
    let inc = document.getElementById("input-c-maskara")

    let outx1 = document.getElementById("output-maskara-1")
    let outx2 = document.getElementById("output-maskara-2")
    a = parseFloat(ina.value)
    b = parseFloat(inb.value)
    c = parseFloat(inc.value)
    delta = (b * b) - 4 * a * c       // delta = b^2 - 4*a*c
    x1 = (-b + Math.sqrt(delta)) / 2 * a                  // x = (-b +- raiz delta) / 2a
    x2 = (-b - Math.sqrt(delta)) / 2 * a
    outx1.value = x1
    outx2.value = x2

}

