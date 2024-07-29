import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next")) return NextResponse.next();

  if (pathname === "/jobs/Careers") {
    req.nextUrl.pathname = "/";
    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
}