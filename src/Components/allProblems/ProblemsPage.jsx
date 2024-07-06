import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { categories } from "../../Utils";

export default function ProblemsPage() {
  return (
    <div className="flex flex-col w-full items-center pt-24 px-4 bwgradient ">
      <div className="w-full max-w-md flex flex-col h-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-4">Problems Page</h1>
          <p className="text-white">
            Browse through the different categories of problems, each with a
            detailed description.
          </p>
        </div>
        <TabGroup className="flex-grow flex flex-col overflow-hidden  ">
          <TabList className="flex gap-4 overflow-x-auto scrollbar-hide">
            {categories.map(({ id, name }) =>
              <Tab
                key={id}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            )}
          </TabList>
          <TabPanels className="mt-3 flex-grow overflow-y-auto scrollbar-hide h-[]">
            {categories.map(({ id, name, posts }) =>
              <TabPanel key={id} className="rounded-xl bg-white/5 p-3 h-full">
                <ul>
                  {posts.map(post =>
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href={post.link} className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <p className="text-white/75">
                        {post.description}
                      </p>
                      <ul
                        className="flex gap-2 text-white/50 mt-1"
                        aria-hidden="true"
                      >
                        <li>
                          {post.date}
                        </li>
                        <li aria-hidden="true">&middot;</li>
                        <li>
                          {post.author}
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>
              </TabPanel>
            )}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
