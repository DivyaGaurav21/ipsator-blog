import { NextResponse } from "next/server";

export function middleware(req, res, next) {
    let token = req.cookies.get('stych_session_jwt');
    console.log(token);
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: ['blog_post', 'blog_post/:path*']
}