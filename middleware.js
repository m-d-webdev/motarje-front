import { NextResponse } from 'next/server';


// List your supported languages
const locales = ['en', 'fr', 'ar'];

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  console.log("\n redirect to this pathname =>", pathname);
  
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const defVal = request.cookies?.get("i18next")?.value || "en";

  request.nextUrl.pathname = `/${defVal}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip these paths
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};