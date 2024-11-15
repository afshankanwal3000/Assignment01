
export default async function About (){
  await new Promise ((resolve)=>{
    setTimeout(resolve,5000);
})
  return(
    <h1>About</h1>
  )
}
