function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	
	dataset.addColumn("Veiculo");
    dataset.addColumn("Diaria");
    
    
    dataset.addRow(new Array("", ""));
    dataset.addRow(new Array("Veículo Passeio Econômico(1.0)", "202.99"));
    dataset.addRow(new Array("Veículo Passeio Sedan(1.4)", "237.27"));
    dataset.addRow(new Array("Veículo Passeio Sedan EXECUTIVO(1.8)", "308.45"));
    dataset.addRow(new Array("Veículo Pickup MANUAL/AUTOMÁTICO 4X4 DIESEL", "495.62"));
	
    return dataset;
}



/*var settings = {
		source: {
			url: parent.WCMAPI.getServerURL() + "/digtedpfweb/v1/rest/proxyDatasetFilter/" + organizationId + "?datasetId=ds_dpf_getDatasetFilter&filterFields=dpfDatasetId,100&searchField=colleagueName&",
			contentType: 'application/json',
			root: 'content',
			pattern: '',
			limit: 2,
			offset: 2,
			patternKey: 'searchValue',
			limitkey: 'limit',
			offsetKey: 'offset'
		},
		displayKey: 'colleagueName',
		multiSelect: false,
		style: {
			autocompleteTagClass: 'tag-gray',
			tableSelectedLineClass: 'info'
		}
	};
	_this.filter = FLUIGC.filter('#usuario', settings);*/