
import { UserCard } from './UserCard/UserCard';
import { useContext } from "react";
import { NamesContext } from "../SearchForm";


import "./style.css";

export function SearchResults() {
  const users = useContext(NamesContext)

  if(users.length < 1){
    return(
      <div className='none'>Нет таких</div>
    )
  }
  
  return (
    <ul className="usersList">
      {users.map((user,index) => (
        <li key={index}><UserCard {...user} /></li>
      ))}
    </ul>
  );
}
