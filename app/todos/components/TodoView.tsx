import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
    List, Colors, Portal, Dialog, Paragraph, TextInput, Button, Switch, HelperText
} from 'react-native-paper';
import { ITodoModel } from '../todo-model';
import { deleteTodo, updateTodo } from '../todo-service';
import { theme, Inputheme } from '../../styles/theme';

interface IProps {
    item: ITodoModel,
    removeTodoFromList: (event: string) => void;
    updateList: ( event: ITodoModel ) => void;
}

const TodoView: React.FC<IProps> = ({ item, removeTodoFromList, updateList }) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [deleteLoading, setDeleteLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [todoForUpdate, setTodoForUpdate] = useState<ITodoModel>({} as ITodoModel);
    const [updateLoading, setUpdateLoading] = useState<boolean>(false);

    const deleteTodoFromDialog = async () => {
        setDeleteLoading(true);
        try {
            await deleteTodo(item.id); // removing from the DB
            removeTodoFromList(item.id) // removing from the UI
        } catch (e) {
            setError(e.message)
        }
        setDeleteLoading(false);
    }

    const handleTitleChange = (input: string) => {
        let todo: ITodoModel = {...todoForUpdate};
        todo.title = input;
        setTodoForUpdate(todo);
    }

    const handleDescriptionChange = (input: string) => {
        let todo: ITodoModel = {...todoForUpdate};
        todo.description = input;
        setTodoForUpdate(todo);
    }

    const handleFinishedChange = () => {
        setTodoForUpdate({...todoForUpdate, finished: !todoForUpdate.finished})
    }

    const updateTodoFromDialog = async () => {
        if (todoForUpdate.title.length === 0 ||
            todoForUpdate.description.length === 0
        ) {
            setError('Title and description are required');
            return;
        }
        setUpdateLoading(true);
        try {
            await updateTodo(todoForUpdate);
            updateList(todoForUpdate);
            setVisible(false)
        } catch (e) {
            setError(error)
        }
        setUpdateLoading(false);
    }

    useEffect(() => {
		setTodoForUpdate(item);
	}, []);

    return (
        <>
            <List.Item onPress={() => setVisible(true)}
                title={item.title} description={item.description}
                right={otherProps => {
                    if (item.finished) {
                        return (
                            <List.Icon {...otherProps}
                                color={Colors.green300}
                                icon="check-circle" />
                        )
                    }
                }}
                theme={ theme }
            />
            <Portal>
                <Dialog visible={visible}
                    onDismiss={() => setVisible(false)}>
                    <Dialog.Title>{todoForUpdate.title}</Dialog.Title>
                    <Dialog.Content>
                        <View style={{ marginBottom: 20 }}>
                            <TextInput theme={ Inputheme } 
                                label="Description" 
                                value={ todoForUpdate.description } 
                                multiline={ true }
                                numberOfLines={4}
                                onChangeText={ handleDescriptionChange }/>
                        </View>
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            <Switch color="#233237" value={ todoForUpdate.finished } onValueChange={ handleFinishedChange }/>
                            <Paragraph style={{ paddingLeft: 16, alignSelf: 'center' }}>
                                Finished
                            </Paragraph>
                        </View>
                        <HelperText type="error">{error}</HelperText>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button color="#EAC67A" onPress={() => setVisible(false)} >Cancel</Button>
                        <View style={{ flex: 1 }} />
                        <Button color="#233237" onPress={() => updateTodoFromDialog() } loading={updateLoading}>Update</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    )
}
export default TodoView;

const styles = StyleSheet.create({
    divider: {
        height: 16,
    },
});