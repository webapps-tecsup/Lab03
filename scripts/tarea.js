function cambiar() {
  const moneda = document.getElementById("monedas").elements["monedas"].value;
  const monto = Number(document.getElementById("monto").value);
  const tasaCambioDolares = 0.26;
  const tasaCambioEuros = 0.26;

  if (moneda == "dolar") {
    alert("Valor a recibir: $" + monto * tasaCambioDolares);
  } else if (moneda == "euro") {
    alert("Valor a recibir: " + monto * tasaCambioEuros + "€");
  }
  console.log(monto);
  console.log(moneda);
}
