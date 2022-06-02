import { useState } from 'react';
import { Area, Container, Header } from './App.styles';
import { Item } from './Types/Item';
import ListItem from './Components/ListItem';
import AddArea from './Components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({ id: list.length + 1, name: taskName, done: false });
    setList(newList);
  };

  const handleDeleteTask = (indexId: number) => {
    list.forEach((listObj, index) => {
      if (listObj.id === indexId) {
        let newList = [...list]
        newList.splice(index, 1);
        setList(newList);
      };
    });
  };

  return (
    <Container>
      <Area>
        <Header>LISTA DE TAREFAS</Header>

        <AddArea onEnter={handleAddTask}></AddArea>

        {list.map((item, index) => (
          <ListItem item={item} key={index} onDeleteTask={handleDeleteTask} />
        ))}

      </Area>
    </Container>
  );
};

export default App;