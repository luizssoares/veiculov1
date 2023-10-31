function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
		
    dataset.addColumn("Lugar");
    dataset.addColumn("Diaria");
    
    dataset.addRow(new Array("", ""));
    dataset.addRow(new Array("Manaus", "1.226,10"));
    dataset.addRow(new Array("Manacapuru", "1.546,87"));
    dataset.addRow(new Array("Iranduba", "1.258,47"));
    dataset.addRow(new Array("Itapiranga", "4.080.00"));
    dataset.addRow(new Array("Rio Preto da Eva", "1.546.87"));
    dataset.addRow(new Array("Itacoatiara", "3.402.50"));
    dataset.addRow(new Array("Presidente Figueiredo", "1.677.29"));
    dataset.addRow(new Array("Novo Remanso", "2.825.00"));
    dataset.addRow(new Array("Careiro da Várzea", "2.658.33"));
    dataset.addRow(new Array("Autazes", "3.695.00"));
    dataset.addRow(new Array("Novo Airão", "3.276.67"));
    dataset.addRow(new Array("Silves", "4.080.00"));
    dataset.addRow(new Array("Puraquequara", "1.142.50"));
    dataset.addRow(new Array("Vila do Engenho", "2.825.00"));
    dataset.addRow(new Array("Cacau Pirera", "950.00"));
  
    
	
    return dataset;
}
