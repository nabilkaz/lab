import LabPostPreview from "@/components/LabPostPreview/LabPostPreview";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <LabPostPreview
          title="My First Post"
          tag="Tag"
          publishedDate="2025-01-01"
          excerpt="This is my first post"
        />
      </main>
    </div>
  );
}
