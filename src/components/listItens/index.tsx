import * as C from './style.ts';
import { Item } from '../../types/itens.ts';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {
    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    );
}