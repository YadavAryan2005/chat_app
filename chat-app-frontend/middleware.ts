import { NextResponse,NextRequest } from "next/server";

export function middleware(req:NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  // If user visits "/" AND token not found → redirect
//   if (!token && path === "/") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

  // Also protect other routes
  if (!token && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login ", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // match ALL routes
};
