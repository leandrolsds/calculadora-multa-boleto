const btn = document.getElementById("calcular_multa");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const valor_divida = document.getElementById("valor_divida").value;
    const data_vencimento = document.getElementById("data_vencimento").value;
    const valor_multa = document.getElementById("valor_multa").value;
    const valor_mora = document.getElementById("valor_mora").value;
    let valor_devido = valor_divida
    let data_recebida = new Date(data_vencimento)
    let data_atual = new Date();
    let diferenca_datas = Math.abs(data_atual - data_recebida);
    let calculo_dias = 1000 * 60 * 60 * 24; //milisegundos * segundos * minutos * horas dia
    let quant_dias = Math.ceil(diferenca_datas / calculo_dias) - 1;

    let calculo_multa = ((valor_multa * valor_divida) / 100).toFixed(2);
    let calculo_mora = (((valor_mora * valor_divida /100)/30)*quant_dias).toFixed(2);
    let totalAPagar = (Number(valor_divida) + Number(calculo_multa) + Number(calculo_mora)).toFixed(2);
 
    if(valor_devido > 0) {
        if(quant_dias > 0) {
            if(valor_multa > 0 || valor_mora > 0) {
            let valor_original = document.getElementById("valor_original");
            valor_original.innerHTML = "Valor Original da divida: R$ "+valor_devido;
            let dias_atraso = document.getElementById("dias_atraso");
            dias_atraso.innerHTML = "Dias em atraso: "+quant_dias;
                let juros_multa = document.getElementById("juros_multa");
                juros_multa.innerHTML = "valor da multa: R$ "+calculo_multa;
                let juros_mora = document.getElementById("juros_mora");
                juros_mora.innerHTML = "valor do juros mora: "+calculo_mora+"% ao dia";
                let valor_total = document.getElementById("valor_total");
                valor_total.innerHTML = "Valor total com multa: R$ "+totalAPagar;
            }else {
                juros_multa.innerHTML = "Informe o valor da multa e/ou mora!";
            }
        }else {
            dias_atraso.innerHTML = "Você está em dia!";
        }
    }else {
        valor_original.innerHTML = "Valor da divida deve ser maior que ZERO!";
    }
});