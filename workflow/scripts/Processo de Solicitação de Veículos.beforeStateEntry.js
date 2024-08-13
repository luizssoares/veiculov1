function beforeStateEntry(sequenceId) {
    var cWKNumProces = getValue("WKNumProces");
    var mail = hAPI.getCardValue("mail");
    var mail2 = hAPI.getCardValue("mail2");
    var mail3 = hAPI.getCardValue("mail3");
    var mailnosso = hAPI.getCardValue("mailnosso");

    if(sequenceId == 16) {
        if (mail != null && mail != "") {
            var contraint = [];
            var c1 = DatasetFactory.createConstraint("codigoFormularioPublico", "solicVeiculo", "solicVeiculo", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("WKNumProces", cWKNumProces, cWKNumProces, ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatus", "1000", "1000", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatusMensagem", "1000", "1000", ConstraintType.MUST);
            contraint.push(c1);

            var jCampoValor = {};
            jCampoValor.campo = "carroLiberado";
            jCampoValor.valor = hAPI.getCardValue("carroLiberado")
            var c1 = DatasetFactory.createConstraint("campo", JSONUtil.toJSON(jCampoValor), "", ConstraintType.MUST);
            contraint.push(c1);

            var c1 = DatasetFactory.createConstraint("email", mail, mail, ConstraintType.MUST);
            contraint.push(c1);

            var dataset = DatasetFactory.getDataset("ds_dpf_send_email", null, contraint, null);
            hAPI.setCardValue("linkAcesso", dataset.getValue(0, "linkInsert"));
        }
        if (mailnosso != null && mailnosso != "") {
            var contraint = [];
            var c1 = DatasetFactory.createConstraint("codigoFormularioPublico", "solicVeiculo", "solicVeiculo", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("WKNumProces", cWKNumProces, cWKNumProces, ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatus", "1000", "1000", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatusMensagem", "1000", "1000", ConstraintType.MUST);
            contraint.push(c1);

            var jCampoValor = {};
            jCampoValor.campo = "carroLiberado";
            jCampoValor.valor = hAPI.getCardValue("carroLiberado")
            var c1 = DatasetFactory.createConstraint("campo", JSONUtil.toJSON(jCampoValor), "", ConstraintType.MUST);
            contraint.push(c1);

            var c1 = DatasetFactory.createConstraint("email", mailnosso, mailnosso, ConstraintType.MUST);
            contraint.push(c1);

            var dataset = DatasetFactory.getDataset("ds_dpf_send_email", null, contraint, null);
            hAPI.setCardValue("linknosso", dataset.getValue(0, "linkInsert"));
        }
        
        if (mail2 != null && mail2 != "") {
            var contraint = [];
            var c1 = DatasetFactory.createConstraint("codigoFormularioPublico", "solicVeiculo", "solicVeiculo", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("WKNumProces", cWKNumProces, cWKNumProces, ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatus", "1000", "1000", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatusMensagem", "1000", "1000", ConstraintType.MUST);
            contraint.push(c1);

            var jCampoValor = {};
            jCampoValor.campo = "carroLiberado";
            jCampoValor.valor = hAPI.getCardValue("carroLiberado")
            var c1 = DatasetFactory.createConstraint("campo", JSONUtil.toJSON(jCampoValor), "", ConstraintType.MUST);
            contraint.push(c1);

            var c1 = DatasetFactory.createConstraint("email", mail2, mail2, ConstraintType.MUST);
            contraint.push(c1);

            var dataset = DatasetFactory.getDataset("ds_dpf_send_email", null, contraint, null);
            hAPI.setCardValue("linkAcesso2", dataset.getValue(0, "linkInsert"));
        }                              
   }
    
    if(sequenceId == 44) {
    	if (mail3 != null && mail3 != "") {
            var contraint = [];
            var c1 = DatasetFactory.createConstraint("codigoFormularioPublico", "solicVeiculo", "solicVeiculo", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("WKNumProces", cWKNumProces, cWKNumProces, ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatus", "1001", "1001", ConstraintType.MUST);
            contraint.push(c1);
            var c1 = DatasetFactory.createConstraint("codStatusMensagem", "1001", "1001", ConstraintType.MUST);
            contraint.push(c1);

            var jCampoValor = {};
            jCampoValor.campo = "carroLiberado";
            jCampoValor.valor = hAPI.getCardValue("carroLiberado")
            var c1 = DatasetFactory.createConstraint("campo", JSONUtil.toJSON(jCampoValor), "", ConstraintType.MUST);
            contraint.push(c1);

            var c1 = DatasetFactory.createConstraint("email", mail3, mail3, ConstraintType.MUST);
            contraint.push(c1);

            var dataset = DatasetFactory.getDataset("ds_dpf_send_email", null, contraint, null);
            hAPI.setCardValue("linkAcesso3", dataset.getValue(0, "linkInsert"));
        }
    }
    
    
    

}

