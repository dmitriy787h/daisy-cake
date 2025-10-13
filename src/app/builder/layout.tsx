// app/builder/layout.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'nodejs';

export default function ConstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}