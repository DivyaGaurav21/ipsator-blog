import Header from '../components/Header'
// import { ReactNode } from "react";
import './globals.css'
import { Inter } from 'next/font/google'
import StytchProvider from '@/components/StytchProvider';
import Footer from '@/components/Footer';
// import Test from '@/components/Test';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Ipsator-blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html:
            `var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'G-3KDMMT2X82']);
_gaq.push(['_setDomainName', 'none']);
_gaq.push(['_setAllowLinker', 'true']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();`
        }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3KDMMT2X82"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3KDMMT2X82');`
        }} />
      </head>
      <body className={inter.className}>
        <StytchProvider>
          <Header />
          {children}
        </StytchProvider>
        <Footer />
        <script src="https://kit.fontawesome.com/83b993c0e4.js"></script>
      </body>
    </html>

  )
}
