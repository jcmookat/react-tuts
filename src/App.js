import Card from './Card'

function App() {
    const users = [
        {
            title: "user 1",
            name: "mukat",
            age: 20,
            gender: "male"
        },
        {
            title: "user 2",
            name: "mukat",
            age: 20,
            gender: "male"
        },
        {
            title: "user 3",
            name: "mukat",
            age: 20,
            gender: "male"
        }
    ]

      return (
    <>
        {users.map((u,index) => <Card key={index} title={u.title} name={u.name} age={u.age} gender={u.gender}/>)}
    </>
  );
}

export default App;
