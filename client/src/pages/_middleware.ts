import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req: req as any,
    secret: process.env.JWT_SECRET,
  });

  const { pathname } = req.nextUrl;

  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  return;
};