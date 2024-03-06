

/************** Controle USO*********************/ 

function controlePainelUso() {
    var painelUso = document.getElementById("painelUso");
    var painelUso2 = document.getElementById("painelUso2");
    var painelLocadora = document.getElementById("painel_locadora");
    var painelLocadora2 = document.getElementById("painel_locadora2");
    var escolhaPainelUso = document.getElementById("escolhaPainelUso");
    var Now_State = window.parent.ECM.workflowView.sequence

    painelUso.style.display = "none";
    painelUso2.style.display = "none";
    painelLocadora.style.display = "none";
    painelLocadora2.style.display = "none";

    escolhaPainelUso.addEventListener("change", function () {
        var escolha1 = escolhaPainelUso.value;
        var escolhaField2 = document.getElementById("escolhaField2");
        escolhaField2.value = escolha1;

        painelUso.style.display = "none";
        painelUso2.style.display = "none";
        painelLocadora.style.display = "none";
        painelLocadora2.style.display = "none";
        
        if (Now_State == 14 && escolha1 === "painelUso") {
            painelUso.style.display = "block";
            painelLocadora.style.display = "none";
        } else if (Now_State == 14 && escolha1 === "painelUso2") {
            painelUso2.style.display = "block";
            painelLocadora2.style.display = "none";
        }
    });
    
    escolhaPainelUso.addEventListener("load", function() {
    	 if (escolha1 === "painelUso") {
             painelUso.style.display = "block";
             painelLocadora.style.display = "block";
         } else if (escolha1 === "painelUso2") {
             painelUso2.style.display = "block";
             painelLocadora2.style.display = "block";
         }
    });
}


function mostraPaineisUso() { 
    var Now_State = window.parent.ECM.workflowView.sequence
    var value = escolhaPainelUsoVariavel = document.getElementById("escolhaPainelUso").value;
    var text = escolhaPainelUsoVariavel = document.getElementById("escolhaPainelUso").innerText;
    //value = modo edição
    //text = modo de visualização
    
    if (value == "painelUso" || text == "Alugar Carro ou Pick-up") {
        document.getElementById("painelUso").style.display = "block";
        document.getElementById("painel_locadora").style.display = "block";
    } else {
        document.getElementById("painelUso").style.display = "none";
        document.getElementById("painel_locadora").style.display = "none";
    }
    if (value == "painelUso2" || text == "Alugar Van, Ônibus ou Micro Ônibus") {
        document.getElementById("painelUso2").style.display = "block";
        document.getElementById("painel_locadora2").style.display = "block";
    } else {
        document.getElementById("painelUso2").style.display = "none";
        document.getElementById("painel_locadora2").style.display = "none";
    }
    if(Now_State == 42 || Now_State == 44 || Now_State == 24 || Now_State == 54  || Now_State == 66) {
		document.getElementById("painelUso").style.display = "none";
		document.getElementById("painelUso2").style.display = "none";
	}
    if(Now_State == 24 || Now_State == 66) {
		document.getElementById("painel_locadora").style.display = "none";
		document.getElementById("painel_locadora2").style.display = "none";
	}
}


window.addEventListener("load", function() {
   controlePainelUso();
   mostraPaineisUso();
});



/************** Mostra o lugar e a diária após solicitação*********************/

function mostraLugarDiaria() {
    var carroPesadoVariavel = document.getElementById("carropesado").value;

    if (carroPesadoVariavel === "van") {
        document.getElementById('vanCampos').style.display = 'block';
    } else {
        document.getElementById('vanCampos').style.display = 'none';
    }

    if (carroPesadoVariavel === "micro") {
        document.getElementById('microCampos').style.display = 'block';
    } else {
        document.getElementById('microCampos').style.display = 'none';
    }

    if (carroPesadoVariavel === "onibusL") {
        document.getElementById('onibusLCampos').style.display = 'block';
    } else {
        document.getElementById('onibusLCampos').style.display = 'none';
    }

    if (carroPesadoVariavel === "onibusSL") {
        document.getElementById('onibusSLCampos').style.display = 'block';
    } else {
        document.getElementById('onibusSLCampos').style.display = 'none';
    }
}

window.addEventListener("change", function() {
    mostraLugarDiaria();
});

window.addEventListener("load", function() {
    mostraLugarDiaria();
});


/************** Controle dos paineis do usuário *********************/


function painelUsuario() {
    var painelViagem = document.getElementById("painelViagem");
    var painelViagem2 = document.getElementById("painelViagem2");
    var escolhaPainel = document.getElementById("escolhaPainel");

    painelViagem.style.display = "none";
    painelViagem2.style.display = "none";

    escolhaPainel.addEventListener("change", function () {
        var escolha = escolhaPainel.value;

        // Armazenar a escolha do usuário em um campo oculto
        var escolhaField = document.getElementById("escolhaField");
        escolhaField.value = escolha;

        // Ocultar todos os painéis
        painelViagem.style.display = "none";
        painelViagem2.style.display = "none";

        // Mostrar o painel selecionado
        if (escolha === "painelViagem") {
            painelViagem.style.display = "block";
        } else if (escolha === "painelViagem2") {
            painelViagem2.style.display = "block";
        }
    });   
    
}

