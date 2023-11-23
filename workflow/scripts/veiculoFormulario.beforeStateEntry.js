function beforeStateEntry(sequenceId) {
    var cWKNumProces = getValue("WKNumProces");
    var mail = hAPI.getCardValue("mail");

 
        if (mail != null && mail != "") {
            var contraint = [];
            var c1 = DatasetFactory.createConstraint("codigoFormularioPublico", "teste2", "teste2", ConstraintType.MUST);
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

}

