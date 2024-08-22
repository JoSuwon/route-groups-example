// app/(not-main)/layout.tsx

export default async function NotMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='text-red-700'>
        {'('}not-main{')'}/layout.tsx
      </div>
      {children}
    </>
  );
}
