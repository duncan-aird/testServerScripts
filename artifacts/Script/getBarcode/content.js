const getBarcode = async function (itext) {
       
    try {
        const bwipjs = modules.bwipjs;
        const buffer = await bwipjs.toBuffer({
                bcid: "code128", // Barcode type
                text: itext, // Text to encode
                scale: 3, // 3x scaling factor
                height: 10, // Bar height, in millimeters
                includetext: true, // Show human-readable text
                textxalign: "center", // Always good to set this
            })

            return "data:image/png;base64," + buffer.toString("base64");
    }
    catch (e) {
        return "Could not call bwipjs";
    }
}

complete({ getBarcode });
