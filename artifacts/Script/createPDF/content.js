const getPDF = async function (labelData) {
    try {
        const payload = {
            // the data the will be passed in the PDF

            From: {
                Name1: labelData.FROM_NAME1,
                Name2: labelData.FROM_NAME2,
                Address1: labelData.FROM_ADDRESS1,
                Address2: labelData.FROM_ADDRESS2,
                ZipImage: labelData.TO_ZIP_BARCODE,
            },
            Shipto: {
                Name1: labelData.TO_NAME1,
                Name2: labelData.TO_NAME2,
                Address1: labelData.TO_ADDRESS1,
                Address2: labelData.TO_ADDRESS2,
                ToZip: labelData.TO_ZIP,
            },
            Carrier: {
                Name: labelData.CARRIER_NAME,
                PRO: labelData.CARRIER_PRO,
                BOL: labelData.CARRIER_BOL,
            },
            PurchaseOrder: {
                UPC: labelData.UPC,
                UPCImage: labelData.UPC_BARCODE,
                QTY: labelData.QTY,
                Carton: labelData.CARTON,
                PONumber: labelData.PURCHASE_ORDER,
            },
            QRCode: labelData.PURCHASE_ORDER,
        };
        const objectKey = Date.now().toString().substr(0, 10);
        const securityKey = uuid(); // giving it a unique ID
        const pdfBase64 = await p9.pdf.generatePdf({
            // p9 core function that generates PDF
            pdfName: "TESTBARCODES", // name of the PDF Template
            objectKey: objectKey,
            securityKey: securityKey,
            body: payload,
        });
        return pdfBase64;
    } catch (e) {
        console.log(e.toString());
    } finally {
        complete();
    }
};

complete({ getPDF });
