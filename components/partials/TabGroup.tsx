import { Tab } from "./Tab";

export type Item = {
    text: string;
    slug?: string;
  };
  
  export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
    return (
      <div className="flex grid grid-cols-1 md:grid-cols-2 lg:w-1/2 justify-center gap-x-2 font-nunito font-bold">
        {items.map((item) => (
          <Tab key={ path + item.slug} item={item} path={path} />
        ))}
      </div>
    );
  };
  