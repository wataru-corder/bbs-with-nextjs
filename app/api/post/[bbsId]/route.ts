import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) {
  const bbsId = params.bbsId;
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });
  return NextResponse.json(bbsDetailData);
}
