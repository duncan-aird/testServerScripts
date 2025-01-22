try {
    letdPDFBase64 = "";
    const labels = req.body.labels;

    for (i = 0; i < labels.length; i++) {
        labels[i].TO_ZIP_BARCODE = await globals.getBarcode.getBarcode(labels[i].TO_ZIP);

        labels[i].UPC_BARCODE = await globals.getBarcode.getBarcode(labels[i].UPC);
        log.info(labels[i]);
        pdfBase64 = await globals.createPDF.getPDF(labels[i]);
    }

    result = { pdfBase64: pdfBase64 };

    complete();
} catch (e) {
    return fail("Error Occured:" + e);
}
