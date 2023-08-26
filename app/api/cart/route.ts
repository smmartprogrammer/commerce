import { cartColumns, db } from "@/Database/Drizzle";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const req = await request.json()

    try {
        const res = await db.insert(cartColumns).values({
            user_id: req.user_id,
            product_id: req.product_id,
            product_title: req.product_title,
            image_url: req.image_url,
            product_price: req.product_price,
            product_quantity: req.product_quantity,

        }).onConflictDoUpdate({
            target: [cartColumns.product_title],
            set: {
                product_quantity: req.product_quantity,
                product_price: req.product_price,

            }
        }).returning();
        console.log("data posted to database");

        return NextResponse.json({ res })


    } catch (error) {
        console.log("error while posting database");
        console.log("error", error);
        return NextResponse.json({ message: "something went wrong" })

    }
}