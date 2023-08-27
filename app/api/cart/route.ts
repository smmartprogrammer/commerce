import { cartColumns, db } from "@/Database/Drizzle";
import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";

export const POST = async (request: NextRequest) => {
    const req = await request.json()


// // we previously used to fetch user id, with browser cookies method, now we have fetch with clerk id., thats 
// why it is commit out 
    // import { cookies } from 'next/headers'
    // import { v4 } from "uuid"
    // const setCookies = cookies();
    // const uid = v4();
    // const user_id = setCookies.get("user_id")?.value as string
    // if (!user_id) {
    //     setCookies.set("user_id", uid);
    // }

    try {
        const res = await db.insert(cartColumns).values({
            user_id: req.user_id,
            product_id: req.product_id,
            product_title: req.product_title,
            image_url: req.image_url,
            product_price: req.product_price,
            product_quantity: req.product_quantity,

        }).onConflictDoUpdate({
            target: [cartColumns.user_id, cartColumns.product_title],
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

// GET API
export const GET = async (request: NextRequest) => {

    const uid = request.nextUrl.searchParams.get("user_id") as string
    try {
        const res = await db.select().from(cartColumns).where(eq(cartColumns.user_id, uid))
        return NextResponse.json(res)

    } catch (error) {
        console.log(error);
        return NextResponse.json(error)

    }

}


// DELETE API
export const DELETE = async (request: NextRequest) => {
    const req = await request.json();

    try {
        const res = await db
        .delete(cartColumns)
        .where(
            and(
                eq(cartColumns.user_id, req.user_id), 
                eq(cartColumns.product_title, req.product_title)
                )
                )
                .returning()
        return NextResponse.json(res)
        return NextResponse.json({ message: "product deleted successfully" });
    } catch (error) {
        console.log("delete error", error);
        return NextResponse.json({ message: "delete error" });
    }

}
