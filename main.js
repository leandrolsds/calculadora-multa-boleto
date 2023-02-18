function calcularMulta() {
    const valor_divida = document.getElementById("valor_divida").value;
    const data_vencimento = document.getElementById("data_vencimento").value;
    const valor_multa = document.getElementById("valor_multa").value;
    const valor_mora = document.getElementById("valor_mora").value;
    let valor_devido = valor_divida
    let data_recebida = new Date(data_vencimento)
    let dias_atraso_recebidos = data_recebida.getDate()
    let data_atual = new Date();
    let diferenca_datas = Math.abs(data_atual - data_recebida);
    let calculo_dias = 1000 * 60 * 60 * 24; //milisegundos * segundos * minutos * horas dia
    let quant_dias = Math.ceil(diferenca_datas / calculo_dias);

    let calculo_multa = ((valor_multa * valor_divida) / 100);
    let calculo_mora = (((valor_mora * valor_divida /100)/30)*quant_dias).toFixed(2);
    let totalAPagar = Number(valor_divida) + Number(calculo_multa) + Number(calculo_mora);

    let valor_original = document.getElementById("valor_original");
    valor_original.innerHTML = "Valor Original da divida: "+valor_devido;
    let dias_atraso = document.getElementById("dias_atraso");
    dias_atraso.innerHTML = "Dias em atraso: "+dias_atraso_recebidos;
    let juros_multa = document.getElementById("juros_multa");
    juros_multa.innerHTML = "valor da multa: R$ "+calculo_multa;
    let juros_mora = document.getElementById("juros_mora");
    juros_mora.innerHTML = "valor do juros mora: "+calculo_mora+"% ao dia";
    let valor_total = document.getElementById("valor_total");
    valor_total.innerHTML = "Valor total com multa: R$ "+totalAPagar;
}