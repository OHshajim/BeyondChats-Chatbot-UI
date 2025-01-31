import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("token");
  const pathname = request?.nextUrl?.pathname;

  if (!token) {
    return NextResponse.redirect(
      new URL(`/registration`, request.url)
    );
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/"],
};