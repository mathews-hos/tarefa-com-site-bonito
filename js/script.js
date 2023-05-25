function areacirc() {

    let inp = document.getElementById("input-raio-circ")
    let out = document.getElementById("output-area-circ")

    let saida = (parseFloat(inp.value) * parseFloat(inp.value)) * 3.14
    if (inp.value == "") {
        out.value = "preencha os campos"
        return
    }
    if (!(inp.value > 0)) {

        out.value = "insira apenas números reais positivos"
        return

    }

    out.value = saida
}

// console.log(NaN == 0, NaN === 0 ,NaN <0, NaN <=0, NaN >0, NaN >=0)

function arearet() {

    let inp1 = document.getElementById("input-base-ret")
    let inp2 = document.getElementById("input-altura-ret")
    let out = document.getElementById("output-area-ret")

    let saida = (parseFloat(inp1.value) * parseFloat(inp2.value))

    if ((!(saida > 0)) || !((inp1.value * inp2.value * inp2.value) > 0)) {

        out.value = "insira apenas números reais positivos"
        return

    } else {

        out.value = saida

    }

}

function areatri() {
    let inp1 = document.getElementById("input-base-tri")
    let inp2 = document.getElementById("input-altura-tri")
    let out = document.getElementById("output-area-tri")

    let saida = (parseFloat(inp1.value) * parseFloat(inp2.value)) / 2


    if ((!(saida > 0)) || !(inp1.value * inp2.value * inp2.value > 0)) {

        out.value = "insira apenas números reais positivos"
        return

    } else {

        out.value = saida

    }


}

function hipotenusa() {
    let ca = document.getElementById("input-cateto-a")
    let co = document.getElementById("input-cateto-o")
    let out = document.getElementById("output-hipotenusa")
    let n = Math.pow(parseFloat(ca.value), 2) + Math.pow(parseFloat(co.value), 2)
    let saida = Math.sqrt(n)

    if ((!(saida > 0)) || !(ca.value * co.value * co.value > 0)) {

        out.value = "insira apenas números reais positivos"
        return

    } else {

        out.value = saida

    }

    out.value = saida
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

