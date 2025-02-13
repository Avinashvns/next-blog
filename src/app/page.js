'use client'
import styles from "./page.module.css";

export default function Home() {
  // make function
  const apple=()=>{
    alert("Fruit")
  }
  // param function 
  const subject=(item)=>{
    alert(item)
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>

      <h1>Event Calling</h1>
      <div>
        <button onClick={() => alert("Hello Avi")}>Click me</button> 
      </div>
  
      <h1>Function Calling</h1>
      <div>
        <button onClick={apple}>Call Function</button>
      </div>
      <div>
        <button onClick={()=>subject("Math")}>Param Function</button>
      </div>
    </main>

  );
}
