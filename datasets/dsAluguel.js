function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	
	dataset.addColumn("Veiculo");
    dataset.addColumn("Diaria");
    
    
    dataset.addRow(new Array("", ""));
    dataset.addRow(new Array("Veículo Passeio Econômico(1.0)", "211.63"));
    dataset.addRow(new Array("Veículo Passeio Sedan(1.4)", "247.37"));
    dataset.addRow(new Array("Veículo Passeio Sedan EXECUTIVO(1.8)", "321.58"));
    dataset.addRow(new Array("Veículo Pickup MANUAL/AUTOMÁTICO 4X4 DIESEL", "516.73"));
	
    return dataset;
}



