
const data = fetch("https://nextjs-course-b2897-default-rtdb.firebaseio.com/sales.json")
.then(res => res.json()).then(data => {console.log(data);});
console.log(data);