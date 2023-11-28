function validateForm(form) {
	/*var Dhoje = form.getValue("dt_DataSolicit").split(' ')[0]; // 00/00/0000 25:85
	var Dhoje2 = Dhoje.split('/');
	var hoje = Dhoje2[2] + '-' + Dhoje2[1] + '-' + Dhoje2[0]
	*/
	 var escolhaPainelUso = form.getValue("escolhaPainelUso");
	 var escolhaPainel = form.getValue("escolhaPainel");
	 var Now_State = parseInt(getValue("WKNumState"));
	 var escolhaUso = form.getValue("escolhaPainelUso");
	 var msg = ""
		  
	if(Now_State == 9) {
		if(form.getValue("slc_projeto") == "") {
			 msg += "\nPreencha o campo PROJETO";
			}
		 if(form.getValue("slc_acao") == "") {
			 msg += "\nPreencha o campo AÇÃO";
			}
		 if(form.getValue("slc_unidade") == "") {
			 msg += "\nPreencha o campo UNIDADE";
			}
		 if(form.getValue("escolhaPainel") == "") {
			 msg += "\nPreencha o campo TIPO DE VEÍCULO";
			}
	}	 
		 
	 if(Now_State == 9 && escolhaPainel == "painelViagem") {
		 if(form.getValue("condutor")  == "") {
				msg += "\nPreencha o campo CONDUTOR";
			}
		 if(form.getValue("numCnh") == "") {
			 msg += "\nPreencha o campo CNH";
			}
		 if(form.getValue("validadeCnh") == "") {
			 msg += "\nPreencha o campo VALIDADE CNH";
			}
		 if(form.getValue("destino") == "") {
			 msg += "\nPreencha o campo DESTINO";
			}
		 if(form.getValue("gas") == "") {
			 msg += "\nPreencha o campo COMBUSTÍVEL ";
			}
		 if(form.getValue("justificativa") == "") {
			 msg += "\nPreencha o campo JUSTIFICATIVA";
		 }
		/* if(form.getValue("carroAlugado") == "") {
			 msg += "\nPreencha o campo CARRO";
			}
		 if(form.getValue("dat_DataSaida") == "") {
			 msg += "\nPreencha o campo DATA SAÍDA";
			}
		 if(form.getValue("dat_DataRetorno") == "") {
			 msg += "\nPreencha o campo DATA RETORNO";
			}*/
	 }
	 
	 if(Now_State == 9 && escolhaPainel =="painelViagem2"){
		 if(form.getValue("carropesado") == "") {
			 msg += "\nPreencha o campo TIPO DE VEÍCULO";
			}
		 if(form.getValue("dat_DataSaida2") == "") {
			 msg += "\nPreencha o campo DATA DE SAÍDA";
			}
		 if(form.getValue("dat_DataRetorno2") == "") {
			 msg += "\nPreencha o campo DATA DE RETORNO";
			}
		 if(form.getValue("responsavel") == "") {
			 msg += "\nPreencha o campo RESPONSÁVEL";
			}
		 if(form.getValue("numTelefone") == "") {
			 msg += "\nPreencha o campo Nº TELEFONE";
			}
		 if(form.getValue("destinoMVO") == "") {
			 msg += "\nPreencha o campo DESTINO";
			}
		 if(form.getValue("trajeto") == "") {
			 msg += "\nPreencha o campo TRAJETO";
			}
		 
	 }
	 
	 if(Now_State == 14) {
		 if(form.getValue("escolhaPainelUso") == "") {
			 msg += "\nPreencha o campo TIPO DE ALUGUEL";
			}
	 }
	 
	 if(Now_State == 14 && escolhaUso =="painelUso" ) {
		 if(form.getValue("numDiarias") == "") {
			 msg += "\nPreencha o campo DIÁRIAS";
			}
		 if(form.getValue("numCartao") == "") {
			 msg += "\nPreencha o campo CARTÃO";
			}
		 if(form.getValue("mail") == "") {
			 msg += "\nPreencha o campo EMAIL";
			}
	 
	 }
	 
	 if(Now_State == 16 && escolhaPainelUso == "painelUso") {
		 if(form.getValue("carroLiberado") == "") {
			 msg += "\n Preencha o campo CARRO";
			}
		 if(form.getValue("placaLiberado") == "") {
			 msg += "\n | Preencha o campo PLACA";
			}
		 if(form.getValue("datahorarioLocadora") == "") {
			    msg += "\n | Preencha o campo DATA E HORA DE SAÍDA";
			   }
		 if(form.getValue("datahorarioLocadora2") == "") {
			    msg += "\n | Preencha o campo DATA E HORA DE RETORNO";
			   }
		 if(form.getValue("localRetirada") == "") {
			    msg += "\n | Preencha o campo LOCAL DE RETIRADA";
			   }
		 if(form.getValue("localRetorno") == "") {
			    msg += "\n | Preencha o campo LOCAL DE RETORNO";
			   }
	 } 
	 
	 if(Now_State == 16 && escolhaPainelUso == "painelUso2") {
		 if(form.getValue("vmoLiberado") == "") {
			 	msg += "\n  Preencha o campo VEÍCULO"; 
		 }
		 if(form.getValue("vmoPlaca") == "") {
				msg += "\n | Preencha o campo PLACA"; 
			 }
		 if(form.getValue("vmoLugar") == "") {
				msg += "\n | Preencha o campo LUGAR"; 
			 }
		 if(form.getValue("vmoDestino") == "") {
				msg += "\n | Preencha o campo DESTINO"; 
			 }
		 if(form.getValue("vmoHoraSaida") == "") {
				msg += "\n | Preencha o campo DATA E HORA DE SAÍDA"; 
			 }
		 if(form.getValue("vmoHoraRetorno") == "") {
				msg += "\n | Preencha o campo DATA E HORA DE RETORNO"; 
			 }
		 if(form.getValue("vmoSaida") == "") {
				msg += "\n | Preencha o campo LOCAL DE SAÍDA DO VEÍCULO"; 
			 }
		 if(form.getValue("vmoRetorno") == "") {
				msg += "\n | Preencha o campo LOCAL DE RETORNO DO VEÍCULO"; 
			 }
	 }
	 
	 
	 if (Now_State == 15) {
		 if(form.getValue("numDiarias2") == "") {
			 msg += "\n Preencha o campo DIÁRIAS"
		 }
		 if(form.getValue("numCartao2") == "") {
			 msg += "\n Preencha o campo CARTÃO"
		 }
		 if(form.getValue("usoSede") == "") {
			 msg += "\n Preencha o campo CARRO"
		 }
	 }
	 
	 if (Now_State == 23) {
		 if(form.getValue("obs") == "") {
			 msg += "\n Preencha o campo OBSERVAÇÕES"
		 }
		 if(form.getValue("avalSelect") === "0") {
			 msg += "\n Preencha o campo AVALIAÇÃO"
		 }
	 }
	 
	 
	 
	 
	 
	 
	 if (Now_State == 24) {
		 if(form.getValue("obs") == "") {
			 msg += "\n Preencha o campo OBSERVAÇÕES"
		 }
		 if(form.getValue("avalSelect") == "0") {
			 msg += "\n Preencha o campo AVALIAÇÃO"
		 }
	 }
	 
	 if(msg != ""){
		 throw msg;
	 }
}
