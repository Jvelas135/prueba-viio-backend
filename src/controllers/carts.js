import { response, request } from "express";
import axios from "axios";

export const getUrl = async (req = request, res = response) => {
  try {
    const response = await axios.get("https://dummyjson.com/carts");
    const datafi = [];
    const seenIds = new Set(); // Para rastrear IDs únicos

    const data = response.data.carts;

    for (let i = 0; i < data.length; i++) {
      const product = data[i]["products"];
      for (let j = 0; j < product.length; j++) {
        const productId = product[j].id;

        // Verificar si la ID ya ha sido vista
        if (!seenIds.has(productId)) {
          datafi.push({
            id: productId,
            title: product[j].title,
            price: product[j].price,
            quantity: product[j].quantity,
            total: product[j].total,
            discountPercentage: product[j].discountPercentage,
            discountedPrice: product[j].discountedPrice,
            thumbnail: product[j].thumbnail,
          });

          seenIds.add(productId);
        }
      }
    }

    res.json({
      data: datafi,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
