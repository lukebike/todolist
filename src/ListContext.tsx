import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type ListData = {
  id: number;
  name: string;
};

type ListContextType = {
  lists: ListData[];
  selected: number | null;
  listName: string;
  setLists: (lists: ListData[] | ((prev: ListData[]) => ListData[])) => void;
  setSelected: (id: number | null) => void;
  setListName: (name: string) => void;
  addList: () => void;
  removeList: (id: number) => void;
};

const ListContext = createContext<ListContextType | undefined>(undefined);

const LISTS_KEY = "todolists-names";

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [lists, setLists] = useState<ListData[]>(() => {
    const data = localStorage.getItem(LISTS_KEY);
    return data ? JSON.parse(data) : [];
  });

  const [selected, setSelected] = useState<number | null>(null);
  const [listName, setListName] = useState("");

  useEffect(() => {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
  }, [lists]);

  const addList = () => {
    if (!listName) return alert("List name can not be empty");
    const newId = lists.length;
    setLists((prev) => [...prev, { id: prev.length, name: listName }]);
    setSelected(newId);
    setListName("");
  };

  const removeList = (id: number) => {
    localStorage.removeItem(`todos-list-${id}`);
    setLists((prev) => {
      const newLists = prev.filter((list) => list.id !== id);
      if (selected === id && newLists.length > 0) {
        setSelected(newLists[0].id);
      } else if (newLists.length === 0) {
        setSelected(null);
      }
      return newLists;
    });
  };

  return (
    <ListContext.Provider
      value={{
        lists,
        selected,
        listName,
        setLists,
        setSelected,
        setListName,
        addList,
        removeList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useListContext = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};
