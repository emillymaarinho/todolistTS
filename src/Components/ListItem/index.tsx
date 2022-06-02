import { useState } from "react";
import { Item } from "../../Types/Item";
import { Container } from "./styles";
import deleteTask from './lixeira.png';

type Props = {
    item: Item;
    onDeleteTask: (indexId: number) => void;
}

const ListItem = ({ item, onDeleteTask }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    const handleDelete = () => {
        onDeleteTask(item.id);
    }

    return (
        <Container done={isChecked}>
            <input type='checkbox' checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
            <label>{item.name}</label>
            <button onClick={handleDelete} >
                <img src={deleteTask} alt='apagar' />
            </button>
        </Container>
    );
};

export default ListItem;

