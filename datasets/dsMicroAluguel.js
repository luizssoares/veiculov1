function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
    dataset.addColumn("Lugar");
    dataset.addColumn("Diaria");
    
    dataset.addRow(new Array("", ""));
    dataset.addRow(new Array("Manaus", "3.108.33"));
    dataset.addRow(new Array("Manacapuru", "4.000.00"));
    dataset.addRow(new Array("Iranduba", "3.022.90"));
    dataset.addRow(new Array("Itapiranga", "9.175.00"));
    dataset.addRow(new Array("Rio Preto da Eva", "3.650.00"));
    dataset.addRow(new Array("Itacoatiara", "8.941.67"));
    dataset.addRow(new Array("Presidente Figueiredo", "4.066.67"));
    dataset.addRow(new Array("Novo Remanso", "7.425.00"));
    dataset.addRow(new Array("Careiro da Várzea", "4.266.67"));
    dataset.addRow(new Array("Autazes", "9.875.00"));
    dataset.addRow(new Array("Novo Airão", "8.933.33"));
    dataset.addRow(new Array("Silves", "10.050.00"));
    dataset.addRow(new Array("Puraquequara", "1.760.00"));
    dataset.addRow(new Array("Vila do Engenho", "7.925.00"));
    dataset.addRow(new Array("Cacau Pirera", "1.900.43"));     
	
    return dataset;
}
