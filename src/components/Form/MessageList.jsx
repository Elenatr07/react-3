import { List, ListItem } from '@mui/material';


export const MessageList = ({ message }) => {
    return (
        <List>
            {message.map((message, idx) => (
                <ListItem key={idx}>
                    {message.author}: {message.value}
                </ListItem>
            ))}
        </List>
    );
};
