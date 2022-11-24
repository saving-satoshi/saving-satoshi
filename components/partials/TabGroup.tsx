import { Tab } from "./Tab";

export type Item = {
    text: string;
    slug?: string;
    opt?: string;
  };
  
  export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
    return (
      <div className="flex grid grid-cols-1 md:grid-cols-2 justify-center">
        {items.map((item) => (
          <Tab key={ path + item.slug + item.opt } item={item} path={path} />
        ))}
      </div>
    );
  };
  