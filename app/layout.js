import './globals.css';

export const metadata = {
  title: 'Hello There',
  description: 'A friendly greeting experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
