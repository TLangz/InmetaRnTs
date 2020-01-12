import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { theme } from '../../styles/theme';
import {
  ActivityIndicator,
  Divider,
  HelperText,
  Portal,
  Snackbar,
  Text,
  List,
} from 'react-native-paper';
import { ITodoModel } from '../todo-model';
import { getTodos } from '../todo-service';
import TodoView from '../components/TodoView'


const TodoListScreen: React.FC<void> = () => {
  	const [loading, setLoading] = useState<boolean>(true);
	const [todos, setTodos] = useState<ITodoModel[]>([]);
	const [error, setError] = useState<string>('');
	  
  	const fetch = async () => {
		const { data } = await getTodos();
		try {
			setTodos(data);
		} catch(e) {
			setError(e.message)
		}
		setLoading(false)
	};

	const handleDeleteFromList = (value: string) => {
		setTodos([...todos.filter(item => item.id !== value)])
	}
	  
	useEffect(() => {
		fetch();
	}, []);

	return (
		<>
		{loading ? (
			<View style={ styles.loaderBase}>
			<ActivityIndicator animating size="large" theme={ theme }/>
			</View>
		) : (
			<View style={styles.base}>
				<>
					{todos.map(t => (
						<View key={t.id}>
							<TodoView item={t} removeTodoFromList={ handleDeleteFromList }/>
						</View>
					))}
				</>
			</View>
		)}
			<>
				<Portal>
					<Snackbar
							visible={error.length > 0}
							duration={5000}
							action={{
								label: 'close [x]',
								onPress: () => {
									setError('');
								},
							}}
							onDismiss={async () => {
								setError('');
								await fetch();
							}}
						>
							{error}
						</Snackbar>
				</Portal>
			</>
		</>
	)
};

export default TodoListScreen;
	const styles = StyleSheet.create({
	base: {
		flex: 1,
		backgroundColor: '#233237',
	},
	loaderBase: {
		padding: 16,
		alignContent: 'center',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#233237'
	},
	listItem: {
		width: '80%',
		backgroundColor: 'red'
	}
});
