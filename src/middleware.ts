import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/kickstarter") {
    const kickstarterLiveUrl = process.env.KICKSTARTER_LIVE_URL;

    if (kickstarterLiveUrl) {
      const target = new URL(kickstarterLiveUrl);

      // Preserve UTM and other query params
      request.nextUrl.searchParams.forEach((value, key) => {
        target.searchParams.set(key, value);
      });

      return NextResponse.redirect(target, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/kickstarter"],
};
