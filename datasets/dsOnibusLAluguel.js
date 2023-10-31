function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
    dataset.addColumn("Lugar");
    dataset.addColumn("Diaria");
    
    dataset.addRow(new Array("", ""));
    dataset.addRow(new Array("Manaus", "2.192.50"));
    dataset.addRow(new Array("Manacapuru", "3.747.47"));
    dataset.addRow(new Array("Iranduba", "4.321.53"));
    dataset.addRow(new Array("Itapiranga", "9.113.33"));
    dataset.addRow(new Array("Rio Preto da Eva", "5.662.67"));
    dataset.addRow(new Array("Itacoatiara", "8.103.33"));
    dataset.addRow(new Array("Presidente Figueiredo", "8.223.33"));
    dataset.addRow(new Array("Novo Remanso", "6.183.33"));
    dataset.addRow(new Array("Careiro da Várzea", "9.862.50"));
    dataset.addRow(new Array("Autazes", "10.562.50"));
    dataset.addRow(new Array("Novo Airão", "8.883.33"));
    dataset.addRow(new Array("Silves", "15.112.50"));
    dataset.addRow(new Array("Puraquequara", "2.059.17"));
    dataset.addRow(new Array("Vila do Engenho", "8.703.33"));
    dataset.addRow(new Array("Cacau Pirera", "2.969.17"));
  
    
	
    return dataset;
}