function mostraPaineis() {
	escolhaPainelVariavel = document.getElementById("escolhaPainel").value;
	var Now_State = window.parent.ECM.workflowView.sequence 
	
	if(escolhaPainelVariavel === "painelViagem") {
		document.getElementById("painelViagem").style.display = "block";
	} else {
		document.getElementById("painelViagem").style.display = "none";
	}
	
	if(escolhaPainelVariavel ==="painelViagem2") {
		document.getElementById("painelViagem2").style.display = "block";
	} else {
		document.getElementById("painelViagem2").style.display = "none";
	}
	if(Now_State == 16 || Now_State == 36 || Now_State == 42 || Now_State == 44 || Now_State == 24 || Now_State == 23 || Now_State == 54) {
		document.getElementById("painelViagem").style.display = "none";
		document.getElementById("painelViagem2").style.display = "none";
	}
}

window.addEventListener("load", function() {
    painelUsuario();
    mostraPaineis();
});



/************** VAN/BUS/MICRO LUGAR EQUIVALENTE A DIARIA*********************/

function atualizarDiariaPorLugar(selectElement, diariaElement, datasetName) {
    selectElement.addEventListener("change", function () {
        var selectedLugar = selectElement.value;
        var dataset = DatasetFactory.getDataset(datasetName, null, null, null);
        console.log(dataset);
        for (var i = 0; i < dataset.values.length; i++) {
            var row = dataset.values[i];
            if (row.Lugar === selectedLugar) {
                diariaElement.value = row.Diaria;
                break;
            }
        }
    });
}

var lugarMicroSelect = document.getElementById("lugarMicro");
var tipoDiariaMicroInput = document.getElementById("tipoDiariaMicro");
atualizarDiariaPorLugar(lugarMicroSelect, tipoDiariaMicroInput, "dsMicroAluguel");

var lugarOnibusLSelect = document.getElementById("lugarOnibusL");
var tipoDiariaOnibusLInput = document.getElementById("tipoDiariaOnibusL");
atualizarDiariaPorLugar(lugarOnibusLSelect, tipoDiariaOnibusLInput, "dsOnibusLAluguel");

var lugarOnibusSLSelect = document.getElementById("lugarOnibusSL");
var tipoDiariaOnibusSLInput = document.getElementById("tipoDiariaOnibusSL");
atualizarDiariaPorLugar(lugarOnibusSLSelect, tipoDiariaOnibusSLInput, "dsOnibusSLAluguel");

var lugarVanSelect = document.getElementById("lugarVan");
var tipoDiariaVanInput = document.getElementById("tipoDiariaVan");
atualizarDiariaPorLugar(lugarVanSelect, tipoDiariaVanInput, "dsVanAluguel");

/*********** VAN/BUS/MICRO FUNÇÃO CALCULAR A DIÁRIA******************/

function calcularDiferencaDataHora(dataSaida, dataRetorno) {
    const dataSaidaObj = new Date(dataSaida);
    const dataRetornoObj = new Date(dataRetorno);

    const diferencaEmMilissegundos = dataRetornoObj - dataSaidaObj;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    return diferencaEmDias;
}

function calcularValorTotal2() {
    const dataSaida = document.getElementById("dat_DataSaida2").value;
    const dataRetorno = document.getElementById("dat_DataRetorno2").value;
    const diferencaEmDias = calcularDiferencaDataHora(dataSaida, dataRetorno);

    const tipoVeiculoSelect = document.getElementById("carropesado").value;

    let diaria = 0;

    switch (tipoVeiculoSelect) {
        case "van":
            diaria = parseFloat(document.getElementById("tipoDiariaVan").value);
            break;
        case "micro":
            diaria = parseFloat(document.getElementById("tipoDiariaMicro").value);
            break;
        case "onibusL":
            diaria = parseFloat(document.getElementById("tipoDiariaOnibusL").value);
            break;
        case "onibusSL":
            diaria = parseFloat(document.getElementById("tipoDiariaOnibusSL").value);
            break;
        default:
            diaria = 0;
    }

    if (!isNaN(diaria) && diferencaEmDias >= 0) {
        const valorTotal = diferencaEmDias * diaria;
        document.getElementById("resultado_vmo").value = valorTotal;
        return valorTotal;
    } else {
        return 0;
    }
}

