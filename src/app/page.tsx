import LabPostPreview from "@/components/LabPostPreview/LabPostPreview";
import { mockBlogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/types";
import NavBar, {
  NavigationItem,
  NavigationList,
} from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:gap-12 font-[family-name:var(--font-geist-sans)]">
      <NavBar className="w-full max-w-[680px]">
        <NavigationList>
          <NavigationItem>Experiments</NavigationItem>
          <NavigationItem active={true}>Notes</NavigationItem>
          <NavigationItem>Projects</NavigationItem>
          <NavigationItem>About</NavigationItem>
        </NavigationList>
      </NavBar>
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full max-w-[680px]">
        <h1 className="text-lg font-bold ml-4 mb-2 w-[120px]">Notes</h1>
        <ul className="w-full space-y-4">
          {mockBlogPosts.map(
            ({ id, title, tags, publishedAt, excerpt }: BlogPost) => (
              <li key={id}>
                <LabPostPreview
                  title={title}
                  tags={tags}
                  publishedDate={publishedAt}
                  excerpt={excerpt}
                />
              </li>
            )
          )}
        </ul>
      </main>
    </div>
  );
}
