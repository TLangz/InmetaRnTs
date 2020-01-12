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
} from 'react-native-paper';
import { ITodoModel } from '../todo-model';
import { getTodos } from '../todo-service';
const TodoListScreen: React.FC<void> = () => {
  	const [loading, setLoading] = useState<boolean>(true);
  	const [todos, setTodos] = useState<ITodoModel[]>([]);
  	const fetch = async () => {
		const { data } = await getTodos();
		setTodos(data);
		setLoading(false)
  	};
	useEffect(() => {
		fetch();
	}, []);
	return (
		<>
		{loading ? (
			<View style={styles.loaderBase}>
			<ActivityIndicator animating size="large" theme={ theme }/>
			</View>
		) : (
			<View style={styles.base}>
			{todos.map(t => (
				<View key={t.id}>
				<Text>{t.title}</Text>
				</View>
			))}
			</View>
		)}
		</>
	);
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
});