function atualizarResultado2() {
    const diferenca = calcularDiferencaDataHora(
        document.getElementById("dat_DataSaida2").value,
        document.getElementById("dat_DataRetorno2").value
    );
    const valorTotal = calcularValorTotal2();
    const resultadoDiv = document.getElementById("resultado2");
    resultadoDiv.innerHTML = `Diárias: ${diferenca} dias | Valor Total do Aluguel: R$ ${valorTotal.toFixed(3)}`;

}

document.getElementById("dat_DataSaida2").addEventListener("change", atualizarResultado2);
document.getElementById("dat_DataRetorno2").addEventListener("change", atualizarResultado2);


window.addEventListener("load", function() {
    atualizarResultado2();
});



/***********Controla campos alugado/proprio após o inicio da solicitação ******************/

function aprov() {
    var carroOpcaoVariavel = document.getElementById("carroOpcao").value;
    if(carroOpcaoVariavel === "proprio") {
        document.getElementById("camposCarroProprio").style.display = "block";
        document.getElementById("camposCarroProprio2").style.display = "block";
    } else {
        document.getElementById("camposCarroProprio").style.display = "none";
        document.getElementById("camposCarroProprio2").style.display = "none";
    }
    
    if(carroOpcaoVariavel === "alugado") {
        document.getElementById("camposAluguelVeiculo").style.display = "block";
        document.getElementById("camposAluguelVeiculo2").style.display = "block";
    } else {
        document.getElementById("camposAluguelVeiculo").style.display = "none";
        document.getElementById("camposAluguelVeiculo2").style.display = "none";
    }
}

window.addEventListener("load", function() {
    aprov();
});



/***********CARRO PRÓPRIO OU ALUGADO ******************/

function controlarCampos() {
    var select = document.getElementById("carroOpcao");
    var tipoD1 = document.getElementById("camposCarroProprio");
    var tipoD2 = document.getElementById("camposCarroProprio2");
    var tipoZ = document.getElementById("camposAluguelVeiculo");
    var tipoX = document.getElementById("camposAluguelVeiculo2");
    var tipoRESULTADO = document.getElementById("resultado");
    
    

    var selectedOpcao = select.value;

    if (selectedOpcao === "alugado") {
        tipoD1.style.display = "none";
        tipoD2.style.display = "none"; 
        tipoZ.style.display = "block";
        tipoX.style.display = "block";
        tipoRESULTADO.style.display = "block";
        

    } else if (selectedOpcao === "proprio") {
    	tipoD1.style.display = "block";
    	tipoD2.style.display = "block";
    	tipoZ.style.display = "none";
        tipoX.style.display = "none";
        tipoRESULTADO.style.display = "none";

        var selectedCarro = tipoCarro.value;
        var dataset = DatasetFactory.getDataset("dsCarroSede", null, null, null);

        for (var i = 0; i < dataset.values.length; i++) {
            var row = dataset.values[i];
            if (row.Carro === selectedCarro) {
                tipoPlaca.value = row.Placa;
                tipoGrupo.value = row.GrupoPertencente;
                break;
            }
        }
    } else {
    	tipoD1.style.display = "none";
    	tipoD2.style.display = "none";
        tipoZ.style.display = "none";
        tipoX.style.display = "none";
        tipoRESULTADO.style.display = "none";
    
    }
}

var select = document.getElementById("carroOpcao");
select.addEventListener("change", controlarCampos);


controlarCampos();


var tipoCarroSelect = document.getElementById("tipoCarro");
var tipoPlacaInput = document.getElementById("tipoPlaca");
var tipoGrupoInput = document.getElementById("tipoGrupo");

tipoCarroSelect.addEventListener("change", function () {
    var selectedCarro = tipoCarroSelect.value;
    var dataset = DatasetFactory.getDataset("dsCarroSede", null, null, null);

    for (var i = 0; i < dataset.values.length; i++) {
        var row = dataset.values[i];
        if (row.Carro === selectedCarro) {
            tipoPlacaInput.value = row.Placa;
            tipoGrupoInput.value = row.GrupoPertencente;
            break;
        }
    }
});
	
/***********CARRO ALUGADO FUNÇÃO CALCULAR A DIÁRIA******************/

var carroAlugadoSelect = document.getElementById("carroAlugado");
var qtDiaInput = document.getElementById("qtDia");

carroAlugadoSelect.addEventListener("change", function () {
    var selectedCarro = carroAlugadoSelect.value;
    var dataset = DatasetFactory.getDataset("dsAluguel", null, null, null);

    for (var i = 0; i < dataset.values.length; i++) {
        var row = dataset.values[i];
        if (row.Veiculo === selectedCarro) {
            qtDiaInput.value = row.Diaria; 
            break;
        }
    }
});

function calcularDiferenca() {
    const dataSaida = new Date(document.getElementById("dat_DataSaida").value);
    const dataRetorno = new Date(document.getElementById("dat_DataRetorno").value);

    const diferencaEmMilissegundos = dataRetorno - dataSaida;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    const diferencaEmHoras = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return {
        dias: diferencaEmDias,
        horas: diferencaEmHoras,
    };
}

