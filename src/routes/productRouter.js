const { Router } = require("express");
productRouter = Router();
const getProductApi = require("../utils/getProduct.js");
productRouter.get("/", async (req, res) => {
  return res.status(404).json({ message: "Error 404" });
});
productRouter.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const arrayProducts = await getProductApi(code);

    const productSkuCode = arrayProducts.find(
      (productObj) => String(productObj.productReferenceCode) === code
    );

    if (!productSkuCode) {
      return res.status(404).json({ message: "Results: data not found" });
    }

    return res.json(productSkuCode);
  } catch (error) {
    console.error("Error en la ruta /:code:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = productRouter;
