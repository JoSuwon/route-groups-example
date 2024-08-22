// app/(main)/layout.tsx

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        {'('}main{')'}/layout.tsx
      </div>
      {children}
    </>
  );
}
