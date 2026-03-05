interface HeaderProps{
  name: string
}
export const Header = ({ name }:HeaderProps) => {
  return ( 
    <h1>The passed value is  {name}</h1>
   )
}