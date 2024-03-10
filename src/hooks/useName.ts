import { useEffect, useState } from "react";
import { IOneUser,IUsers } from "../components/SearchFrom/SearchForm";

export default function useName(name: string) {
  const [usersData, setUsersData] = useState<IOneUser[] | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${name}`)
      .then(response => response.json())
      .then((data: IUsers) => { 
        setUsersData(data.users);
      })
      .catch(error => console.error('Ошибка:', error));
  }, [name]);

  return usersData;
}
