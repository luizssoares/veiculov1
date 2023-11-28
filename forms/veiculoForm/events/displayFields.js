function displayFields(form,customHTML){ 
	var Now_State = parseInt(getValue("WKNumState"));
	var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm");
	var usuario = getValue("WKUser");
	var numProcesso = getValue("WKNumProces");
	
	form.setHidePrintLink(true);
	form.setValue("cmb_NomeSolicitante", usuario);	
	form.setValue("processo", numProcesso);
	form.setValue("dataSolic", data.format(new Date()));
	form.setValue("dataAval", data.format(new Date()));
	
	
	switch(Now_State) {
	
	case 0:
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("painelUso", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("painel_locadora", false);
		form.setVisibleById("processo1", false);
		form.setVisibleById("cardInfo", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("painelDiarias", false);
		form.setVisibleById("painel_locadora2", false);
		
		
		
	break;
	
	case 10:
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("painelUso", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("painel_locadora", false);
		form.setVisibleById("cardInfo", false);
		form.setVisibleById("processo1", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("alerta", false);
		form.setVisibleById("painelDiarias", false);
		form.setVisibleById("painel_locadora2", false);
		form.setVisibleById("cardDemandante", false);
		
	
		
	break;
	
	case 14:
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("alerta", false);
		form.setVisibleById("usoSede", false);
		form.setVisibleById("painel_locadora", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("cardInfo", false);
		form.setVisibleById("processo1", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painelDiarias", false);
		form.setVisibleById("painel_locadora2", false);
		form.setVisibleById("cardDemandante", false);
		
		
	break;
	
	case 15:
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("usoAlugado", false);
		form.setVisibleById("painel_locadora", false);
		form.setVisibleById("painelUso", false);
		form.setVisibleById("cardInfo", false);
		form.setVisibleById("processo1", false);
		form.setVisibleById("cardAluguel", false);
		form.setVisibleById("painelDiarias", false);
		form.setVisibleById("alerta", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painelDecisaoUso", false);
		
	break;
	
	case 23:
		form.setVisibleById("painelViagem", false);
		form.setVisibleById("painelUso", false);
		form.setVisibleById("painel_locadora", false);
		form.setVisibleById("cardInfo", false);
		form.setVisibleById("cardDemandante", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("painelDiarias", false);
		form.setVisibleById("painel_locadora2", false);
		form.setVisibleById("painel_dotacao", false);
		
	
		
	break;
	
	case 24:
		form.setVisibleById("painelViagem", false);
		form.setVisibleById("painelUso", false);
		form.setVisibleById("painel_locadora", false);
		form.setVisibleById("painel_locadora2", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("cardDemandante", false);
		form.setVisibleById("painel_dotacao", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("painelDiarias", false);
		form.setVisibleById("painel_usuario", false);
		
	
	break;
	
	case 16:
		form.setVisibleById("painelDemandante", false);	
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("usoSede", false);
		form.setVisibleById("alerta", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painelViagem", false);
		form.setVisibleById("painel_dotacao", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("painelDiarias", false);
	
	break;
	
	case 36:
		form.setVisibleById("painelDemandante", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("alerta", false);
		form.setVisibleById("painel_dotacao", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("cardLocadora", false);	
	
	break;
	
	case 44:
		form.setVisibleById("painelDemandante", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("alerta", false);
		form.setVisibleById("painelUso", false);
		form.setVisibleById("painel_dotacao", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("painelUso2", false);
		form.setVisibleById("cardLocadora", false);
		
	break;
	
	case 54:
	//	form.setVisibleById("painelDemandante", false);
		form.setVisibleById("painel_usuario", false);
		form.setVisibleById("painel_avaliacao", false);
		form.setVisibleById("painelUsoProprio", false);
		form.setVisibleById("alerta", false);
		form.setVisibleById("painel_dotacao", false);
		form.setVisibleById("painelDecisaoUso", false);
		form.setVisibleById("painelDiarias", false);
		form.setVisibleById("cardLocadora", false);
		
	break;
	
	
	}
}