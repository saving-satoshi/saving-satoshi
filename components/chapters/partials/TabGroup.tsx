import { Tab } from "./Tab";

export type Item = {
    slug: string;
    id: number;
  };
  
  export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
    return (
      <div className="flex grid grid-cols-1 md:grid-cols-2 justify-center">
        {items.map((item) => (
          <Tab key={ path + item.slug + item.id } item={item} path={path} />
        ))}
      </div>
    );
  };
  