function calcularValorTotal() {
    const diferencaEmDias = calcularDiferenca();
    const diferencaEmHoras = diferencaEmDias.horas; 
    const taxaDiaria = parseFloat(qtDiaInput.value); 
    
    if (!isNaN(taxaDiaria)) {
        const diasComHoraExtra = diferencaEmDias.dias + (diferencaEmHoras > 0 ? 1 : 0); 
        const valorTotal = diasComHoraExtra * taxaDiaria;
        document.getElementById("resultado_carro").value = valorTotal;
        return valorTotal;
    } else {
        return 0; 
    }
}

function atualizarResultado() {
    const diferenca = calcularDiferenca();
    const valorTotal = calcularValorTotal();
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Diárias: ${diferenca.dias} dias e ${diferenca.horas} horas | Valor Total do Aluguel: R$ ${valorTotal.toFixed(2)}`;
}

document.getElementById("dat_DataSaida").addEventListener("change", atualizarResultado);
document.getElementById("dat_DataRetorno").addEventListener("change", atualizarResultado);

atualizarResultado();


/***********GASOLINA******************/

function gasolina(i) {
    var v = i.value.replace(/\D/g,'');
    v = (v/100).toFixed(2);
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    i.value = v + ' L';
}



 /***********COR DAS OPÇÕES DE AVALIAÇÃO****************/

/*document.getElementById('avalSelect').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var color = selectedOption.getAttribute('data-color');
       
    this.style.backgroundColor = color;
});*/


/***********ESCOLHA DO SUPERIOR******************/

function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("cmb_NomeSolicitante").value;


    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            var und = ds_mat.values[i]['groupId'];

          

            for (var j = 0; j < ds_und.values.length; j++) {
                if (und == ds_und.values[j]['AntigaSigla']) {
                    // console.log(ds_und.values[j]['Sigla'])
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    // console.log(document.getElementById("cmb_GerenteSolicitante").value)
                    document.getElementById("cmb_UnidadeSolicitante").value = ds_und.values[j]['NomeUnidade']
                    document.getElementById("numSuperior").value = ds_und.values[j]['Matricula']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("numSuperior").value = ds_und.values[j]['MatSuperior']
                    }

                    dir = ds_und.values[j]["MatSuperior"]
                    console.log("diretoria: "+ dir)
                    if (dir == "00000428") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DISUP'
                    } else if (dir == "80000318") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
                    } else if (dir == "00000656") { document.getElementById("hdn_diretoria").value = 'Pool:Role:DITEC' }
                }
            }
        }
    }
}
window.addEventListener("load", unidade);


/*********** CARTAO CORINGA******************/

function formatCartao(input) {
    const value = input.value.replace(/\D/g, '');

    if (value.length >= 4) {
        input.value = 'COR-' + value.slice(0, 4);
    } else {
        input.value = 'COR-' + value;
    }
}


/*********** Data******************/


function pad(valor) {
    return valor.toString().padStart(2, '0');
} 

 function formata(data) {
    return data.getFullYear() + '-' + pad(data.getMonth() + 1) + '-' + pad(data.getDate())
           + 'T' + pad(data.getHours()) + ':' + pad(data.getMinutes());
}

var hoje = new Date();

var dataMinima = new Date(hoje);

dataMinima.setHours(0, 0, 0, 0);

var dataMinimaPosterior = new Date(dataMinima);
dataMinimaPosterior.setHours(dataMinima.getHours() + 48);

var dataMinimaFormatada = formata(dataMinimaPosterior);

window.addEventListener('load', function() {
    var campo0 = document.getElementById('dat_DataSaida');
    var campo1 = document.getElementById('dat_DataSaida2');
    var campo2 = document.getElementById('dat_DataRetorno');
    var campo3 = document.getElementById('dat_DataRetorno2');

    campo0.min = dataMinimaFormatada;
    campo1.min = dataMinimaFormatada;    
    campo2.min = dataMinimaFormatada;
    campo3.min = dataMinimaFormatada;

}); 


/*********** Soma o valor da diária solicitada + adição de diária ******************/

function somaDiaria() {
    var diariauso = parseFloat(document.getElementById("numDiarias").value);
    var historico1 = parseFloat(document.getElementById("hist1").value) || 0; 
    var historico2 = parseFloat(document.getElementById("hist2").value) || 0;
    var historico3 = parseFloat(document.getElementById("hist3").value) || 0;
    
    
    var total = diariauso + historico1 + historico2 + historico3;
    
    return total;
}

window.addEventListener("load", function() {
    var resultado = somaDiaria();
    document.getElementById("totalDiarias").value = resultado;
});
















