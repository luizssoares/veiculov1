
	function beforeSendData(customFields,customFacts){
		log.info('>>>>>>>>>>> #LUIZLOG entrei no BEFORESENDLOG');
	
		try{
		
			log.info('>>>>>>>>>>> #LUIZLOG entrei TRY');
		
			customFields[0] = hAPI.getCardValue('cmb_UnidadeSolicitante');
			customFields[1] = hAPI.getCardValue('condutorUSO');     
			customFields[2] = hAPI.getCardValue('carroAlugadoUSO');  
			customFields[3] = hAPI.getCardValue('destinoUso'); 
			customFields[4] = hAPI.getCardValue('numCartao'); 
			customFields[5] = hAPI.getCardValue('carroLiberado'); 
			
			customFields[6] = hAPI.getCardValue("aval");  //
			customFields[7] = hAPI.getCardValue('responsavel');  
			customFields[8] = hAPI.getCardValue('destinoPesadoUso'); 
			customFields[9] = hAPI.getCardValue('vmoLiberado'); 
			customFields[10] = hAPI.getCardValue('carroPesadoUso');  
			
			customFields[11] = hAPI.getCardValue('lugarPesadoUso'); 
			customFields[12] = hAPI.getCardValue('escolhaPainel');
			customFields[13] = hAPI.getCardValue('');
			customFields[14] = hAPI.getCardValue('');
			customFields[15] = hAPI.getCardValue('');
			
			customFields[16] = hAPI.getCardValue('dataSolic');
			customFields[17] = hAPI.getCardValue('dataRetiradaFinal');
			customFields[18] = hAPI.getCardValue('dataRetornoFinal');
			customFields[19] = hAPI.getCardValue('placaLiberado');
			customFields[20] = hAPI.getCardValue('numCartao');
			
			customFields[21] = hAPI.getCardValue('txt_codprojeto');
			customFields[22] = hAPI.getCardValue('txt_codacao');
			customFields[23] = hAPI.getCardValue('');
			customFields[24] = hAPI.getCardValue('');
			customFields[25] = hAPI.getCardValue('');
			
			customFields[26] = hAPI.getCardValue('');
			customFields[27] = hAPI.getCardValue('');
			customFields[28] = hAPI.getCardValue('');
			customFields[29] = hAPI.getCardValue('');
					
			customFacts[0] = java.lang.Double.parseDouble(hAPI.getCardValue('qtDia')); // Valor da Diária (R$)
			customFacts[1] = java.lang.Double.parseDouble(hAPI.getCardValue("totalDiarias")); // Numero de Diaria (Num)
			customFacts[2] = java.lang.Double.parseDouble(hAPI.getCardValue("diariaPesadoUso")); //
			customFacts[3] = java.lang.Double.parseDouble(hAPI.getCardValue("numDiariaPesadoUso")); //
			customFacts[4] = java.lang.Double.parseDouble(hAPI.getCardValue("gas"));  //
			customFacts[5] = java.lang.Double.parseDouble(hAPI.getCardValue("")); //
			
			customFacts[6] = java.lang.Double.parseDouble(hAPI.getCardValue('')); 
			customFacts[7] = java.lang.Double.parseDouble(hAPI.getCardValue('')); 
			customFacts[8] = java.lang.Double.parseDouble(hAPI.getCardValue('')); 
			customFacts[9] = java.lang.Double.parseDouble(hAPI.getCardValue('')); 
	


		}catch(e) {
			log.info('#LUIZLOG');
			log.info(e.lineNumber);
			log.info('>>>>>>>>>>>#LUIZLOG BEFORESENDLOG '+e.lineNumber);
		}
	
	
	
	}


	/*
	Descrição
calcularValorTotal = relação ao aluguel de carros e pickup
calcularValorTotal2	= relaçã ao aluguel de van/micro/onibus

escolhaPainel = se painelViagem é alugar carro | se painelViagem2 é alugar van/micro/onibus

condutorUSO = nome do condutor que irá dirigir o carro alugado
carroAlugadoUSO = tipo de carro que será alugado
destinoUso = destino do carro alugado
numCartao = cartão coringa que foi liberado pela uso
carroLiberado = carro que foi liberado pela locadora
qtDia = Valor da Diária do carro alugado
numDiarias = Numero de diárias do carro alugado
gas = Quantidade aprox de gasolina


responsavel = responsável pelo aluguel da van/micro/onibus
destinoPesadoUso = destino para onde van/micro/onibus irá
carroPesadoUso = van/micro/onibus que foi solicitado
lugarPesadoUso = lugar para onde o van/micro/onibus irá
diariaPesadoUso = Valor da diária da van/micro/onibus 
numDiariaPesadoUso = Quantidade de diárias solicitadas para van/micro/onibus 


vmoLiberado = van/micro/onibus que foi liberado pela locadora
qtdMaisDiaria1 = Quantidade da adição de diárias pela uso
avalSelect = avaliação final

*nome solicitante, unidade solicitante
*  

*/