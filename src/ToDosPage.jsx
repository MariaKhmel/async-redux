import {
  useCreateToDoMutation,
  useDeleteToDoMutation,
  useFetchToDosQuery,
} from "./todosSlice";

const ToDosPage = () => {
  const { data, error, isFetching, isError } = useFetchToDosQuery();
  const [deleteToDo] = useDeleteToDoMutation();
  const [createToDo] = useCreateToDoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    createToDo(e.target.elements.content.value);
    e.target.reset();
  };

  return (
    <>
      <h1>ToDosPage</h1>
      {data && (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button type="button" onClick={() => deleteToDo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {isFetching && <p>Loading...</p>}

      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="content" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ToDosPage;
