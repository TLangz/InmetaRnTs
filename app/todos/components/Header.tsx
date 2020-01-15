import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Dialog, HelperText, Paragraph, Portal, Text, TextInput } from 'react-native-paper';
import { postTodo } from '../todo-service';
import { ITodoModel } from '../todo-model';
import { theme, Inputheme } from '../../styles/theme';

interface IProps {
    text?: string;
    updateList: (event: ITodoModel) => void;
}

const Header: React.FC<IProps> = ({ text, updateList }) => {

    const [visible, setVisible] = React.useState<boolean>(false);
    const [todo, setTodo ] = React.useState<ITodoModel>({
        title: '',
        description: ''
    } as ITodoModel);
    const [createLoading, setCreateLoading ] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>('');
    const handleTitleChange = (input: string) => {
        const newTodo = { ...todo };
        newTodo.title = input;
        setTodo(newTodo);
    };

    const handleDescriptionChange = (input: string) => {
        const newTodo = { ...todo };
        newTodo.description = input;
        setTodo(newTodo);
    };

    const handleCreateTodoFromDialog = async () => {
        if (todo.title.length === 0 || todo.description.length === 0) {
            setError('Title and description are required.');
            return;
        }
        setCreateLoading(true);
        try {
            todo.finished = false;
            const { data } = await postTodo(todo);
            updateList(data);
            setTodo({ title: '', description: '' } as ITodoModel);
            setVisible(false);
        } catch (err) {
            setError(err.message);
        }
        setCreateLoading(false);
    };

    return (
        <View style={styles.header} >
            <View style={styles.buttonFrame}>
                <Button
                    onPress={() => setVisible(true)}
                    style={{ marginLeft: 16, marginRight: 16 }}
                    mode="contained"
                    theme={ theme }>
                    Add a todo
                 </Button>
            </View>

            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Title>Create a new todo</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Adding a new todo so you can use it later.</Paragraph>
                        <View style={styles.divider} />
                        <TextInput
                            theme={ Inputheme }
                            mode={'outlined'}
                            label="Title"
                            value={todo.title}
                            onChangeText={handleTitleChange}
                        />
                        <View style={styles.divider} />
                        <TextInput
                            theme={ Inputheme }
                            mode={'outlined'}
                            label="Description"
                            multiline={true}
                            numberOfLines={4}
                            value={todo.description}
                            onChangeText={handleDescriptionChange}
                        />
                        <HelperText type="error">{error}</HelperText>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setVisible(false)} color="#EAC67A">Exit</Button>
                        <Button
                            loading={createLoading}
                            onPress={() => handleCreateTodoFromDialog()}
                            color="#233237">
                            Add
            </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        alignContent: 'center',
        marginTop: 10,
    },
    divider: {
        height: 16,
    },
    buttonFrame: {
        justifyContent: 'center',
    },
});