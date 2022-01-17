import LatterAvatar from '@mui/material/Avatar';
type AvatarProps={
    word:string,
}
const Avatar=(props:AvatarProps)=>{
return(
  <LatterAvatar >{props.word}</LatterAvatar>

)
}
export default Avatar;