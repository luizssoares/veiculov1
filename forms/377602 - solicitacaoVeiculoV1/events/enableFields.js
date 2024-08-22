function enableFields(form){
	var Now_State = parseInt(getValue("WKNumState"));
	form.setEnabled("cmb_NomeSolicitante", false);
	form.setEnabled("dataSolic", false);
	
	switch(Now_State) {
	
	case 10:
		form.setEnabled("condutor",false);
		form.setEnabled("numCnh",false);
		form.setEnabled("dat_DataSaidapp",false);
		form.setEnabled("dat_DataRetornopp",false);
		form.setEnabled("carroOpcao",false);	
		form.setEnabled("gas",false);
		form.setEnabled("carroAlugado",false);
		form.setEnabled("dat_DataSaida",false);
		form.setEnabled("dat_DataRetorno",false);
		form.setEnabled("destino",false);
		form.setEnabled("justificativa",false);
		form.setEnabled("validadeCnh",false);
		form.setEnabled("carropesado",false);
		form.setEnabled("dat_DataSaida2",false);
		form.setEnabled("dat_DataRetorno2",false);
		form.setEnabled("trajeto",false);
		form.setEnabled("lugarVan",false);
		form.setEnabled("tipoDiariaVan",false);
		form.setEnabled("lugarMicro",false);
		form.setEnabled("tipoDiariaMicro",false);
		form.setEnabled("lugarOnibusL",false);
		form.setEnabled("tipoDiariaOnibusL",false);
		form.setEnabled("lugarOnibusSL",false);
		form.setEnabled("tipoDiariaOnibusSL",false);
		form.setEnabled("destinoMVO",false);
		form.setEnabled("responsavel",false);
		form.setEnabled("numTelefone",false);
		form.setEnabled("quantidadeDeVMO",false);
		
	break;
	
	case 14:
		form.setEnabled("condutor",false);
		form.setEnabled("numCnh",false);
		form.setEnabled("carroAlugado",false);
		form.setEnabled("dat_DataSaida",false);
		form.setEnabled("dat_DataRetorno",false);
		form.setEnabled("carroOpcao",false);	
		form.setEnabled("gas",false);
		form.setEnabled("destino",false);
		form.setEnabled("justificativa",false);
		form.setEnabled("validadeCnh",false);
		form.setEnabled("carropesado",false);
		form.setEnabled("dat_DataSaida2",false);
		form.setEnabled("dat_DataRetorno2",false);
		form.setEnabled("trajeto",false);
		form.setEnabled("lugarVan",false);
		form.setEnabled("tipoDiariaVan",false);
		form.setEnabled("lugarMicro",false);
		form.setEnabled("tipoDiariaMicro",false);
		form.setEnabled("lugarOnibusL",false);
		form.setEnabled("tipoDiariaOnibusL",false);
		form.setEnabled("lugarOnibusSL",false);
		form.setEnabled("tipoDiariaOnibusSL",false);
		form.setEnabled("destinoMVO",false);
		form.setEnabled("responsavel",false);
		form.setEnabled("numTelefone",false);
		form.setEnabled("justificativaUso",false);
		form.setEnabled("quantidadeDeVMO",false);
		
	break;
	
	case 15:
		form.setEnabled("condutor",false);
		form.setEnabled("numCnh",false);
		form.setEnabled("dat_DataSaidapp",false);
		form.setEnabled("dat_DataRetornopp",false);
		form.setEnabled("carroOpcao",false);	
		form.setEnabled("tipoCarro",false);
		form.setEnabled("gas",false);
		form.setEnabled("destino",false);
		form.setEnabled("justificativa",false);
		form.setEnabled("validadeCnh",false);
		
	break;
	
	case 16:
		form.setEnabled("carroAlugadoUSO",false);
		form.setEnabled("numDiarias",false);
		form.setEnabled("numCartao",false);
		form.setEnabled("dataRetiradaFinal",false);
		form.setEnabled("dataRetornoFinal",false);
		form.setEnabled("condutorUSO",false);
		form.setEnabled("numCnhUSO",false);
		form.setEnabled("mail",false);
		form.setEnabled("linkAcesso",false);
		form.setEnabled("numDiariaPesadoUso",false);
		
	break;
	
	case 23:
		form.setEnabled("usoSede",false);
		form.setEnabled("numDiarias2",false);
		form.setEnabled("numCartao2",false);
		
	break;
	
		
	case 36:
		form.setEnabled("carroLiberado",false);
		form.setEnabled("placaLiberado",false);
		form.setEnabled("datahorarioLocadora",false);
		form.setEnabled("datahorarioLocadora2",false);
		form.setEnabled("localRetirada",false);
		form.setEnabled("localRetorno",false);
		form.setEnabled("vmoLiberado",false);
		form.setEnabled("vmoPlaca",false);
		form.setEnabled("vmoLugar",false);
		form.setEnabled("vmoDestino",false);
		form.setEnabled("vmoHoraSaida",false);
		form.setEnabled("vmoHoraRetorno",false);
		form.setEnabled("vmoSaida",false);
		form.setEnabled("vmoRetorno",false);
		form.setEnabled("numCartao",false);
		form.setEnabled("numDiarias",false);
		form.setEnabled("mail",false);
		form.setEnabled("mail2",false);
		form.setEnabled("numDiariaPesadoUso",false);

	break;
	
	case 42:
		form.setEnabled("carroLiberado",false);
		form.setEnabled("placaLiberado",false);
		form.setEnabled("datahorarioLocadora",false);
		form.setEnabled("datahorarioLocadora2",false);
		form.setEnabled("localRetirada",false);
		form.setEnabled("localRetorno",false);
		form.setEnabled("maisDiariasSelect",false);
		form.setEnabled("qtdMaisDiaria1",false);

	break;
	
	case 44:
		form.setEnabled("carroLiberado",false);
		form.setEnabled("placaLiberado",false);
		form.setEnabled("datahorarioLocadora",false);
		form.setEnabled("datahorarioLocadora2",false);
		form.setEnabled("localRetirada",false);
		form.setEnabled("localRetorno",false);
		form.setEnabled("maisDiariasSelect",false);
		form.setEnabled("qtdMaisDiaria1",false);
		form.setEnabled("vmoLiberado",false);
		form.setEnabled("vmoPlaca",false);
		form.setEnabled("vmoLugar",false);
		form.setEnabled("vmoDestino",false);
		form.setEnabled("vmoHoraSaida",false);
		form.setEnabled("vmoHoraRetorno",false);
		form.setEnabled("vmoSaida",false);
		form.setEnabled("vmoRetorno",false);
	
	break;
	
	case 54:
		form.setEnabled("vmoLiberado",false);
		form.setEnabled("vmoPlaca",false);
		form.setEnabled("vmoLugar",false);
		form.setEnabled("vmoDestino",false);
		form.setEnabled("vmoHoraSaida",false);
		form.setEnabled("vmoHoraRetorno",false);
		form.setEnabled("vmoSaida",false);
		form.setEnabled("vmoRetorno",false);
		form.setEnabled("maisDiariasSelect",false);
		form.setEnabled("qtdMaisDiaria1",false);
		form.setEnabled("carroLiberado",false);
		form.setEnabled("placaLiberado",false);
		form.setEnabled("datahorarioLocadora",false);
		form.setEnabled("datahorarioLocadora2",false);
		form.setEnabled("localRetirada",false);
		form.setEnabled("localRetorno",false);

	break;	
	
}
}