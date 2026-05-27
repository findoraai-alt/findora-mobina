import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json();

  const filePath = path.join(process.cwd(), "newsletter.json");

  let existingData: any[] = [];

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    existingData = JSON.parse(fileContent || "[]");
  }

  // ✅ چک کردن ایمیل تکراری
  const emailExists = existingData.some(
    (item) => item.email === body.email
  );

  if (!emailExists) {
    existingData.push({
      ...body,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
  }

  return NextResponse.json({
    success: true,
    duplicate: emailExists,
  });
}