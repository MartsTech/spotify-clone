import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req: req as any,
    secret: process.env.JWT_SECRET,
  });

  const { pathname } = req.nextUrl;

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (pathname.includes("/meta/icon.png")) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    return NextResponse.rewrite("/login");
  }

  return NextResponse.next();
};
