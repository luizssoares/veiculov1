function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	
	dataset.addColumn("Carro");
    dataset.addColumn("Placa");
    dataset.addColumn("GrupoPertencente");
    
    dataset.addRow(new Array("", "", ""));
    dataset.addRow(new Array("Doblò 01", "NOS-8216", "SEDE"));
    dataset.addRow(new Array("Doblò 02", "NOS-8316", "SEDE"));
    dataset.addRow(new Array("Doblò 03", "NPA-4281", "SEDE"));
    dataset.addRow(new Array("Doblò (ITA)", "NOT-9356", "ITACOATIARA"));
	
    return dataset;
}