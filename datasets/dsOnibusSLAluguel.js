function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
    dataset.addColumn("Lugar");
    dataset.addColumn("Diaria");
    
    dataset.addRow(new Array("", ""));
    dataset.addRow(new Array("Manaus", "2.448.33"));
    dataset.addRow(new Array("Manacapuru", "4.220.67"));
    dataset.addRow(new Array("Iranduba", "4.816.00"));
    dataset.addRow(new Array("Itapiranga", "10.406.67"));
    dataset.addRow(new Array("Rio Preto da Eva", "6.281.33"));
    dataset.addRow(new Array("Itacoatiara", "9.286.67"));
    dataset.addRow(new Array("Presidente Figueiredo", "9.706.67"));
    dataset.addRow(new Array("Novo Remanso", "7.186.67"));
    dataset.addRow(new Array("Careiro da Várzea", "11.235.00"));
    dataset.addRow(new Array("Autazes", "12.215.00"));
    dataset.addRow(new Array("Novo Airão", "10.378.67"));
    dataset.addRow(new Array("Silves", "17.115.00"));
    dataset.addRow(new Array("Puraquequara", "2.368.32"));
    dataset.addRow(new Array("Vila do Engenho", "10.126.67"));
    dataset.addRow(new Array("Cacau Pirera", "3.348.33"));
  

    return dataset;
}
